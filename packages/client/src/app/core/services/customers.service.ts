import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface Customer {
  id: string;
  company_id: string;
  name: string;
  email?: string;
  phone?: string;
  document?: string;
  address?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateCustomerDto {
  company_id: string;
  name: string;
  email?: string;
  phone?: string;
  document?: string;
  address?: string;
}

export interface UpdateCustomerDto {
  company_id?: string;
  name?: string;
  email?: string;
  phone?: string;
  document?: string;
  address?: string;
}

export interface BulkCustomerItem {
  name: string;
  email?: string;
  phone?: string;
  document?: string;
  address?: string;
}

export interface BulkCreateCustomerDto {
  company_id: string;
  customers: BulkCustomerItem[];
}

export interface BulkCreateResult {
  total: number;
  success: number;
  failed: number;
  created: Customer[];
  errors: { index: number; error: string; data: BulkCustomerItem }[];
}

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private apiService: ApiService) {}

  /**
   * Listar todos os clientes
   */
  getAll(): Observable<Customer[]> {
    return this.apiService.get<Customer[]>('customers');
  }

  /**
   * Buscar cliente por ID
   */
  getById(id: string): Observable<Customer> {
    return this.apiService.get<Customer>(`customers/${id}`);
  }

  /**
   * Criar novo cliente
   */
  create(customer: CreateCustomerDto): Observable<Customer> {
    return this.apiService.post<Customer>('customers', customer);
  }

  /**
   * Atualizar cliente
   */
  update(id: string, customer: UpdateCustomerDto): Observable<Customer> {
    return this.apiService.patch<Customer>(`customers/${id}`, customer);
  }

  /**
   * Deletar cliente
   */
  delete(id: string): Observable<void> {
    return this.apiService.delete<void>(`customers/${id}`);
  }

  /**
   * Importar clientes em lote (bulk insert)
   */
  bulkCreate(data: BulkCreateCustomerDto): Observable<BulkCreateResult> {
    return this.apiService.post<BulkCreateResult>('customers/bulk', data);
  }
}
