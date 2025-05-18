import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolesService {
  constructor(private readonly mimic: PrismaService) {}
  create(createRoleInput: CreateRoleInput) {
    return this.mimic.roles.create({
      data: {
        name: createRoleInput.name,
        description: createRoleInput.description,
      }
    })
  }

  findAll() {
    return this.mimic.roles.findMany();
  }

  async findOne(id: string) {
    const role = await this.mimic.roles.findUnique({
      where: { id },
    });
    if (!role) throw new NotFoundException(`Role ${id} not found`);

    return role;
  }

  async update(updateRoleInput: UpdateRoleInput) {
    const existing = await this.findOne(updateRoleInput.id);
    
    return this.mimic.roles.update({
      where: { id: updateRoleInput.id },
      data: {
        name: updateRoleInput.name ?? existing.name,
        description: updateRoleInput.description ?? existing.description,
      }
    })
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.mimic.roles.delete({
      where: { id },
    });
  }
}
