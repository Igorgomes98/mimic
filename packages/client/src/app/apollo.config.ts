import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, Provider } from '@angular/core';

// Apollo client options factory
const apolloOptionsFactory = (httpLink: HttpLink): ApolloClientOptions<unknown> => ({
  link: httpLink.create({
    uri: 'http://localhost:3000/graphql',
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

// Apollo providers array
export const apolloProviders: Provider[] = [
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
    deps: [HttpLink],
  },
  Apollo,
];

// Apollo configuration
export const apolloConfig: ApplicationConfig = {
  providers: apolloProviders,
};

// Export the Apollo module configuration
export const apolloModuleConfig = {
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
};
