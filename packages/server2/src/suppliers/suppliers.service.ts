import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SuppliersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSupplierDto: CreateSupplierDto) {
    return this.prisma.suppliers.create({
      data: {
        company_id: createSupplierDto.company_id,
        name: createSupplierDto.name,
        email: createSupplierDto.email,
        phone: createSupplierDto.phone,
        address: createSupplierDto.address,
        contact_name: createSupplierDto.contact_name,
        website: createSupplierDto.website,
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
    return this.prisma.suppliers.findMany({
      include: {
        company: true,
      },
    });
  }

  async findOne(id: string) {
    const supplier = await this.prisma.suppliers.findUnique({
      where: { id },
      include: {
        company: true,
      },
    });

    if (!supplier) throw new NotFoundException(`Supplier ${id} not found`);

    return supplier;
  }

  async update(id: string, updateSupplierDto: UpdateSupplierDto) {
    const existing = await this.findOne(id);

    return this.prisma.suppliers.update({
      where: { id },
      data: {
        company_id: updateSupplierDto.company_id ?? existing.company_id,
        name: updateSupplierDto.name ?? existing.name,
        email: updateSupplierDto.email ?? existing.email,
        phone: updateSupplierDto.phone ?? existing.phone,
        address: updateSupplierDto.address ?? existing.address,
        contact_name: updateSupplierDto.contact_name ?? existing.contact_name,
        website: updateSupplierDto.website ?? existing.website,
        updated_at: new Date(),
      },
      include: {
        company: true,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.suppliers.delete({
      where: { id },
    });
  }
}
