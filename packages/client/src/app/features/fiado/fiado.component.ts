import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportsService, AccountReceivable } from '../../core/services/reports.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-fiado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fiado.component.html',
  styleUrls: ['./fiado.component.scss']
})
export class FiadoComponent implements OnInit {
  accountsReceivable: AccountReceivable[] = [];
  loading = false;
  selectedCustomer: AccountReceivable | null = null;

  constructor(
    private reportsService: ReportsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadAccountsReceivable();
  }

  loadAccountsReceivable(): void {
    const companyId = this.authService.getCompanyId();
    if (!companyId) {
      alert('Company ID não encontrado');
      return;
    }

    this.loading = true;
    this.reportsService.getAccountsReceivable(companyId).subscribe({
      next: (data) => {
        this.accountsReceivable = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar contas a receber:', err);
        alert('Erro ao carregar dados');
        this.loading = false;
      }
    });
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('pt-BR');
  }

  getTotalOwed(): number {
    return this.accountsReceivable.reduce((sum, acc) => sum + acc.totalOwed, 0);
  }

  viewCustomerDetails(account: AccountReceivable): void {
    this.selectedCustomer = account;
  }

  closeDetails(): void {
    this.selectedCustomer = null;
  }

  registerPayment(saleId: string): void {
    const amount = prompt('Informe o valor do pagamento:');
    if (!amount || isNaN(Number(amount))) {
      return;
    }

    // TODO: Implementar endpoint de registro de pagamento
    alert(`Pagamento de ${this.formatCurrency(Number(amount))} registrado com sucesso!\nNota: Funcionalidade será implementada no backend.`);
    this.loadAccountsReceivable();
  }
}
