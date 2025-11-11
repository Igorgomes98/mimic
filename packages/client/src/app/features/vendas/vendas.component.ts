import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent {
  // Produtos mockados para busca
  products = [
    { id: 1, name: 'Notebook Dell', sku: 'NB-001', price: 3499.99 },
    { id: 2, name: 'Mouse Logitech', sku: 'MS-002', price: 299.99 },
    { id: 3, name: 'Teclado Mecânico RGB', sku: 'KB-003', price: 449.99 },
    { id: 4, name: 'Monitor LG 27"', sku: 'MN-004', price: 1299.99 },
    { id: 5, name: 'Webcam Full HD', sku: 'WC-005', price: 349.99 }
  ];

  // Itens da venda atual
  saleItems: any[] = [];

  // Cliente selecionado
  selectedClient: string = '';

  // Forma de pagamento
  paymentMethod: string = '';

  // Observações
  observations: string = '';

  // Busca de produto
  searchTerm: string = '';
  filteredProducts: any[] = [];

  // Calcular subtotal
  get subtotal(): number {
    return this.saleItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  // Calcular desconto
  get discount(): number {
    return 0;
  }

  // Calcular total
  get total(): number {
    return this.subtotal - this.discount;
  }

  // Buscar produtos
  searchProducts(): void {
    if (this.searchTerm.trim()) {
      this.filteredProducts = this.products.filter(p => 
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        p.sku.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredProducts = [];
    }
  }

  // Adicionar produto à venda
  addProduct(product: any): void {
    const existingItem = this.saleItems.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.saleItems.push({
        ...product,
        quantity: 1
      });
    }
    
    this.searchTerm = '';
    this.filteredProducts = [];
  }

  // Remover item da venda
  removeItem(index: number): void {
    this.saleItems.splice(index, 1);
  }

  // Finalizar venda
  finalizeSale(): void {
    if (this.saleItems.length === 0) {
      alert('Adicione produtos à venda');
      return;
    }

    if (!this.selectedClient) {
      alert('Selecione um cliente');
      return;
    }

    if (!this.paymentMethod) {
      alert('Selecione uma forma de pagamento');
      return;
    }

    alert('Venda finalizada com sucesso!');
    this.clearSale();
  }

  // Limpar venda
  clearSale(): void {
    this.saleItems = [];
    this.selectedClient = '';
    this.paymentMethod = '';
    this.observations = '';
    this.searchTerm = '';
    this.filteredProducts = [];
  }
}
