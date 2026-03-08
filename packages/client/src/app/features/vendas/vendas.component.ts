import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalesService, Sale, CreateSaleDto, SaleItem } from '../../core/services/sales.service';
import { CustomersService, Customer } from '../../core/services/customers.service';
import { ProductsService, Product } from '../../core/services/products.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-vendas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {
  searchTerm = '';
  sales: Sale[] = [];
  customers: Customer[] = [];
  products: Product[] = [];
  loading = false;

  // Modal state
  showModal = false;
  isEditMode = false;
  currentSaleId = '';

  // Formulário mestre
  saleForm: any = {
    customer_id: '',
    payment_method: '',
    notes: '',
    company_id: '',
    user_id: ''
  };

  // Formas de pagamento
  paymentMethods = [
    { value: 'money', label: 'Dinheiro' },
    { value: 'credit_card', label: 'Cartão de Crédito' },
    { value: 'debit_card', label: 'Cartão de Débito' },
    { value: 'pix', label: 'PIX' },
    { value: 'bank_transfer', label: 'Transferência Bancária' },
    { value: 'check', label: 'Cheque' }
  ];

  // Itens da venda
  saleItems: SaleItem[] = [];

  // Formulário para adicionar item
  itemForm = {
    product_id: '',
    quantity: 1,
    price: 0
  };

  constructor(
    private salesService: SalesService,
    private customersService: CustomersService,
    private productsService: ProductsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadSales();
    this.loadCustomers();
    this.loadProducts();
    
    // Pegar company_id e user_id do usuário logado
    const companyId = this.authService.getCompanyId();
    const userId = this.authService.getUserId();
    this.saleForm.company_id = companyId || '';
    this.saleForm.user_id = userId || '';
  }

  loadSales(): void {
    this.loading = true;
    this.salesService.getAll().subscribe({
      next: (sales) => {
        this.sales = sales;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar vendas:', error);
        alert('Erro ao carregar vendas');
        this.loading = false;
      }
    });
  }

  loadCustomers(): void {
    this.customersService.getAll().subscribe({
      next: (customers) => {
        this.customers = customers;
      },
      error: (error) => {
        console.error('Erro ao carregar clientes:', error);
      }
    });
  }

  loadProducts(): void {
    this.productsService.getAll().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => {
        console.error('Erro ao carregar produtos:', error);
      }
    });
  }

  get filteredSales() {
    return this.sales.filter(sale => {
      const searchLower = this.searchTerm.toLowerCase();
      return (
        sale.customer?.name.toLowerCase().includes(searchLower) ||
        sale.payment_method.toLowerCase().includes(searchLower) ||
        sale.notes?.toLowerCase().includes(searchLower)
      );
    });
  }

  openCreateModal(): void {
    this.isEditMode = false;
    this.showModal = true;
    this.resetForm();
  }

  openEditModal(sale: Sale): void {
    this.isEditMode = true;
    this.showModal = true;
    this.currentSaleId = sale.id;
    
    this.saleForm = {
      customer_id: sale.customer_id,
      payment_method: sale.payment_method,
      notes: sale.notes || '',
      company_id: sale.company_id,
      user_id: sale.user_id
    };
    
    this.saleItems = [...sale.items];
  }

  closeModal(): void {
    this.showModal = false;
    this.resetForm();
  }

  resetForm(): void {
    const companyId = this.authService.getCompanyId();
    const userId = this.authService.getUserId();
    
    this.saleForm = {
      customer_id: '',
      payment_method: '',
      notes: '',
      company_id: companyId || '',
      user_id: userId || ''
    };
    
    this.saleItems = [];
    this.itemForm = {
      product_id: '',
      quantity: 1,
      price: 0
    };
  }

  // Gerenciar itens
  onProductChange(): void {
    const selectedProduct = this.products.find(p => p.id === this.itemForm.product_id);
    if (selectedProduct) {
      this.itemForm.price = Number(selectedProduct.price);
    }
  }

  addItem(): void {
    if (!this.itemForm.product_id) {
      alert('Selecione um produto');
      return;
    }

    if (this.itemForm.quantity <= 0) {
      alert('Quantidade deve ser maior que zero');
      return;
    }

    if (this.itemForm.price < 0) {
      alert('Preço deve ser maior ou igual a zero');
      return;
    }

    // Verificar se o produto já foi adicionado
    const existingItem = this.saleItems.find(item => item.product_id === this.itemForm.product_id);
    if (existingItem) {
      alert('Produto já adicionado. Remova-o para adicionar novamente.');
      return;
    }

    const selectedProduct = this.products.find(p => p.id === this.itemForm.product_id);
    
    this.saleItems.push({
      product_id: this.itemForm.product_id,
      quantity: this.itemForm.quantity,
      price: this.itemForm.price,
      product: selectedProduct ? {
        id: selectedProduct.id,
        name: selectedProduct.name,
        sku: selectedProduct.sku
      } : undefined
    });

    // Resetar form de item
    this.itemForm = {
      product_id: '',
      quantity: 1,
      price: 0
    };
  }

  removeItem(index: number): void {
    this.saleItems.splice(index, 1);
  }

  getItemSubtotal(item: SaleItem): number {
    return item.quantity * item.price;
  }

  get totalSale(): number {
    return this.saleItems.reduce((sum, item) => sum + this.getItemSubtotal(item), 0);
  }

  saveSale(): void {
    if (!this.saleForm.customer_id) {
      alert('Selecione um cliente');
      return;
    }

    if (!this.saleForm.payment_method) {
      alert('Selecione uma forma de pagamento');
      return;
    }

    if (this.saleItems.length === 0) {
      alert('Adicione pelo menos um produto à venda');
      return;
    }

    const saleData: CreateSaleDto = {
      company_id: this.saleForm.company_id,
      user_id: this.saleForm.user_id,
      customer_id: this.saleForm.customer_id,
      payment_method: this.saleForm.payment_method,
      notes: this.saleForm.notes || undefined,
      items: this.saleItems.map(item => ({
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price
      }))
    };

    if (this.isEditMode) {
      this.salesService.update(this.currentSaleId, saleData).subscribe({
        next: () => {
          alert('Venda atualizada com sucesso!');
          this.closeModal();
          this.loadSales();
        },
        error: (error) => {
          console.error('Erro ao atualizar venda:', error);
          alert('Erro ao atualizar venda');
        }
      });
    } else {
      this.salesService.create(saleData).subscribe({
        next: () => {
          alert('Venda criada com sucesso!');
          this.closeModal();
          this.loadSales();
        },
        error: (error) => {
          console.error('Erro ao criar venda:', error);
          alert('Erro ao criar venda');
        }
      });
    }
  }

  deleteSale(id: string): void {
    if (confirm('Tem certeza que deseja excluir esta venda?')) {
      this.salesService.delete(id).subscribe({
        next: () => {
          alert('Venda excluída com sucesso!');
          this.loadSales();
        },
        error: (error) => {
          console.error('Erro ao excluir venda:', error);
          alert('Erro ao excluir venda');
        }
      });
    }
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('pt-BR');
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }

  getSaleTotal(sale: Sale): number {
    return sale.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  }

  getPaymentMethodLabel(value: string): string {
    const method = this.paymentMethods.find(m => m.value === value);
    return method ? method.label : value;
  }
}
