import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuppliersService, Supplier } from '../../core/services/suppliers.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-fornecedores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss']
})
export class FornecedoresComponent implements OnInit {
  searchTerm = '';
  suppliers: Supplier[] = [];
  loading = false;
  showModal = false;
  isEditMode = false;

  // Formulário de fornecedor
  supplierForm: any = {
    id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    contact_name: '',
    website: '',
    company_id: '' // Será preenchido com o ID da empresa do usuário logado
  };

  constructor(
    private suppliersService: SuppliersService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadSuppliers();
    // Pegar company_id do usuário logado
    const companyId = this.authService.getCompanyId();
    this.supplierForm.company_id = companyId || '';
  }

  loadSuppliers(): void {
    this.loading = true;
    this.suppliersService.getAll().subscribe({
      next: (suppliers) => {
        this.suppliers = suppliers;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar fornecedores:', error);
        this.loading = false;
        alert('Erro ao carregar fornecedores. Verifique se o servidor está rodando.');
      }
    });
  }

  get filteredSuppliers() {
    if (!this.searchTerm) return this.suppliers;
    
    return this.suppliers.filter(supplier =>
      supplier.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      (supplier.email && supplier.email.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
      (supplier.phone && supplier.phone.includes(this.searchTerm))
    );
  }

  addNewSupplier(): void {
    this.isEditMode = false;
    this.resetForm();
    this.showModal = true;
  }

  editSupplier(supplier: Supplier): void {
    this.isEditMode = true;
    this.supplierForm = {
      id: supplier.id,
      name: supplier.name,
      email: supplier.email || '',
      phone: supplier.phone || '',
      address: supplier.address || '',
      contact_name: supplier.contact_name || '',
      website: supplier.website || '',
      company_id: supplier.company_id
    };
    this.showModal = true;
  }

  deleteSupplier(supplier: Supplier): void {
    if (confirm(`Deseja realmente excluir o fornecedor ${supplier.name}?`)) {
      this.suppliersService.delete(supplier.id).subscribe({
        next: () => {
          alert('Fornecedor excluído com sucesso!');
          this.loadSuppliers();
        },
        error: (error) => {
          console.error('Erro ao excluir fornecedor:', error);
          alert('Erro ao excluir fornecedor');
        }
      });
    }
  }

  saveSupplier(): void {
    if (!this.supplierForm.name) {
      alert('Preencha o nome do fornecedor');
      return;
    }

    const supplierData = {
      company_id: this.supplierForm.company_id,
      name: this.supplierForm.name,
      email: this.supplierForm.email || undefined,
      phone: this.supplierForm.phone || undefined,
      address: this.supplierForm.address || undefined,
      contact_name: this.supplierForm.contact_name || undefined,
      website: this.supplierForm.website || undefined
    };

    if (this.isEditMode) {
      this.suppliersService.update(this.supplierForm.id, supplierData).subscribe({
        next: () => {
          alert('Fornecedor atualizado com sucesso!');
          this.closeModal();
          this.loadSuppliers();
        },
        error: (error) => {
          console.error('Erro ao atualizar fornecedor:', error);
          alert('Erro ao atualizar fornecedor');
        }
      });
    } else {
      this.suppliersService.create(supplierData).subscribe({
        next: () => {
          alert('Fornecedor criado com sucesso!');
          this.closeModal();
          this.loadSuppliers();
        },
        error: (error) => {
          console.error('Erro ao criar fornecedor:', error);
          alert('Erro ao criar fornecedor');
        }
      });
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.resetForm();
  }

  resetForm(): void {
    this.supplierForm = {
      id: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      contact_name: '',
      website: '',
      company_id: this.supplierForm.company_id
    };
  }

  importExcel(): void {
    alert('Funcionalidade de importar Excel em desenvolvimento');
  }
}
