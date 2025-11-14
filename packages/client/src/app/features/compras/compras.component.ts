import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PurchasesService, Purchase, CreatePurchaseDto, PurchaseItem } from '../../core/services/purchases.service';
import { SuppliersService, Supplier } from '../../core/services/suppliers.service';
import { ProductsService, Product } from '../../core/services/products.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {
  searchTerm: string = '';
  purchases: Purchase[] = [];
  suppliers: Supplier[] = [];
  products: Product[] = [];
  loading = false;

  // Modal state
  showModal = false;
  isEditMode = false;
  currentPurchaseId: string = '';

  // Formulário mestre
  purchaseForm: any = {
    supplier_id: '',
    invoice_number: '',
    notes: '',
    company_id: '',
    user_id: ''
  };

  // Itens da compra
  purchaseItems: PurchaseItem[] = [];

  // Formulário para adicionar item
  itemForm = {
    product_id: '',
    quantity: 1,
    cost: 0
  };

  constructor(
    private purchasesService: PurchasesService,
    private suppliersService: SuppliersService,
    private productsService: ProductsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadPurchases();
    this.loadSuppliers();
    this.loadProducts();
    
    // Pegar company_id e user_id do usuário logado
    const companyId = this.authService.getCompanyId();
    const userId = this.authService.getUserId();
    this.purchaseForm.company_id = companyId || '';
    this.purchaseForm.user_id = userId || '';
  }

  loadPurchases(): void {
    this.loading = true;
    this.purchasesService.getAll().subscribe({
      next: (purchases) => {
        this.purchases = purchases;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar compras:', error);
        alert('Erro ao carregar compras');
        this.loading = false;
      }
    });
  }

  loadSuppliers(): void {
    this.suppliersService.getAll().subscribe({
      next: (suppliers) => {
        this.suppliers = suppliers;
      },
      error: (error) => {
        console.error('Erro ao carregar fornecedores:', error);
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

  get filteredPurchases() {
    return this.purchases.filter(purchase => {
      const searchLower = this.searchTerm.toLowerCase();
      return (
        purchase.invoice_number?.toLowerCase().includes(searchLower) ||
        purchase.supplier?.name.toLowerCase().includes(searchLower) ||
        purchase.notes?.toLowerCase().includes(searchLower)
      );
    });
  }

  openCreateModal(): void {
    this.isEditMode = false;
    this.showModal = true;
    this.resetForm();
  }

  openEditModal(purchase: Purchase): void {
    this.isEditMode = true;
    this.showModal = true;
    this.currentPurchaseId = purchase.id;
    
    this.purchaseForm = {
      supplier_id: purchase.supplier_id || '',
      invoice_number: purchase.invoice_number || '',
      notes: purchase.notes || '',
      company_id: purchase.company_id,
      user_id: purchase.user_id
    };
    
    this.purchaseItems = [...purchase.items];
  }

  closeModal(): void {
    this.showModal = false;
    this.resetForm();
  }

  resetForm(): void {
    const companyId = this.authService.getCompanyId();
    const userId = this.authService.getUserId();
    
    this.purchaseForm = {
      supplier_id: '',
      invoice_number: '',
      notes: '',
      company_id: companyId || '',
      user_id: userId || ''
    };
    
    this.purchaseItems = [];
    this.itemForm = {
      product_id: '',
      quantity: 1,
      cost: 0
    };
  }

  // Gerenciar itens
  onProductChange(): void {
    const selectedProduct = this.products.find(p => p.id === this.itemForm.product_id);
    if (selectedProduct) {
      this.itemForm.cost = Number(selectedProduct.price);
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

    if (this.itemForm.cost < 0) {
      alert('Custo deve ser maior ou igual a zero');
      return;
    }

    // Verificar se o produto já foi adicionado
    const existingItem = this.purchaseItems.find(item => item.product_id === this.itemForm.product_id);
    if (existingItem) {
      alert('Produto já adicionado. Remova-o para adicionar novamente.');
      return;
    }

    const selectedProduct = this.products.find(p => p.id === this.itemForm.product_id);
    
    this.purchaseItems.push({
      product_id: this.itemForm.product_id,
      quantity: this.itemForm.quantity,
      cost: this.itemForm.cost,
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
      cost: 0
    };
  }

  removeItem(index: number): void {
    this.purchaseItems.splice(index, 1);
  }

  getItemSubtotal(item: PurchaseItem): number {
    return item.quantity * item.cost;
  }

  get totalPurchase(): number {
    return this.purchaseItems.reduce((sum, item) => sum + this.getItemSubtotal(item), 0);
  }

  savePurchase(): void {
    if (this.purchaseItems.length === 0) {
      alert('Adicione pelo menos um produto à compra');
      return;
    }

    const purchaseData: CreatePurchaseDto = {
      company_id: this.purchaseForm.company_id,
      user_id: this.purchaseForm.user_id,
      supplier_id: this.purchaseForm.supplier_id || undefined,
      invoice_number: this.purchaseForm.invoice_number || undefined,
      notes: this.purchaseForm.notes || undefined,
      items: this.purchaseItems.map(item => ({
        product_id: item.product_id,
        quantity: item.quantity,
        cost: item.cost
      }))
    };

    if (this.isEditMode) {
      this.purchasesService.update(this.currentPurchaseId, purchaseData).subscribe({
        next: () => {
          alert('Compra atualizada com sucesso!');
          this.closeModal();
          this.loadPurchases();
        },
        error: (error) => {
          console.error('Erro ao atualizar compra:', error);
          alert('Erro ao atualizar compra');
        }
      });
    } else {
      this.purchasesService.create(purchaseData).subscribe({
        next: () => {
          alert('Compra criada com sucesso!');
          this.closeModal();
          this.loadPurchases();
        },
        error: (error) => {
          console.error('Erro ao criar compra:', error);
          alert('Erro ao criar compra');
        }
      });
    }
  }

  deletePurchase(id: string): void {
    if (confirm('Tem certeza que deseja excluir esta compra?')) {
      this.purchasesService.delete(id).subscribe({
        next: () => {
          alert('Compra excluída com sucesso!');
          this.loadPurchases();
        },
        error: (error) => {
          console.error('Erro ao excluir compra:', error);
          alert('Erro ao excluir compra');
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

  getPurchaseTotal(purchase: Purchase): number {
    return purchase.items.reduce((sum, item) => sum + (item.quantity * item.cost), 0);
  }
}
