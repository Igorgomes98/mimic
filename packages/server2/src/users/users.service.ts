import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const passwordHashed = await bcrypt.hash(createUserDto.password, 10);
    return this.prisma.users.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password_hash: passwordHashed,
        role: { connect: { id: createUserDto.roleId } },
        company: createUserDto.companyId
          ? { connect: { id: createUserDto.companyId } }
          : undefined,
      },
      include: {
        role: true,
        company: true,
      },
    });
  }

  findAll() {
    return this.prisma.users.findMany({
      include: {
        role: true,
        company: true,
      },
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.users.findUnique({
      where: { id },
      include: {
        role: true,
        company: true,
      },
    });

    if (!user) throw new NotFoundException(`User ${id} not found`);

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.users.findUnique({
      where: { email },
      include: {
        role: true,
        company: true,
      },
    });
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const existing = await this.findOne(id);

    const updateData: any = {
      name: updateUserDto.name ?? existing.name,
      email: updateUserDto.email ?? existing.email,
      role_id: updateUserDto.roleId ?? existing.role_id,
      company_id: updateUserDto.companyId ?? existing.company_id,
      updated_at: new Date(),
    };

    if (updateUserDto.password) {
      updateData.password_hash = await bcrypt.hash(updateUserDto.password, 10);
    }

    return this.prisma.users.update({
      where: { id },
      data: updateData,
      include: {
        role: true,
        company: true,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.users.delete({
      where: { id },
    });
  }
}
