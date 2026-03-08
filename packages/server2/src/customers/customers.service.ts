import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import {
  BulkCreateCustomerDto,
  BulkCreateResultDto,
} from './dto/bulk-create-customer.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.prisma.customers.create({
      data: {
        company_id: createCustomerDto.company_id,
        name: createCustomerDto.name,
        email: createCustomerDto.email,
        phone: createCustomerDto.phone,
        document: createCustomerDto.document,
        address: createCustomerDto.address,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      include: {
        company: true,
      },
    });
  }

  findAll() {
    return this.prisma.customers.findMany({
      include: {
        company: true,
      },
    });
  }

  async findOne(id: string) {
    const customer = await this.prisma.customers.findUnique({
      where: { id },
      include: {
        company: true,
      },
    });

    if (!customer) throw new NotFoundException(`Customer ${id} not found`);

    return customer;
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const existing = await this.findOne(id);

    return this.prisma.customers.update({
      where: { id },
      data: {
        company_id: updateCustomerDto.company_id ?? existing.company_id,
        name: updateCustomerDto.name ?? existing.name,
        email: updateCustomerDto.email ?? existing.email,
        phone: updateCustomerDto.phone ?? existing.phone,
        document: updateCustomerDto.document ?? existing.document,
        address: updateCustomerDto.address ?? existing.address,
        updated_at: new Date(),
      },
      include: {
        company: true,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.customers.delete({
      where: { id },
    });
  }

  /**
   * Buscar cliente por nome (para lookup no CSV)
   */
  async findByName(name: string, companyId: string) {
    return this.prisma.customers.findMany({
      where: {
        name: {
          equals: name,
          mode: 'insensitive',
        },
        company_id: companyId,
      },
    });
  }

  /**
   * Importação em lote de clientes
   */
  async bulkCreate(
    bulkCreateDto: BulkCreateCustomerDto,
  ): Promise<BulkCreateResultDto> {
    const { company_id, customers } = bulkCreateDto;
    const results: BulkCreateResultDto = {
      total: customers.length,
      success: 0,
      failed: 0,
      created: [],
      errors: [],
    };

    for (let i = 0; i < customers.length; i++) {
      const customerData = customers[i];

      try {
        const created = await this.prisma.customers.create({
          data: {
            company_id,
            name: customerData.name,
            email: customerData.email,
            phone: customerData.phone,
            document: customerData.document,
            address: customerData.address,
            is_active: true,
            created_at: new Date(),
            updated_at: new Date(),
          },
          include: {
            company: true,
          },
        });

        results.created.push(created);
        results.success++;
      } catch (error) {
        results.failed++;
        results.errors.push({
          index: i,
          error: error instanceof Error ? error.message : 'Erro desconhecido',
          data: customerData,
        });
      }
    }

    return results;
  }
}
