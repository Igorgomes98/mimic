import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return this.prisma.products.create({
      data: {
        company_id: createProductDto.company_id,
        supplier_id: createProductDto.supplier_id,
        name: createProductDto.name,
        description: createProductDto.description,
        sku: createProductDto.sku,
        price: createProductDto.price,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      include: {
        company: true,
        supplier: true,
      },
    });
  }

  async findAll() {
    return this.prisma.products.findMany({
      include: {
        company: true,
        supplier: true,
      },
    });
  }

  async findOne(id: string) {
    const product = await this.prisma.products.findUnique({
      where: { id },
      include: {
        company: true,
        supplier: true,
      },
    });

    if (!product) throw new NotFoundException(`Product ${id} not found`);

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const existing = await this.findOne(id);

    return this.prisma.products.update({
      where: { id },
      data: {
        company_id: updateProductDto.company_id ?? existing.company_id,
        supplier_id: updateProductDto.supplier_id ?? existing.supplier_id,
        name: updateProductDto.name ?? existing.name,
        description: updateProductDto.description ?? existing.description,
        sku: updateProductDto.sku ?? existing.sku,
        price: updateProductDto.price ?? existing.price,
        updated_at: new Date(),
      },
      include: {
        company: true,
        supplier: true,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.products.delete({
      where: { id },
    });
  }
}
