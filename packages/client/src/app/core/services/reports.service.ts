import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface DashboardMetrics {
  billing: {
    value: number;
    count: number;
    change: number;
  };
  purchases: {
    value: number;
  };
  profit: {
    value: number;
  };
  margin: {
    value: number;
  };
  receivables: {
    value: number;
  };
}

export interface LowStockProduct {
  id: string;
  name: string;
  sku?: string;
  stock_quantity: number;
  min_stock_level: number;
}

export interface RecentSale {
  id: string;
  sale_date: string;
  total_amount: number;
  customer: {
    name: string;
  };
}

export interface SalesVsPurchases {
  week: string;
  sales: number;
  purchases: number;
}

export interface AccountReceivable {
  customer: {
    id: string;
    name: string;
    phone?: string;
    customer_type: string;
  };
  sales: Array<{
    id: string;
    date: string;
    total: number;
    paid: number;
    owed: number;
    payment_status: string;
  }>;
  totalOwed: number;
  totalPaid: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  constructor(private apiService: ApiService) {}

  getDashboardMetrics(companyId: string): Observable<DashboardMetrics> {
    return this.apiService.get<DashboardMetrics>(`reports/dashboard?company_id=${companyId}`);
  }

  getLowStockProducts(companyId: string): Observable<LowStockProduct[]> {
    return this.apiService.get<LowStockProduct[]>(`reports/low-stock?company_id=${companyId}`);
  }

  getRecentSales(companyId: string, limit: number = 10): Observable<RecentSale[]> {
    return this.apiService.get<RecentSale[]>(`reports/recent-sales?company_id=${companyId}&limit=${limit}`);
  }

  getSalesVsPurchases(companyId: string): Observable<SalesVsPurchases[]> {
    return this.apiService.get<SalesVsPurchases[]>(`reports/sales-vs-purchases?company_id=${companyId}`);
  }

  getAccountsReceivable(companyId: string): Observable<AccountReceivable[]> {
    return this.apiService.get<AccountReceivable[]>(`reports/accounts-receivable?company_id=${companyId}`);
  }
}
