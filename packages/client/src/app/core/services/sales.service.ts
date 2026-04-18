import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface SaleItem {
  id?: string;
  product_id: string;
  quantity: number;
  price: number;
  product?: {
    id: string;
    name: string;
    sku?: string;
  };
}

export interface Sale {
  id: string;
  company_id: string;
  user_id: string;
  customer_id: string;
  payment_method: string;
  sale_date: string;
  notes?: string;
  created_at: string;
  updated_at: string;
  items: SaleItem[];
  customer?: {
    id: string;
    name: string;
    email?: string;
  };
  user?: {
    id: string;
    name: string;
  };
}

export interface CreateSaleDto {
  company_id: string;
  user_id: string;
  customer_id: string;
  payment_method: string;
  payment_status?: string;
  freight_cost?: number;
  freight_paid_by?: string;
  notes?: string;
  items: {
    product_id: string;
    quantity: number;
    price: number;
  }[];
}

export interface UpdateSaleDto {
  customer_id?: string;
  payment_method?: string;
  notes?: string;
  items?: {
    product_id: string;
    quantity: number;
    price: number;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private endpoint = 'sales';

  constructor(private apiService: ApiService) {}

  getAll(): Observable<Sale[]> {
    return this.apiService.get<Sale[]>(this.endpoint);
  }

  getOne(id: string): Observable<Sale> {
    return this.apiService.get<Sale>(`${this.endpoint}/${id}`);
  }

  create(data: CreateSaleDto): Observable<Sale> {
    return this.apiService.post<Sale>(this.endpoint, data);
  }

  update(id: string, data: UpdateSaleDto): Observable<Sale> {
    return this.apiService.patch<Sale>(`${this.endpoint}/${id}`, data);
  }

  delete(id: string): Observable<void> {
    return this.apiService.delete<void>(`${this.endpoint}/${id}`);
  }
}
