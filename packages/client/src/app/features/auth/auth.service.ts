import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginGQL, LoginInput } from '../../generated/graphql.services';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'access_token';

  constructor(
    private loginGQL: LoginGQL,
    private router: Router
  ) {}

  login(input: LoginInput) {
    return this.loginGQL.mutate({ input }).pipe(
      tap(({ data }) => {
        if (data?.login?.access_token) {
          localStorage.setItem(this.TOKEN_KEY, data.login.access_token);
        }
      }),
      map(({ data }) => data?.login),
      catchError(error => {
        console.error('Login error:', error);
        return of(null);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/auth/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
}