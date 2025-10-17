import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
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
}
