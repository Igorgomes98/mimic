import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  BulkCreateProductDto,
  BulkCreateProductResultDto,
} from './dto/bulk-create-product.dto';
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

  /**
   * Buscar produto por nome (para lookup no CSV)
   */
  async findByName(name: string, companyId: string) {
    return this.prisma.products.findMany({
      where: {
        name: { equals: name, mode: 'insensitive' },
        company_id: companyId,
      },
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
   * Importação em lote de produtos
   */
  async bulkCreate(
    bulkCreateDto: BulkCreateProductDto,
  ): Promise<BulkCreateProductResultDto> {
    const { company_id, products } = bulkCreateDto;
    const results: BulkCreateProductResultDto = {
      total: products.length,
      success: 0,
      failed: 0,
      created: [],
      errors: [],
    };

    for (let i = 0; i < products.length; i++) {
      const productData = products[i];

      try {
        // Resolver supplier_name para supplier_id se fornecido
        let supplierId: string | undefined;
        if (productData.supplier_name) {
          const suppliers = await this.findSupplierByName(
            productData.supplier_name,
            company_id,
          );
          if (suppliers.length === 1) {
            supplierId = suppliers[0].id;
          } else if (suppliers.length > 1) {
            throw new Error(
              `Múltiplos fornecedores encontrados com nome "${productData.supplier_name}"`,
            );
          } else {
            throw new Error(
              `Fornecedor "${productData.supplier_name}" não encontrado`,
            );
          }
        }

        const created = await this.prisma.products.create({
          data: {
            company_id,
            supplier_id: supplierId,
            name: productData.name,
            description: productData.description,
            sku: productData.sku,
            price: productData.price,
            is_active: true,
            created_at: new Date(),
            updated_at: new Date(),
          },
          include: { company: true, supplier: true },
        });

        results.created.push(created);
        results.success++;
      } catch (error) {
        results.failed++;
        results.errors.push({
          index: i,
          error: error instanceof Error ? error.message : 'Erro desconhecido',
          data: productData,
        });
      }
    }

    return results;
  }
}
