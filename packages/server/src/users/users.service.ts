import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { connect } from 'http2';
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserInput: CreateUserInput) {
    const passwordHashed = await bcrypt.hash(createUserInput.password, 10);
    return this.prisma.users.create({
      data: {
        name: createUserInput.name,
        email: createUserInput.email,
        password_hash: passwordHashed,
        role: {connect: { id: createUserInput.roleId}},
        company: createUserInput.companyId ? {connect: { id: createUserInput.companyId }} : undefined,
      }
    })
  }

  findAll() {
    return this.prisma.users.findMany({
      include: {
        role: true,
        company: true,
      }
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.users.findUnique({
      where: { id },
      include: {
        role: true,
        company: true,
      }
    });
    
    if (!user) throw new NotFoundException(`User ${id} not found`);

    return user
  }

  async update(updateUserInput: UpdateUserInput) {
    const existing = await this.findOne(updateUserInput.id);

    const updateData: any = {
      name: updateUserInput.name ?? existing.name,
      email: updateUserInput.email ?? existing.email,
      role_id: updateUserInput.roleId ?? existing.role_id,
      company_id: updateUserInput.companyId ?? existing.company_id,
    };

    if (updateUserInput.password) {
      updateData.password_hash = await bcrypt.hash(updateUserInput.password, 10);
    }

    return this.prisma.users.update({
      where: { id: updateUserInput.id },
      data: {
        ...updateData,
        updateAt: new Date(),
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.users.delete({
      where: { id }
    });
  }
}
