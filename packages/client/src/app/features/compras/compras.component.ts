import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent {
  searchTerm: string = '';
  selectedSupplier: string = '';
  
  // Dados mockados
  purchases = [
    {
      id: 1,
      invoiceNumber: 'NF-123456',
      supplier: 'Dell Brasil',
      entryDate: '2024-10-15',
      observations: 'Compra de notebooks',
      items: 5,
      total: 17499.95
    },
    {
      id: 2,
      invoiceNumber: 'NF-789012',
      supplier: 'Logitech',
      entryDate: '2024-10-14',
      observations: '',
      items: 20,
      total: 5999.80
    }
  ];

  get filteredPurchases() {
    return this.purchases.filter(purchase => {
      const matchesSearch = !this.searchTerm || 
        purchase.invoiceNumber.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        purchase.supplier.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesSupplier = !this.selectedSupplier || purchase.supplier === this.selectedSupplier;
      
      return matchesSearch && matchesSupplier;
    });
  }

  addNewPurchase(): void {
    alert('Funcionalidade de adicionar compra em desenvolvimento');
  }

  importExcel(): void {
    alert('Funcionalidade de importar Excel em desenvolvimento');
  }
}
