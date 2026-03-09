import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { PosGateway } from './pos.gateway';

@Module({
  controllers: [SalesController],
  providers: [SalesService, PosGateway],
})
export class SalesModule {}
