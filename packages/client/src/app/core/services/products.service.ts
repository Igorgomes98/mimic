import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface Product {
  id: string;
  company_id: string;
  supplier_id?: string;
  name: string;
  description?: string;
  sku?: string;
  price: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  company?: {
    id: string;
    name: string;
  };
  supplier?: {
    id: string;
    name: string;
  };
}

export interface CreateProductDto {
  company_id: string;
  supplier_id?: string;
  name: string;
  description?: string;
  sku?: string;
  price: number;
}

export interface UpdateProductDto {
  company_id?: string;
  supplier_id?: string;
  name?: string;
  description?: string;
  sku?: string;
  price?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private apiService: ApiService) {}

  /**
   * Listar todos os produtos
   */
  getAll(): Observable<Product[]> {
    return this.apiService.get<Product[]>('products');
  }

  /**
   * Buscar produto por ID
   */
  getById(id: string): Observable<Product> {
    return this.apiService.get<Product>(`products/${id}`);
  }

  /**
   * Criar novo produto
   */
  create(product: CreateProductDto): Observable<Product> {
    return this.apiService.post<Product>('products', product);
  }

  /**
   * Atualizar produto
   */
  update(id: string, product: UpdateProductDto): Observable<Product> {
    return this.apiService.patch<Product>(`products/${id}`, product);
  }

  /**
   * Deletar produto
   */
  delete(id: string): Observable<void> {
    return this.apiService.delete<void>(`products/${id}`);
  }
}
