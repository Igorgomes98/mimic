import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { apolloProviders } from './apollo.config';
import { routes } from './app.routes';

// Base application config
const baseConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),
    ...apolloProviders,
  ]
};

// Export the merged configuration
export const appConfig: ApplicationConfig = baseConfig;
