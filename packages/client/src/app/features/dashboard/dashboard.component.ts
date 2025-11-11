import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentDate: Date = new Date();
  
  ngOnInit(): void {
    // Inicialização do componente
  }

  // Dados mockados do dashboard
  metrics = {
    billing: {
      value: 'R$ 45.231,89',
      change: '+15.3% em relação ao mês anterior',
      icon: 'dollar-sign'
    },
    purchases: {
      value: 'R$ 23.456,78',
      change: '+8.2% em relação ao mês anterior',
      icon: 'shopping-bag'
    },
    profit: {
      value: 'R$ 21.775,11',
      change: '+18.9% em relação ao mês anterior',
      icon: 'trending-up'
    },
    margin: {
      value: '32.4%',
      change: '+2.1% em relação ao mês anterior',
      icon: 'percent'
    }
  };

  // Dados do gráfico Vendas vs Compras (últimos 30 dias)
  chartData = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    sales: [3500, 2200, 2800, 2300],
    purchases: [1800, 1000, 4500, 3200]
  };

  // Produtos com estoque baixo
  lowStockProducts = [
    { name: 'Produto A', sku: 'SKU-001', stock: 3 },
    { name: 'Produto B', sku: 'SKU-002', stock: 5 },
    { name: 'Produto C', sku: 'SKU-003', stock: 1 }
  ];

  // Últimas vendas
  recentSales = [
    { id: 'V-001', customer: 'João Silva', date: '2024-10-15', value: 'R$ 1.234,56' },
    { id: 'V-002', customer: 'Maria Santos', date: '2024-10-15', value: 'R$ 890,00' },
    { id: 'V-003', customer: 'Pedro Costa', date: '2024-10-14', value: 'R$ 2.150,00' },
    { id: 'V-004', customer: 'Ana Oliveira', date: '2024-10-14', value: 'R$ 567,89' },
    { id: 'V-005', customer: 'Carlos Lima', date: '2024-10-13', value: 'R$ 1.890,50' }
  ];
}
