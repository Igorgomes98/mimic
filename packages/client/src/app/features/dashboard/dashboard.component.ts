import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReportsService, DashboardMetrics, LowStockProduct, RecentSale, SalesVsPurchases } from '../../core/services/reports.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentDate: Date = new Date();
  loading = true;
  
  metrics: DashboardMetrics | null = null;
  lowStockProducts: LowStockProduct[] = [];
  recentSales: RecentSale[] = [];
  chartData: SalesVsPurchases[] = [];

  constructor(
    private reportsService: ReportsService,
    private authService: AuthService
  ) {}
  
  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    const companyId = this.authService.getCompanyId();
    if (!companyId) {
      console.error('Company ID não encontrado');
      this.loading = false;
      return;
    }

    this.loading = true;

    // Carregar métricas
    this.reportsService.getDashboardMetrics(companyId).subscribe({
      next: (data) => {
        this.metrics = data;
      },
      error: (err) => {
        console.error('Erro ao carregar métricas:', err);
      }
    });

    // Carregar produtos com estoque baixo
    this.reportsService.getLowStockProducts(companyId).subscribe({
      next: (data) => {
        this.lowStockProducts = data;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos com estoque baixo:', err);
      }
    });

    // Carregar vendas recentes
    this.reportsService.getRecentSales(companyId, 5).subscribe({
      next: (data) => {
        this.recentSales = data;
      },
      error: (err) => {
        console.error('Erro ao carregar vendas recentes:', err);
      }
    });

    // Carregar dados do gráfico
    this.reportsService.getSalesVsPurchases(companyId).subscribe({
      next: (data) => {
        this.chartData = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar dados do gráfico:', err);
        this.loading = false;
      }
    });
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

  formatPercentage(value: number): string {
    return `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`;
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('pt-BR');
  }
}
