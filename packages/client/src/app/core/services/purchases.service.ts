import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface PurchaseItem {
  id?: string;
  product_id: string;
  quantity: number;
  cost: number;
  product?: {
    id: string;
    name: string;
    sku?: string;
  };
}

export interface Purchase {
  id: string;
  company_id: string;
  user_id: string;
  supplier_id?: string;
  invoice_number?: string;
  input_date: string;
  notes?: string;
  created_at: string;
  updated_at: string;
  items: PurchaseItem[];
  supplier?: {
    id: string;
    name: string;
  };
  user?: {
    id: string;
    name: string;
  };
}

export interface CreatePurchaseDto {
  company_id: string;
  user_id: string;
  supplier_id?: string;
  invoice_number?: string;
  notes?: string;
  items: {
    product_id: string;
    quantity: number;
    cost: number;
  }[];
}

export interface UpdatePurchaseDto {
  supplier_id?: string;
  invoice_number?: string;
  notes?: string;
  items?: {
    product_id: string;
    quantity: number;
    cost: number;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {
  private endpoint = 'purchases';

  constructor(private apiService: ApiService) {}

  getAll(): Observable<Purchase[]> {
    return this.apiService.get<Purchase[]>(this.endpoint);
  }

  getOne(id: string): Observable<Purchase> {
    return this.apiService.get<Purchase>(`${this.endpoint}/${id}`);
  }

  create(data: CreatePurchaseDto): Observable<Purchase> {
    return this.apiService.post<Purchase>(this.endpoint, data);
  }

  update(id: string, data: UpdatePurchaseDto): Observable<Purchase> {
    return this.apiService.patch<Purchase>(`${this.endpoint}/${id}`, data);
  }

  delete(id: string): Observable<void> {
    return this.apiService.delete<void>(`${this.endpoint}/${id}`);
  }
}
