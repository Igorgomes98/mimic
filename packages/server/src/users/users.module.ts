import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [UsersResolver, UsersService],
  exports: [UsersService], // <-- ESSA LINHA RESOLVE O PROBLEMA
})
export class UsersModule {}
