import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface Supplier {
  id: string;
  company_id: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  contact_name?: string;
  website?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateSupplierDto {
  company_id: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  contact_name?: string;
  website?: string;
}

export interface UpdateSupplierDto {
  company_id?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  contact_name?: string;
  website?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  constructor(private apiService: ApiService) {}

  /**
   * Listar todos os fornecedores
   */
  getAll(): Observable<Supplier[]> {
    return this.apiService.get<Supplier[]>('suppliers');
  }

  /**
   * Buscar fornecedor por ID
   */
  getById(id: string): Observable<Supplier> {
    return this.apiService.get<Supplier>(`suppliers/${id}`);
  }

  /**
   * Criar novo fornecedor
   */
  create(supplier: CreateSupplierDto): Observable<Supplier> {
    return this.apiService.post<Supplier>('suppliers', supplier);
  }

  /**
   * Atualizar fornecedor
   */
  update(id: string, supplier: UpdateSupplierDto): Observable<Supplier> {
    return this.apiService.patch<Supplier>(`suppliers/${id}`, supplier);
  }

  /**
   * Deletar fornecedor
   */
  delete(id: string): Observable<void> {
    return this.apiService.delete<void>(`suppliers/${id}`);
  }
}
