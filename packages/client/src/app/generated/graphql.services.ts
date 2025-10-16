import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: string; output: string };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  access_token: Scalars['String']['output'];
  user: User;
};

export type Company = {
  __typename?: 'Company';
  /** Address of the company */
  address: Maybe<Scalars['JSON']['output']>;
  /** CNPJ of the company */
  cnpj: Maybe<Scalars['String']['output']>;
  /** Register a date to create the company */
  created_at: Scalars['DateTime']['output'];
  /** Email of the company */
  email: Scalars['String']['output'];
  /** Unique identifier for the company */
  id: Scalars['ID']['output'];
  /** Indicates if the company is active */
  is_active: Scalars['Boolean']['output'];
  /** Name of the company */
  name: Scalars['String']['output'];
  /** Phone of the company */
  phone: Maybe<Scalars['String']['output']>;
  /** Last update date of the company */
  updated_at: Scalars['DateTime']['output'];
};

export type CreateCompanyInput = {
  /** Address of the company */
  address: InputMaybe<Scalars['JSON']['input']>;
  /** CNPJ of the company */
  cnpj: InputMaybe<Scalars['String']['input']>;
  /** Email of the company */
  email: Scalars['String']['input'];
  /** Indicates if the company is active */
  is_active: Scalars['Boolean']['input'];
  /** Name of the company */
  name: Scalars['String']['input'];
  /** Phone of the company */
  phone: InputMaybe<Scalars['String']['input']>;
};

export type CreateProductInput = {
  description: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  quantity: Scalars['Int']['input'];
  sku: Scalars['String']['input'];
};

export type CreatePurchaseInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateRoleInput = {
  /** Description of the role */
  description: Scalars['String']['input'];
  /** Name of the role */
  name: Scalars['String']['input'];
};

export type CreateSaleInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateSupplierInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateUserInput = {
  companyId: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roleId: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompany: Company;
  createProduct: Product;
  createPurchase: Purchase;
  createRole: Role;
  createSale: Sale;
  createSupplier: Supplier;
  createUser: User;
  deleteProduct: Maybe<Product>;
  login: AuthResponse;
  removeCompany: Company;
  removePurchase: Purchase;
  removeRole: Role;
  removeSale: Sale;
  removeSupplier: Supplier;
  removeUser: User;
  updateCompany: Company;
  updateProduct: Product;
  updatePurchase: Purchase;
  updateRole: Role;
  updateSale: Sale;
  updateSupplier: Supplier;
  updateUser: User;
};

export type MutationCreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput;
};

export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};

export type MutationCreatePurchaseArgs = {
  createPurchaseInput: CreatePurchaseInput;
};

export type MutationCreateRoleArgs = {
  createRoleInput: CreateRoleInput;
};

export type MutationCreateSaleArgs = {
  createSaleInput: CreateSaleInput;
};

export type MutationCreateSupplierArgs = {
  createSupplierInput: CreateSupplierInput;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};

export type MutationLoginArgs = {
  loginInput: LoginInput;
};

export type MutationRemoveCompanyArgs = {
  id: Scalars['String']['input'];
};

export type MutationRemovePurchaseArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemoveRoleArgs = {
  id: Scalars['String']['input'];
};

export type MutationRemoveSaleArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemoveSupplierArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemoveUserArgs = {
  id: Scalars['String']['input'];
};

export type MutationUpdateCompanyArgs = {
  updateCompanyInput: UpdateCompanyInput;
};

export type MutationUpdateProductArgs = {
  id: Scalars['ID']['input'];
  updateProductInput: UpdateProductInput;
};

export type MutationUpdatePurchaseArgs = {
  updatePurchaseInput: UpdatePurchaseInput;
};

export type MutationUpdateRoleArgs = {
  updateRoleInput: UpdateRoleInput;
};

export type MutationUpdateSaleArgs = {
  updateSaleInput: UpdateSaleInput;
};

export type MutationUpdateSupplierArgs = {
  updateSupplierInput: UpdateSupplierInput;
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Product = {
  __typename?: 'Product';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  quantity: Scalars['Int']['output'];
  sku: Scalars['String']['output'];
};

export type Purchase = {
  __typename?: 'Purchase';
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  companies: Array<Company>;
  company: Company;
  product: Maybe<Product>;
  products: Array<Product>;
  purchase: Purchase;
  purchases: Array<Purchase>;
  role: Role;
  roles: Array<Role>;
  sale: Sale;
  sales: Array<Sale>;
  supplier: Supplier;
  suppliers: Array<Supplier>;
  user: User;
  users: Array<User>;
};

export type QueryCompanyArgs = {
  id: Scalars['String']['input'];
};

export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPurchaseArgs = {
  id: Scalars['Int']['input'];
};

export type QueryRoleArgs = {
  id: Scalars['String']['input'];
};

export type QuerySaleArgs = {
  id: Scalars['Int']['input'];
};

export type QuerySupplierArgs = {
  id: Scalars['Int']['input'];
};

export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  /** Description of the role */
  description: Scalars['String']['output'];
  /** Unique identifier for the role */
  id: Scalars['ID']['output'];
  /** Name of the role */
  name: Scalars['String']['output'];
};

export type Sale = {
  __typename?: 'Sale';
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
};

export type Supplier = {
  __typename?: 'Supplier';
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
};

export type UpdateCompanyInput = {
  address: InputMaybe<Scalars['JSON']['input']>;
  /** CNPJ of the company */
  cnpj: InputMaybe<Scalars['String']['input']>;
  /** Email of the company */
  email: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** Indicates if the company is active */
  is_active: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the company */
  name: InputMaybe<Scalars['String']['input']>;
  /** Phone of the company */
  phone: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductInput = {
  description: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  price: InputMaybe<Scalars['Float']['input']>;
  quantity: InputMaybe<Scalars['Int']['input']>;
  sku: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePurchaseInput = {
  /** Example field (placeholder) */
  exampleField: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateRoleInput = {
  /** Description of the role */
  description: Scalars['String']['input'];
  id: Scalars['String']['input'];
  /** Name of the role */
  name: Scalars['String']['input'];
};

export type UpdateSaleInput = {
  /** Example field (placeholder) */
  exampleField: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateSupplierInput = {
  /** Example field (placeholder) */
  exampleField: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateUserInput = {
  companyId: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: InputMaybe<Scalars['String']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
  roleId: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  company: Maybe<Company>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  role: Role;
  updatedAt: Scalars['DateTime']['output'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'AuthResponse';
    access_token: string;
    user: {
      __typename?: 'User';
      id: string;
      email: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
  };
};

export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(loginInput: $input) {
      access_token
      user {
        id
        email
        name
        createdAt
        updatedAt
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class LoginGQL extends Apollo.Mutation<
  LoginMutation,
  LoginMutationVariables
> {
  document = LoginDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
