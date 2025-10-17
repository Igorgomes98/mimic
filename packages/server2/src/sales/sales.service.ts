import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SalesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSaleDto: CreateSaleDto) {
    return this.prisma.sales.create({
      data: {
        company_id: createSaleDto.company_id,
        user_id: createSaleDto.user_id,
        customer_id: createSaleDto.customer_id,
        payment_method: createSaleDto.payment_method,
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
}
