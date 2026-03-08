import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import {
  BulkCreatePurchaseDto,
  BulkCreatePurchaseResultDto,
  BulkPurchaseDto,
} from './dto/bulk-create-purchase.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PurchasesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPurchaseDto: CreatePurchaseDto) {
    return this.prisma.purchases.create({
      data: {
        company_id: createPurchaseDto.company_id,
        user_id: createPurchaseDto.user_id,
        supplier_id: createPurchaseDto.supplier_id,
        invoice_number: createPurchaseDto.invoice_number,
        notes: createPurchaseDto.notes,
        input_date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
        items: {
          create: createPurchaseDto.items.map(item => ({
            product_id: item.product_id,
            quantity: item.quantity,
            cost: item.cost,
          })),
        },
      },
      include: {
        company: true,
        user: true,
        supplier: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.purchases.findMany({
      include: {
        company: true,
        user: true,
        supplier: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const purchase = await this.prisma.purchases.findUnique({
      where: { id },
      include: {
        company: true,
        user: true,
        supplier: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!purchase) throw new NotFoundException(`Purchase ${id} not found`);

    return purchase;
  }

  async update(id: string, updatePurchaseDto: UpdatePurchaseDto) {
    await this.findOne(id);

    // Se houver items, deletar os antigos e criar os novos
    if (updatePurchaseDto.items) {
      await this.prisma.purchases_items.deleteMany({
        where: { purchases_id: id },
      });
    }

    return this.prisma.purchases.update({
      where: { id },
      data: {
        company_id: updatePurchaseDto.company_id,
        user_id: updatePurchaseDto.user_id,
        supplier_id: updatePurchaseDto.supplier_id,
        invoice_number: updatePurchaseDto.invoice_number,
        notes: updatePurchaseDto.notes,
        updated_at: new Date(),
        ...(updatePurchaseDto.items && {
          items: {
            create: updatePurchaseDto.items.map(item => ({
              product_id: item.product_id,
              quantity: item.quantity,
              cost: item.cost,
            })),
          },
        }),
      },
      include: {
        company: true,
        user: true,
        supplier: true,
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
    await this.prisma.purchases_items.deleteMany({
      where: { purchases_id: id },
    });

    return this.prisma.purchases.delete({
      where: { id },
    });
  }

  /**
   * Buscar fornecedor por nome (para lookup no CSV)
   */
  async findSupplierByName(name: string, companyId: string) {
    return this.prisma.suppliers.findMany({
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
   * Importação em lote de compras
   */
  async bulkCreate(
    bulkCreateDto: BulkCreatePurchaseDto,
  ): Promise<BulkCreatePurchaseResultDto> {
    const { company_id, user_id, purchases } = bulkCreateDto;
    const results: BulkCreatePurchaseResultDto = {
      total: purchases.length,
      success: 0,
      failed: 0,
      created: [],
      errors: [],
    };

    for (let i = 0; i < purchases.length; i++) {
      const purchaseData: BulkPurchaseDto = purchases[i];

      try {
        // Resolver supplier_name para supplier_id se fornecido
        let supplierId: string | undefined;
        if (purchaseData.supplier_name) {
          const suppliers = await this.findSupplierByName(
            purchaseData.supplier_name,
            company_id,
          );
          if (suppliers.length === 0) {
            throw new Error(
              `Fornecedor "${purchaseData.supplier_name}" não encontrado`,
            );
          }
          if (suppliers.length > 1) {
            throw new Error(
              `Múltiplos fornecedores encontrados com nome "${purchaseData.supplier_name}"`,
            );
          }
          supplierId = suppliers[0].id;
        }

        // Resolver product_name para product_id em cada item
        const resolvedItems: { product_id: string; quantity: number; cost: number }[] = [];
        for (const item of purchaseData.items) {
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
            cost: item.cost,
          });
        }

        const created = await this.prisma.purchases.create({
          data: {
            company_id,
            user_id,
            supplier_id: supplierId,
            invoice_number: purchaseData.invoice_number,
            notes: purchaseData.notes,
            input_date: new Date(),
            created_at: new Date(),
            updated_at: new Date(),
            items: { create: resolvedItems },
          },
          include: {
            company: true,
            user: true,
            supplier: true,
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
          data: purchaseData,
        });
      }
    }

    return results;
  }
}
