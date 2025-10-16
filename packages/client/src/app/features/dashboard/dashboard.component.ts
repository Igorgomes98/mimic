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
  // Dados fictícios para o dashboard
  salesSummary = {
    totalSales: 'R$ 256.890,00',
    monthlyGrowth: '12.5%',
    totalOrders: 1243,
    avgTicket: 'R$ 206,67'
  };

  recentSales = [
    { id: 1, customer: 'João Silva', product: 'Smartphone XYZ', date: '2025-07-10', value: 'R$ 1.899,00', status: 'Entregue' },
    { id: 2, customer: 'Maria Oliveira', product: 'Notebook ABC', date: '2025-07-09', value: 'R$ 4.299,00', status: 'Em trânsito' },
    { id: 3, customer: 'Pedro Santos', product: 'Smart TV 50"', date: '2025-07-08', value: 'R$ 2.499,00', status: 'Processando' },
    { id: 4, customer: 'Ana Costa', product: 'Fone Bluetooth', date: '2025-07-07', value: 'R$ 299,00', status: 'Entregue' },
    { id: 5, customer: 'Carlos Ferreira', product: 'Tablet Premium', date: '2025-07-06', value: 'R$ 1.299,00', status: 'Cancelado' }
  ];

  topProducts = [
    { name: 'Smartphone XYZ', sales: 156, revenue: 'R$ 295.944,00' },
    { name: 'Notebook ABC', sales: 89, revenue: 'R$ 382.611,00' },
    { name: 'Smart TV 50"', sales: 76, revenue: 'R$ 189.924,00' },
    { name: 'Fone Bluetooth', sales: 243, revenue: 'R$ 72.657,00' }
  ];

  monthlySalesData = {
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
    values: [15000, 21000, 18000, 24000, 23000, 28000, 32000]
  };
}
