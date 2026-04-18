import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CompaniesModule } from './companies/companies.module';
import { CustomersModule } from './customers/customers.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { PurchasesModule } from './purchases/purchases.module';
import { RolesModule } from './roles/roles.module';
import { SalesModule } from './sales/sales.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    UsersModule,
    RolesModule,
    AuthModule,
    CompaniesModule,
    CustomersModule,
    ProductsModule,
    SuppliersModule,
    PurchasesModule,
    SalesModule,
    ReportsModule,
  ],
})
export class AppModule {}
