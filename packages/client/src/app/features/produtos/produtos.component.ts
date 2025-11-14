import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService, Product } from '../../core/services/products.service';
import { SuppliersService, Supplier } from '../../core/services/suppliers.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  searchTerm: string = '';
  selectedType: string = '';
  selectedSupplier: string = '';
  
  products: Product[] = [];
  suppliers: Supplier[] = [];
  loading: boolean = false;
  showModal: boolean = false;
  isEditMode: boolean = false;
  
  // Formulário de produto
  productForm: any = {
    id: '',
    name: '',
    description: '',
    sku: '',
    price: 0,
    supplier_id: '',
    company_id: '' // Será preenchido com o ID da empresa do usuário logado
  };

  constructor(
    private productsService: ProductsService,
    private suppliersService: SuppliersService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadSuppliers();
    // Pegar company_id do usuário logado
    const companyId = this.authService.getCompanyId();
    this.productForm.company_id = companyId || '';
  }

  loadProducts(): void {
    this.loading = true;
    this.productsService.getAll().subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar produtos:', error);
        this.loading = false;
        alert('Erro ao carregar produtos. Verifique se o servidor está rodando.');
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

  get filteredProducts() {
    return this.products.filter(product => {
      const matchesSearch = !this.searchTerm || 
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (product.sku && product.sku.toLowerCase().includes(this.searchTerm.toLowerCase()));
      
      const matchesSupplier = !this.selectedSupplier || product.supplier_id === this.selectedSupplier;
      
      return matchesSearch && matchesSupplier;
    });
  }

  addNewProduct(): void {
    this.isEditMode = false;
    this.resetForm();
    this.showModal = true;
  }

  editProduct(product: Product): void {
    this.isEditMode = true;
    this.productForm = {
      id: product.id,
      name: product.name,
      description: product.description || '',
      sku: product.sku || '',
      price: Number(product.price),
      supplier_id: product.supplier_id || '',
      company_id: product.company_id
    };
    this.showModal = true;
  }

  deleteProduct(product: Product): void {
    if (confirm(`Deseja realmente excluir o produto ${product.name}?`)) {
      this.productsService.delete(product.id).subscribe({
        next: () => {
          alert('Produto excluído com sucesso!');
          this.loadProducts();
        },
        error: (error) => {
          console.error('Erro ao excluir produto:', error);
          alert('Erro ao excluir produto');
        }
      });
    }
  }

  saveProduct(): void {
    if (!this.productForm.name || !this.productForm.price) {
      alert('Preencha os campos obrigatórios');
      return;
    }

    const productData = {
      company_id: this.productForm.company_id,
      supplier_id: this.productForm.supplier_id || undefined,
      name: this.productForm.name,
      description: this.productForm.description || undefined,
      sku: this.productForm.sku || undefined,
      price: Number(this.productForm.price)
    };

    if (this.isEditMode) {
      this.productsService.update(this.productForm.id, productData).subscribe({
        next: () => {
          alert('Produto atualizado com sucesso!');
          this.closeModal();
          this.loadProducts();
        },
        error: (error) => {
          console.error('Erro ao atualizar produto:', error);
          alert('Erro ao atualizar produto');
        }
      });
    } else {
      this.productsService.create(productData).subscribe({
        next: () => {
          alert('Produto criado com sucesso!');
          this.closeModal();
          this.loadProducts();
        },
        error: (error) => {
          console.error('Erro ao criar produto:', error);
          alert('Erro ao criar produto');
        }
      });
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.resetForm();
  }

  resetForm(): void {
    this.productForm = {
      id: '',
      name: '',
      description: '',
      sku: '',
      price: 0,
      supplier_id: '',
      company_id: this.productForm.company_id
    };
  }

  importExcel(): void {
    alert('Funcionalidade de importar Excel em desenvolvimento');
  }
}
