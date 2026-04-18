import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Métricas do Dashboard
   */
  async getDashboardMetrics(companyId: string) {
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const firstDayOfLastMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1);

    // Total de vendas do mês
    const salesThisMonth = await this.prisma.sales.aggregate({
      where: {
        company_id: companyId,
        sale_date: { gte: firstDayOfMonth },
      },
      _sum: { total_amount: true },
      _count: true,
    });

    // Total de vendas do mês passado
    const salesLastMonth = await this.prisma.sales.aggregate({
      where: {
        company_id: companyId,
        sale_date: { gte: firstDayOfLastMonth, lt: firstDayOfMonth },
      },
      _sum: { total_amount: true },
    });

    // Total de compras do mês
    const purchasesThisMonth = await this.prisma.purchases_items.aggregate({
      where: {
        purchase: {
          company_id: companyId,
          input_date: { gte: firstDayOfMonth },
        },
      },
      _sum: { cost: true },
    });

    // Contas a receber (pendentes)
    const receivables = await this.prisma.sales.aggregate({
      where: {
        company_id: companyId,
        payment_status: { in: ['PENDENTE', 'PARCIAL'] },
      },
      _sum: { total_amount: true },
    });

    // Calcular porcentagens de mudança
    const salesChange = salesLastMonth._sum.total_amount
      ? ((Number(salesThisMonth._sum.total_amount || 0) - Number(salesLastMonth._sum.total_amount)) /
          Number(salesLastMonth._sum.total_amount)) * 100
      : 0;

    const profit = Number(salesThisMonth._sum.total_amount || 0) - Number(purchasesThisMonth._sum.cost || 0);
    const margin = salesThisMonth._sum.total_amount
      ? (profit / Number(salesThisMonth._sum.total_amount)) * 100
      : 0;

    return {
      billing: {
        value: Number(salesThisMonth._sum.total_amount || 0),
        count: salesThisMonth._count,
        change: salesChange,
      },
      purchases: {
        value: Number(purchasesThisMonth._sum.cost || 0),
      },
      profit: {
        value: profit,
      },
      margin: {
        value: margin,
      },
      receivables: {
        value: Number(receivables._sum.total_amount || 0),
      },
    };
  }

  /**
   * Produtos com estoque baixo
   */
  async getLowStockProducts(companyId: string) {
    return this.prisma.products.findMany({
      where: {
        company_id: companyId,
        is_active: true,
        stock_quantity: {
          lte: this.prisma.products.fields.min_stock_level,
        },
      },
      select: {
        id: true,
        name: true,
        sku: true,
        stock_quantity: true,
        min_stock_level: true,
      },
      orderBy: {
        stock_quantity: 'asc',
      },
      take: 10,
    });
  }

  /**
   * Últimas vendas
   */
  async getRecentSales(companyId: string, limit: number = 10) {
    return this.prisma.sales.findMany({
      where: { company_id: companyId },
      include: {
        customer: {
          select: { name: true },
        },
      },
      orderBy: { sale_date: 'desc' },
      take: limit,
    });
  }

  /**
   * Vendas vs Compras (últimas 4 semanas)
   */
  async getSalesVsPurchases(companyId: string) {
    const weeks = 4;
    const now = new Date();
    const results: Array<{ week: string; sales: number; purchases: number }> = [];

    for (let i = weeks - 1; i >= 0; i--) {
      const weekStart = new Date(now);
      weekStart.setDate(now.getDate() - ((i + 1) * 7));
      const weekEnd = new Date(now);
      weekEnd.setDate(now.getDate() - (i * 7));

      const sales = await this.prisma.sales.aggregate({
        where: {
          company_id: companyId,
          sale_date: { gte: weekStart, lt: weekEnd },
        },
        _sum: { total_amount: true },
      });

      const purchases = await this.prisma.purchases_items.aggregate({
        where: {
          purchase: {
            company_id: companyId,
            input_date: { gte: weekStart, lt: weekEnd },
          },
        },
        _sum: { cost: true },
      });

      results.push({
        week: `Semana ${weeks - i}`,
        sales: Number(sales._sum.total_amount || 0),
        purchases: Number(purchases._sum.cost || 0),
      });
    }

    return results;
  }

  /**
   * Contas a Receber (Fiado)
   */
  async getAccountsReceivable(companyId: string) {
    const pendingSales = await this.prisma.sales.findMany({
      where: {
        company_id: companyId,
        payment_status: { in: ['PENDENTE', 'PARCIAL'] },
      },
      include: {
        customer: {
          select: {
            id: true,
            name: true,
            phone: true,
            customer_type: true,
          },
        },
        payments: true,
      },
      orderBy: { sale_date: 'desc' },
    });

    // Agrupar por cliente
    const byCustomer = pendingSales.reduce((acc, sale) => {
      const customerId = sale.customer_id;
      if (!acc[customerId]) {
        acc[customerId] = {
          customer: sale.customer,
          sales: [],
          totalOwed: 0,
          totalPaid: 0,
        };
      }

      const totalPaid = sale.payments.reduce(
        (sum, payment) => sum + Number(payment.amount),
        0
      );
      const owed = Number(sale.total_amount) - totalPaid;

      acc[customerId].sales.push({
        id: sale.id,
        date: sale.sale_date,
        total: Number(sale.total_amount),
        paid: totalPaid,
        owed,
        payment_status: sale.payment_status,
      });

      acc[customerId].totalOwed += owed;
      acc[customerId].totalPaid += totalPaid;

      return acc;
    }, {});

    return Object.values(byCustomer);
  }

  /**
   * Relatório Financeiro
   */
  async getFinancialReport(companyId: string, startDate?: Date, endDate?: Date) {
    const start = startDate || new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const end = endDate || new Date();

    const sales = await this.prisma.sales.findMany({
      where: {
        company_id: companyId,
        sale_date: { gte: start, lte: end },
      },
      include: {
        items: true,
        payments: true,
      },
    });

    const purchases = await this.prisma.purchases.findMany({
      where: {
        company_id: companyId,
        input_date: { gte: start, lte: end },
      },
      include: {
        items: true,
      },
    });

    const totalSales = sales.reduce((sum, s) => sum + Number(s.total_amount), 0);
    const totalReceived = sales.reduce(
      (sum, s) => sum + s.payments.reduce((p, pay) => p + Number(pay.amount), 0),
      0
    );
    const totalPending = totalSales - totalReceived;

    const totalPurchases = purchases.reduce(
      (sum, p) => sum + p.items.reduce((i, item) => i + Number(item.cost) * item.quantity, 0),
      0
    );

    return {
      period: { start, end },
      sales: {
        total: totalSales,
        received: totalReceived,
        pending: totalPending,
        count: sales.length,
      },
      purchases: {
        total: totalPurchases,
        count: purchases.length,
      },
      profit: {
        gross: totalSales - totalPurchases,
        net: totalReceived - totalPurchases,
      },
    };
  }
}
