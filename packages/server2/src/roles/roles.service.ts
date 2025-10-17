import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRoleDto: CreateRoleDto) {
    return this.prisma.roles.create({
      data: {
        name: createRoleDto.name,
        description: createRoleDto.description,
      },
    });
  }

  findAll() {
    return this.prisma.roles.findMany();
  }

  async findOne(id: string) {
    const role = await this.prisma.roles.findUnique({
      where: { id },
    });
    if (!role) throw new NotFoundException(`Role ${id} not found`);

    return role;
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    const existing = await this.findOne(id);

    return this.prisma.roles.update({
      where: { id },
      data: {
        name: updateRoleDto.name ?? existing.name,
        description: updateRoleDto.description ?? existing.description,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.roles.delete({
      where: { id },
    });
  }
}
