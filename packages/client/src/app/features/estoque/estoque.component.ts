import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent {
  searchTerm: string = '';
  sortBy: string = '';

  // Dados mockados
  stockItems = [
    {
      id: 1,
      product: 'Notebook Dell Inspiron',
      sku: 'NB-001',
      quantity: 15,
      quantityLabel: '15 un.',
      avgCost: 2800.00,
      salePrice: 3499.99,
      stockValue: 42000.00,
      unitProfit: 699.99,
      margin: 25.0
    },
    {
      id: 2,
      product: 'Mouse Logitech MX Master',
      sku: 'MS-002',
      quantity: 48,
      quantityLabel: '48 un.',
      avgCost: 220.00,
      salePrice: 299.99,
      stockValue: 9900.00,
      unitProfit: 79.99,
      margin: 36.4
    },
    {
      id: 3,
      product: 'Teclado Mecânico RGB',
      sku: 'KB-003',
      quantity: 3,
      quantityLabel: '3 un.',
      avgCost: 320.00,
      salePrice: 449.99,
      stockValue: 2550.00,
      unitProfit: 129.99,
      margin: 40.6
    }
  ];

  // Métricas
  get totalStockValue(): number {
    return this.stockItems.reduce((sum, item) => sum + item.stockValue, 0);
  }

  get totalItems(): number {
    return this.stockItems.length;
  }

  get avgMargin(): number {
    const totalMargin = this.stockItems.reduce((sum, item) => sum + item.margin, 0);
    return totalMargin / this.stockItems.length;
  }

  get filteredItems() {
    let items = [...this.stockItems];
    
    if (this.searchTerm) {
      items = items.filter(item =>
        item.product.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.sku.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    
    return items;
  }

  importExcel(): void {
    alert('Funcionalidade de importar Excel em desenvolvimento');
  }
}
