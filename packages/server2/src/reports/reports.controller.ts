import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('reports')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('dashboard')
  @ApiOperation({ summary: 'Get dashboard metrics' })
  getDashboardMetrics(@Query('company_id') companyId: string) {
    return this.reportsService.getDashboardMetrics(companyId);
  }

  @Get('low-stock')
  @ApiOperation({ summary: 'Get products with low stock' })
  getLowStockProducts(@Query('company_id') companyId: string) {
    return this.reportsService.getLowStockProducts(companyId);
  }

  @Get('recent-sales')
  @ApiOperation({ summary: 'Get recent sales' })
  getRecentSales(
    @Query('company_id') companyId: string,
    @Query('limit') limit?: string,
  ) {
    return this.reportsService.getRecentSales(companyId, limit ? parseInt(limit) : 10);
  }

  @Get('sales-vs-purchases')
  @ApiOperation({ summary: 'Get sales vs purchases (last 4 weeks)' })
  getSalesVsPurchases(@Query('company_id') companyId: string) {
    return this.reportsService.getSalesVsPurchases(companyId);
  }

  @Get('accounts-receivable')
  @ApiOperation({ summary: 'Get accounts receivable (fiado)' })
  getAccountsReceivable(@Query('company_id') companyId: string) {
    return this.reportsService.getAccountsReceivable(companyId);
  }

  @Get('financial')
  @ApiOperation({ summary: 'Get financial report' })
  getFinancialReport(
    @Query('company_id') companyId: string,
    @Query('start_date') startDate?: string,
    @Query('end_date') endDate?: string,
  ) {
    return this.reportsService.getFinancialReport(
      companyId,
      startDate ? new Date(startDate) : undefined,
      endDate ? new Date(endDate) : undefined,
    );
  }
}
