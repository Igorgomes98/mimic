import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import {
  BulkCreateSaleDto,
  BulkCreateSaleResultDto,
  BulkSaleDto,
} from './dto/bulk-create-sale.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SalesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSaleDto: CreateSaleDto) {
    // Calcular total dos itens
    const itemsTotal = createSaleDto.items.reduce((sum, item) => 
      sum + (item.price * item.quantity), 0
    );
    
    // Calcular total final (itens + frete)
    const totalAmount = itemsTotal + (createSaleDto.freight_cost || 0);

    // Usar transação para garantir atomicidade
    return this.prisma.$transaction(async (tx) => {
      // Criar a venda
      const sale = await tx.sales.create({
        data: {
          company_id: createSaleDto.company_id,
          user_id: createSaleDto.user_id,
          customer_id: createSaleDto.customer_id,
          payment_method: createSaleDto.payment_method,
          payment_status: createSaleDto.payment_status || 'PENDENTE',
          freight_cost: createSaleDto.freight_cost || 0,
          freight_paid_by: createSaleDto.freight_paid_by || 'CLIENTE',
          total_amount: totalAmount,
          notes: createSaleDto.notes,
          sale_date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
          items: {
            create: createSaleDto.items.map(item => ({
              product_id: item.product_id,
              quantity: item.quantity,
              price: item.price,
            })),
          },
        },
        include: {
          company: true,
          user: true,
          customer: true,
          items: {
            include: {
              product: true,
            },
          },
        },
      });

      // Atualizar estoque e criar movimentações
      for (const item of createSaleDto.items) {
        // Reduzir quantidade em estoque
        await tx.products.update({
          where: { id: item.product_id },
          data: {
            stock_quantity: {
              decrement: item.quantity,
            },
          },
        });

        // Registrar movimentação de estoque
        await tx.stock_movements.create({
          data: {
            product_id: item.product_id,
            quantity: -item.quantity,
            type: 'SAIDA',
            reason: `Venda #${sale.id}`,
            reference_id: sale.id,
          },
        });
      }

      return sale;
    });
  }

  findAll() {
    return this.prisma.sales.findMany({
      include: {
        company: true,
        user: true,
        customer: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const sale = await this.prisma.sales.findUnique({
      where: { id },
      include: {
        company: true,
        user: true,
        customer: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!sale) throw new NotFoundException(`Sale ${id} not found`);

    return sale;
  }

  async update(id: string, updateSaleDto: UpdateSaleDto) {
    await this.findOne(id);

    // Se houver items, deletar os antigos e criar os novos
    if (updateSaleDto.items) {
      await this.prisma.sales_items.deleteMany({
        where: { sales_id: id },
      });
    }

    return this.prisma.sales.update({
      where: { id },
      data: {
        company_id: updateSaleDto.company_id,
        user_id: updateSaleDto.user_id,
        customer_id: updateSaleDto.customer_id,
        payment_method: updateSaleDto.payment_method,
        notes: updateSaleDto.notes,
        updated_at: new Date(),
        ...(updateSaleDto.items && {
          items: {
            create: updateSaleDto.items.map(item => ({
              product_id: item.product_id,
              quantity: item.quantity,
              price: item.price,
            })),
          },
        }),
      },
      include: {
        company: true,
        user: true,
        customer: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    
    // Deletar items primeiro
    await this.prisma.sales_items.deleteMany({
      where: { sales_id: id },
    });

    return this.prisma.sales.delete({
      where: { id },
    });
  }

  /**
   * Buscar cliente por nome (para lookup no CSV)
   */
  async findCustomerByName(name: string, companyId: string) {
    return this.prisma.customers.findMany({
      where: {
        name: { equals: name, mode: 'insensitive' },
        company_id: companyId,
      },
    });
  }

  /**
   * Buscar produto por nome (para lookup no CSV)
   */
  async findProductByName(name: string, companyId: string) {
    return this.prisma.products.findMany({
      where: {
        name: { equals: name, mode: 'insensitive' },
        company_id: companyId,
      },
    });
  }

  /**
   * Importação em lote de vendas
   */
  async bulkCreate(
    bulkCreateDto: BulkCreateSaleDto,
  ): Promise<BulkCreateSaleResultDto> {
    const { company_id, user_id, sales } = bulkCreateDto;
    const results: BulkCreateSaleResultDto = {
      total: sales.length,
      success: 0,
      failed: 0,
      created: [],
      errors: [],
    };

    for (let i = 0; i < sales.length; i++) {
      const saleData: BulkSaleDto = sales[i];

      try {
        // Resolver customer_name para customer_id
        const customers = await this.findCustomerByName(
          saleData.customer_name,
          company_id,
        );
        if (customers.length === 0) {
          throw new Error(`Cliente "${saleData.customer_name}" não encontrado`);
        }
        if (customers.length > 1) {
          throw new Error(
            `Múltiplos clientes encontrados com nome "${saleData.customer_name}"`,
          );
        }
        const customerId = customers[0].id;

        // Resolver product_name para product_id em cada item
        const resolvedItems: { product_id: string; quantity: number; price: number }[] = [];
        for (const item of saleData.items) {
          const products = await this.findProductByName(
            item.product_name,
            company_id,
          );
          if (products.length === 0) {
            throw new Error(`Produto "${item.product_name}" não encontrado`);
          }
          if (products.length > 1) {
            throw new Error(
              `Múltiplos produtos encontrados com nome "${item.product_name}"`,
            );
          }
          resolvedItems.push({
            product_id: products[0].id,
            quantity: item.quantity,
            price: item.price,
          });
        }

        const created = await this.prisma.sales.create({
          data: {
            company_id,
            user_id,
            customer_id: customerId,
            payment_method: saleData.payment_method,
            notes: saleData.notes,
            sale_date: new Date(),
            created_at: new Date(),
            updated_at: new Date(),
            items: { create: resolvedItems },
          },
          include: {
            company: true,
            user: true,
            customer: true,
            items: { include: { product: true } },
          },
        });

        results.created.push(created);
        results.success++;
      } catch (error) {
        results.failed++;
        results.errors.push({
          index: i,
          error: error instanceof Error ? error.message : 'Erro desconhecido',
          data: saleData,
        });
      }
    }

    return results;
  }
}
