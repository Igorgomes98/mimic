import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompaniesService {
  constructor(private readonly mimic: PrismaService) {}
  create(createCompanyInput: CreateCompanyInput) {
    return this.mimic.companies.create({
      data: {
        name: createCompanyInput.name,
        email: createCompanyInput.email,
        phone: createCompanyInput.phone,
        address: createCompanyInput.address,
        cnpj: createCompanyInput.cnpj,
        is_active: createCompanyInput.is_active,
        created_at: new Date(),
        updated_at: new Date(),
      }
    })
  }

  findAll() {
    return this.mimic.companies.findMany();
  }

  async findOne(id: string) {
    const company = await this.mimic.companies.findUnique({
      where: { id },
    })

    if (!company) throw new NotFoundException(`Company ${id} not found`);

    return company;
  }

  async update(updateCompanyInput: UpdateCompanyInput) {
    const existing = await this.findOne(updateCompanyInput.id);

    return this.mimic.companies.update({
      where: { id: updateCompanyInput.id },
      data: {
        name: updateCompanyInput.name ?? existing.name,
        email: updateCompanyInput.email ?? existing.email,
        phone: updateCompanyInput.phone ?? existing.phone,
        address: updateCompanyInput.address !== null ? updateCompanyInput.address : existing.address !== null ? existing.address : undefined,
        cnpj: updateCompanyInput.cnpj ?? existing.cnpj,
        is_active: updateCompanyInput.is_active ?? existing.is_active,
        updated_at: new Date(),
      }
    })
  }

  remove(id: string) {
    return this.mimic.companies.delete({
      where: { id },
    });
  }
}
