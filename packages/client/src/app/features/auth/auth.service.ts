import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { ApiService } from '../../core/services/api.service';

export interface LoginInput {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  company_id: string;
  role_id: string;
  role?: {
    id: string;
    name: string;
    description: string;
  };
  company?: {
    id: string;
    name: string;
    email: string;
  };
}

export interface LoginResponse {
  access_token: string;
  user: User;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'access_token';
  private readonly USER_KEY = 'current_user';
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
    // Carregar usuário após a inicialização (apenas no browser)
    if (this.isBrowser) {
      this.loadStoredUser();
    }
  }
  
  private loadStoredUser(): void {
    if (!this.isBrowser) return;
    
    try {
      const userJson = localStorage.getItem(this.USER_KEY);
      if (userJson) {
        const user = JSON.parse(userJson);
        this.currentUserSubject.next(user);
      }
    } catch (error) {
      console.error('Error loading stored user:', error);
    }
  }

  login(input: LoginInput): Observable<LoginResponse | null> {
    return this.apiService.post<LoginResponse>('auth/login', input).pipe(
      tap((response) => {
        if (response?.access_token && response?.user) {
          this.setToken(response.access_token);
          this.setCurrentUser(response.user);
          this.currentUserSubject.next(response.user);
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return of(null);
      })
    );
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.USER_KEY);
    }
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  getToken(): string | null {
    if (!this.isBrowser) return null;
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getCurrentUser(): User | null {
    if (!this.isBrowser) return null;
    
    const userJson = localStorage.getItem(this.USER_KEY);
    if (userJson) {
      try {
        return JSON.parse(userJson);
      } catch {
        return null;
      }
    }
    return null;
  }

  getCompanyId(): string | null {
    const user = this.getCurrentUser();
    return user?.company_id || null;
  }

  getUserId(): string | null {
    const user = this.getCurrentUser();
    return user?.id || null;
  }

  private setToken(token: string): void {
    if (!this.isBrowser) return;
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  private setCurrentUser(user: User): void {
    if (!this.isBrowser) return;
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }
}