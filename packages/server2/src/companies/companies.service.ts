import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CompaniesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCompanyDto: CreateCompanyDto) {
    return this.prisma.companies.create({
      data: {
        name: createCompanyDto.name,
        email: createCompanyDto.email,
        phone: createCompanyDto.phone,
        address: createCompanyDto.address,
        cnpj: createCompanyDto.cnpj,
        is_active: createCompanyDto.is_active ?? true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.companies.findMany();
  }

  async findOne(id: string) {
    const company = await this.prisma.companies.findUnique({
      where: { id },
    });

    if (!company) throw new NotFoundException(`Company ${id} not found`);

    return company;
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    const existing = await this.findOne(id);

    return this.prisma.companies.update({
      where: { id },
      data: {
        name: updateCompanyDto.name ?? existing.name,
        email: updateCompanyDto.email ?? existing.email,
        phone: updateCompanyDto.phone ?? existing.phone,
        address: updateCompanyDto.address !== undefined ? updateCompanyDto.address : undefined,
        cnpj: updateCompanyDto.cnpj ?? existing.cnpj,
        is_active: updateCompanyDto.is_active ?? existing.is_active,
        updated_at: new Date(),
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.companies.delete({
      where: { id },
    });
  }
}
