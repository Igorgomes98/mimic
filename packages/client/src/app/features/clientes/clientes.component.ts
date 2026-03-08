import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
  CustomersService,
  Customer,
  BulkCustomerItem,
} from '../../core/services/customers.service';
import { AuthService } from '../auth/auth.service';
import {
  ImportCsvDialogComponent,
  ImportCsvDialogConfig,
  ImportCsvDialogResult,
} from '../../shared/components/import-csv-dialog/import-csv-dialog.component';
import { CsvColumn } from '../../shared/services/csv-parser.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  searchTerm = '';
  customers: Customer[] = [];
  loading = false;
  showModal = false;
  isEditMode = false;

  // Formulário de cliente
  customerForm: any = {
    id: '',
    name: '',
    email: '',
    phone: '',
    document: '',
    address: '',
    company_id: '' // Será preenchido com o ID da empresa do usuário logado
  };

  // Configuração das colunas para importação CSV
  readonly csvColumns: CsvColumn[] = [
    { key: 'name', header: 'Nome', required: true, type: 'string' },
    { key: 'email', header: 'Email', required: false, type: 'email' },
    { key: 'phone', header: 'Telefone', required: false, type: 'string' },
    { key: 'document', header: 'CPF/CNPJ', required: false, type: 'string' },
    { key: 'address', header: 'Endereco', required: false, type: 'string' },
  ];

  constructor(
    private customersService: CustomersService,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
    // Pegar company_id do usuário logado
    const companyId = this.authService.getCompanyId();
    this.customerForm.company_id = companyId || '';
  }

  loadCustomers(): void {
    this.loading = true;
    this.customersService.getAll().subscribe({
      next: (customers) => {
        this.customers = customers;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar clientes:', error);
        this.loading = false;
        alert('Erro ao carregar clientes. Verifique se o servidor está rodando.');
      }
    });
  }

  get filteredClients() {
    if (!this.searchTerm) return this.customers;
    
    return this.customers.filter(customer =>
      customer.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      (customer.email && customer.email.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
      (customer.document && customer.document.includes(this.searchTerm))
    );
  }

  addNewClient(): void {
    this.isEditMode = false;
    this.resetForm();
    this.showModal = true;
  }

  editClient(customer: Customer): void {
    this.isEditMode = true;
    this.customerForm = {
      id: customer.id,
      name: customer.name,
      email: customer.email || '',
      phone: customer.phone || '',
      document: customer.document || '',
      address: customer.address || '',
      company_id: customer.company_id
    };
    this.showModal = true;
  }

  deleteClient(customer: Customer): void {
    if (confirm(`Deseja realmente excluir o cliente ${customer.name}?`)) {
      this.customersService.delete(customer.id).subscribe({
        next: () => {
          alert('Cliente excluído com sucesso!');
          this.loadCustomers();
        },
        error: (error) => {
          console.error('Erro ao excluir cliente:', error);
          alert('Erro ao excluir cliente');
        }
      });
    }
  }

  saveCustomer(): void {
    if (!this.customerForm.name) {
      alert('Preencha o nome do cliente');
      return;
    }

    const customerData = {
      company_id: this.customerForm.company_id,
      name: this.customerForm.name,
      email: this.customerForm.email || undefined,
      phone: this.customerForm.phone || undefined,
      document: this.customerForm.document || undefined,
      address: this.customerForm.address || undefined
    };

    if (this.isEditMode) {
      this.customersService.update(this.customerForm.id, customerData).subscribe({
        next: () => {
          alert('Cliente atualizado com sucesso!');
          this.closeModal();
          this.loadCustomers();
        },
        error: (error) => {
          console.error('Erro ao atualizar cliente:', error);
          alert('Erro ao atualizar cliente');
        }
      });
    } else {
      this.customersService.create(customerData).subscribe({
        next: () => {
          alert('Cliente criado com sucesso!');
          this.closeModal();
          this.loadCustomers();
        },
        error: (error) => {
          console.error('Erro ao criar cliente:', error);
          alert('Erro ao criar cliente');
        }
      });
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.resetForm();
  }

  resetForm(): void {
    this.customerForm = {
      id: '',
      name: '',
      email: '',
      phone: '',
      document: '',
      address: '',
      company_id: this.customerForm.company_id
    };
  }

  /**
   * Abrir diálogo de importação CSV
   */
  importCsv(): void {
    const config: ImportCsvDialogConfig = {
      title: 'Importar Clientes via CSV',
      entityName: 'Cliente',
      columns: this.csvColumns,
      templateFilename: 'modelo_clientes.csv',
    };

    const dialogRef = this.dialog.open(ImportCsvDialogComponent, {
      width: '900px',
      maxHeight: '90vh',
      data: config,
      disableClose: true,
    });

    dialogRef
      .afterClosed()
      .subscribe((result: ImportCsvDialogResult<BulkCustomerItem>) => {
        if (result?.confirmed && result.data.length > 0) {
          this.processCsvImport(result.data);
        }
      });
  }

  /**
   * Processar importação CSV
   */
  private processCsvImport(customers: BulkCustomerItem[]): void {
    const companyId = this.authService.getCompanyId();
    if (!companyId) {
      alert('Erro: Empresa não identificada');
      return;
    }

    this.loading = true;
    this.customersService
      .bulkCreate({
        company_id: companyId,
        customers,
      })
      .subscribe({
        next: (result) => {
          this.loading = false;
          const message = `Importação concluída!\n` +
            `Total: ${result.total}\n` +
            `Sucesso: ${result.success}\n` +
            `Falhas: ${result.failed}`;
          alert(message);

          if (result.success > 0) {
            this.loadCustomers();
          }

          if (result.errors.length > 0) {
            console.error('Erros na importação:', result.errors);
          }
        },
        error: (error) => {
          this.loading = false;
          console.error('Erro na importação:', error);
          alert('Erro ao importar clientes. Verifique o console para mais detalhes.');
        },
      });
  }
}
