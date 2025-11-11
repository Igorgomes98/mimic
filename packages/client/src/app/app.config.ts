import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
// import { authInterceptor } from './core/interceptors/auth.interceptor';

// Application config
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      // withInterceptors([authInterceptor]) // Desabilitado temporariamente
    ),
    provideClientHydration()
  ]
};
