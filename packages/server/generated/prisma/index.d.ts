
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model companies
 * 
 */
export type companies = $Result.DefaultSelection<Prisma.$companiesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model subscriptions
 * 
 */
export type subscriptions = $Result.DefaultSelection<Prisma.$subscriptionsPayload>
/**
 * Model suppliers
 * 
 */
export type suppliers = $Result.DefaultSelection<Prisma.$suppliersPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model customers
 * 
 */
export type customers = $Result.DefaultSelection<Prisma.$customersPayload>
/**
 * Model sales
 * 
 */
export type sales = $Result.DefaultSelection<Prisma.$salesPayload>
/**
 * Model sales_items
 * 
 */
export type sales_items = $Result.DefaultSelection<Prisma.$sales_itemsPayload>
/**
 * Model purchases
 * 
 */
export type purchases = $Result.DefaultSelection<Prisma.$purchasesPayload>
/**
 * Model purchases_items
 * 
 */
export type purchases_items = $Result.DefaultSelection<Prisma.$purchases_itemsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.roles.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.roles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companies`: Exposes CRUD operations for the **companies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.companies.findMany()
    * ```
    */
  get companies(): Prisma.companiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptions`: Exposes CRUD operations for the **subscriptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscriptions.findMany()
    * ```
    */
  get subscriptions(): Prisma.subscriptionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suppliers`: Exposes CRUD operations for the **suppliers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.suppliers.findMany()
    * ```
    */
  get suppliers(): Prisma.suppliersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sales`: Exposes CRUD operations for the **sales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sales.findMany()
    * ```
    */
  get sales(): Prisma.salesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sales_items`: Exposes CRUD operations for the **sales_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales_items
    * const sales_items = await prisma.sales_items.findMany()
    * ```
    */
  get sales_items(): Prisma.sales_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchases`: Exposes CRUD operations for the **purchases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchases.findMany()
    * ```
    */
  get purchases(): Prisma.purchasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchases_items`: Exposes CRUD operations for the **purchases_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases_items
    * const purchases_items = await prisma.purchases_items.findMany()
    * ```
    */
  get purchases_items(): Prisma.purchases_itemsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    roles: 'roles',
    companies: 'companies',
    users: 'users',
    subscriptions: 'subscriptions',
    suppliers: 'suppliers',
    products: 'products',
    customers: 'customers',
    sales: 'sales',
    sales_items: 'sales_items',
    purchases: 'purchases',
    purchases_items: 'purchases_items'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "roles" | "companies" | "users" | "subscriptions" | "suppliers" | "products" | "customers" | "sales" | "sales_items" | "purchases" | "purchases_items"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      companies: {
        payload: Prisma.$companiesPayload<ExtArgs>
        fields: Prisma.companiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          findFirst: {
            args: Prisma.companiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          findMany: {
            args: Prisma.companiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>[]
          }
          create: {
            args: Prisma.companiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          createMany: {
            args: Prisma.companiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.companiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>[]
          }
          delete: {
            args: Prisma.companiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          update: {
            args: Prisma.companiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          deleteMany: {
            args: Prisma.companiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.companiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>[]
          }
          upsert: {
            args: Prisma.companiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          aggregate: {
            args: Prisma.CompaniesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanies>
          }
          groupBy: {
            args: Prisma.companiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompaniesGroupByOutputType>[]
          }
          count: {
            args: Prisma.companiesCountArgs<ExtArgs>
            result: $Utils.Optional<CompaniesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      subscriptions: {
        payload: Prisma.$subscriptionsPayload<ExtArgs>
        fields: Prisma.subscriptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subscriptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subscriptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          findFirst: {
            args: Prisma.subscriptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subscriptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          findMany: {
            args: Prisma.subscriptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>[]
          }
          create: {
            args: Prisma.subscriptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          createMany: {
            args: Prisma.subscriptionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subscriptionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>[]
          }
          delete: {
            args: Prisma.subscriptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          update: {
            args: Prisma.subscriptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          deleteMany: {
            args: Prisma.subscriptionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subscriptionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subscriptionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>[]
          }
          upsert: {
            args: Prisma.subscriptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptions>
          }
          groupBy: {
            args: Prisma.subscriptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.subscriptionsCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionsCountAggregateOutputType> | number
          }
        }
      }
      suppliers: {
        payload: Prisma.$suppliersPayload<ExtArgs>
        fields: Prisma.suppliersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.suppliersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.suppliersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          findFirst: {
            args: Prisma.suppliersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.suppliersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          findMany: {
            args: Prisma.suppliersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>[]
          }
          create: {
            args: Prisma.suppliersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          createMany: {
            args: Prisma.suppliersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.suppliersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>[]
          }
          delete: {
            args: Prisma.suppliersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          update: {
            args: Prisma.suppliersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          deleteMany: {
            args: Prisma.suppliersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.suppliersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.suppliersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>[]
          }
          upsert: {
            args: Prisma.suppliersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          aggregate: {
            args: Prisma.SuppliersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuppliers>
          }
          groupBy: {
            args: Prisma.suppliersGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuppliersGroupByOutputType>[]
          }
          count: {
            args: Prisma.suppliersCountArgs<ExtArgs>
            result: $Utils.Optional<SuppliersCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      customers: {
        payload: Prisma.$customersPayload<ExtArgs>
        fields: Prisma.customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findFirst: {
            args: Prisma.customersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findMany: {
            args: Prisma.customersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          create: {
            args: Prisma.customersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          createMany: {
            args: Prisma.customersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          delete: {
            args: Prisma.customersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          update: {
            args: Prisma.customersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          deleteMany: {
            args: Prisma.customersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          upsert: {
            args: Prisma.customersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.customersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.customersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      sales: {
        payload: Prisma.$salesPayload<ExtArgs>
        fields: Prisma.salesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.salesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.salesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          findFirst: {
            args: Prisma.salesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.salesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          findMany: {
            args: Prisma.salesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[]
          }
          create: {
            args: Prisma.salesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          createMany: {
            args: Prisma.salesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.salesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[]
          }
          delete: {
            args: Prisma.salesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          update: {
            args: Prisma.salesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          deleteMany: {
            args: Prisma.salesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.salesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.salesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[]
          }
          upsert: {
            args: Prisma.salesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales>
          }
          groupBy: {
            args: Prisma.salesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.salesCountArgs<ExtArgs>
            result: $Utils.Optional<SalesCountAggregateOutputType> | number
          }
        }
      }
      sales_items: {
        payload: Prisma.$sales_itemsPayload<ExtArgs>
        fields: Prisma.sales_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sales_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sales_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>
          }
          findFirst: {
            args: Prisma.sales_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sales_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>
          }
          findMany: {
            args: Prisma.sales_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>[]
          }
          create: {
            args: Prisma.sales_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>
          }
          createMany: {
            args: Prisma.sales_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sales_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>[]
          }
          delete: {
            args: Prisma.sales_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>
          }
          update: {
            args: Prisma.sales_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>
          }
          deleteMany: {
            args: Prisma.sales_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sales_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sales_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>[]
          }
          upsert: {
            args: Prisma.sales_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>
          }
          aggregate: {
            args: Prisma.Sales_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales_items>
          }
          groupBy: {
            args: Prisma.sales_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sales_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sales_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Sales_itemsCountAggregateOutputType> | number
          }
        }
      }
      purchases: {
        payload: Prisma.$purchasesPayload<ExtArgs>
        fields: Prisma.purchasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.purchasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.purchasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>
          }
          findFirst: {
            args: Prisma.purchasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.purchasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>
          }
          findMany: {
            args: Prisma.purchasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>[]
          }
          create: {
            args: Prisma.purchasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>
          }
          createMany: {
            args: Prisma.purchasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.purchasesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>[]
          }
          delete: {
            args: Prisma.purchasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>
          }
          update: {
            args: Prisma.purchasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>
          }
          deleteMany: {
            args: Prisma.purchasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.purchasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.purchasesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>[]
          }
          upsert: {
            args: Prisma.purchasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>
          }
          aggregate: {
            args: Prisma.PurchasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchases>
          }
          groupBy: {
            args: Prisma.purchasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.purchasesCountArgs<ExtArgs>
            result: $Utils.Optional<PurchasesCountAggregateOutputType> | number
          }
        }
      }
      purchases_items: {
        payload: Prisma.$purchases_itemsPayload<ExtArgs>
        fields: Prisma.purchases_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.purchases_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchases_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.purchases_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchases_itemsPayload>
          }
          findFirst: {
            args: Prisma.purchases_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchases_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.purchases_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchases_itemsPayload>
          }
          findMany: {
            args: Prisma.purchases_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchases_itemsPayload>[]
          }
          create: {
            args: Prisma.purchases_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchases_itemsPayload>
          }
          createMany: {
            args: Prisma.purchases_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.purchases_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchases_itemsPayload>[]
          }
          delete: {
            args: Prisma.purchases_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchases_itemsPayload>
          }
          update: {
            args: Prisma.purchases_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchases_itemsPayload>
          }
          deleteMany: {
            args: Prisma.purchases_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.purchases_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.purchases_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchases_itemsPayload>[]
          }
          upsert: {
            args: Prisma.purchases_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchases_itemsPayload>
          }
          aggregate: {
            args: Prisma.Purchases_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchases_items>
          }
          groupBy: {
            args: Prisma.purchases_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Purchases_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.purchases_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Purchases_itemsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    roles?: rolesOmit
    companies?: companiesOmit
    users?: usersOmit
    subscriptions?: subscriptionsOmit
    suppliers?: suppliersOmit
    products?: productsOmit
    customers?: customersOmit
    sales?: salesOmit
    sales_items?: sales_itemsOmit
    purchases?: purchasesOmit
    purchases_items?: purchases_itemsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type CompaniesCountOutputType
   */

  export type CompaniesCountOutputType = {
    users: number
    subscriptions: number
    suppliers: number
    products: number
    customers: number
    sales: number
    purchases: number
  }

  export type CompaniesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CompaniesCountOutputTypeCountUsersArgs
    subscriptions?: boolean | CompaniesCountOutputTypeCountSubscriptionsArgs
    suppliers?: boolean | CompaniesCountOutputTypeCountSuppliersArgs
    products?: boolean | CompaniesCountOutputTypeCountProductsArgs
    customers?: boolean | CompaniesCountOutputTypeCountCustomersArgs
    sales?: boolean | CompaniesCountOutputTypeCountSalesArgs
    purchases?: boolean | CompaniesCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesCountOutputType
     */
    select?: CompaniesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscriptionsWhereInput
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountSuppliersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: suppliersWhereInput
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchasesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    sales: number
    purchases: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | UsersCountOutputTypeCountSalesArgs
    purchases?: boolean | UsersCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchasesWhereInput
  }


  /**
   * Count Type SuppliersCountOutputType
   */

  export type SuppliersCountOutputType = {
    products: number
    purchases: number
  }

  export type SuppliersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | SuppliersCountOutputTypeCountProductsArgs
    purchases?: boolean | SuppliersCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * SuppliersCountOutputType without action
   */
  export type SuppliersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuppliersCountOutputType
     */
    select?: SuppliersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuppliersCountOutputType without action
   */
  export type SuppliersCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }

  /**
   * SuppliersCountOutputType without action
   */
  export type SuppliersCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchasesWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    sales_items: number
    purchase_items: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales_items?: boolean | ProductsCountOutputTypeCountSales_itemsArgs
    purchase_items?: boolean | ProductsCountOutputTypeCountPurchase_itemsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountSales_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sales_itemsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountPurchase_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchases_itemsWhereInput
  }


  /**
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    sales: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | CustomersCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput
  }


  /**
   * Count Type SalesCountOutputType
   */

  export type SalesCountOutputType = {
    items: number
  }

  export type SalesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SalesCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * SalesCountOutputType without action
   */
  export type SalesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCountOutputType
     */
    select?: SalesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalesCountOutputType without action
   */
  export type SalesCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sales_itemsWhereInput
  }


  /**
   * Count Type PurchasesCountOutputType
   */

  export type PurchasesCountOutputType = {
    items: number
  }

  export type PurchasesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PurchasesCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * PurchasesCountOutputType without action
   */
  export type PurchasesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasesCountOutputType
     */
    select?: PurchasesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchasesCountOutputType without action
   */
  export type PurchasesCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchases_itemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type RolesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["roles"]>
  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type rolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolesFindUniqueArgs>(args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolesFindFirstArgs>(args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rolesFindManyArgs>(args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends rolesCreateArgs>(args: SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolesCreateManyArgs>(args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {rolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rolesCreateManyAndReturnArgs>(args?: SelectSubset<T, rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends rolesDeleteArgs>(args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolesUpdateArgs>(args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolesDeleteManyArgs>(args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolesUpdateManyArgs>(args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {rolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rolesUpdateManyAndReturnArgs>(args: SelectSubset<T, rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends rolesUpsertArgs>(args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the roles model
   */
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'String'>
    readonly name: FieldRef<"roles", 'String'>
    readonly description: FieldRef<"roles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles createManyAndReturn
   */
  export type rolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles updateManyAndReturn
   */
  export type rolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * roles.users
   */
  export type roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }


  /**
   * Model companies
   */

  export type AggregateCompanies = {
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  export type CompaniesMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    cnpj: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CompaniesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    cnpj: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CompaniesCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    cnpj: number
    address: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CompaniesMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    cnpj?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type CompaniesMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    cnpj?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type CompaniesCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    cnpj?: true
    address?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CompaniesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to aggregate.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompaniesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompaniesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompaniesMaxAggregateInputType
  }

  export type GetCompaniesAggregateType<T extends CompaniesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanies[P]>
      : GetScalarType<T[P], AggregateCompanies[P]>
  }




  export type companiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companiesWhereInput
    orderBy?: companiesOrderByWithAggregationInput | companiesOrderByWithAggregationInput[]
    by: CompaniesScalarFieldEnum[] | CompaniesScalarFieldEnum
    having?: companiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompaniesCountAggregateInputType | true
    _min?: CompaniesMinAggregateInputType
    _max?: CompaniesMaxAggregateInputType
  }

  export type CompaniesGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    cnpj: string | null
    address: JsonValue | null
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  type GetCompaniesGroupByPayload<T extends companiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompaniesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompaniesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
            : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
        }
      >
    >


  export type companiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cnpj?: boolean
    address?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | companies$usersArgs<ExtArgs>
    subscriptions?: boolean | companies$subscriptionsArgs<ExtArgs>
    suppliers?: boolean | companies$suppliersArgs<ExtArgs>
    products?: boolean | companies$productsArgs<ExtArgs>
    customers?: boolean | companies$customersArgs<ExtArgs>
    sales?: boolean | companies$salesArgs<ExtArgs>
    purchases?: boolean | companies$purchasesArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>

  export type companiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cnpj?: boolean
    address?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["companies"]>

  export type companiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cnpj?: boolean
    address?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["companies"]>

  export type companiesSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cnpj?: boolean
    address?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type companiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "cnpj" | "address" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["companies"]>
  export type companiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | companies$usersArgs<ExtArgs>
    subscriptions?: boolean | companies$subscriptionsArgs<ExtArgs>
    suppliers?: boolean | companies$suppliersArgs<ExtArgs>
    products?: boolean | companies$productsArgs<ExtArgs>
    customers?: boolean | companies$customersArgs<ExtArgs>
    sales?: boolean | companies$salesArgs<ExtArgs>
    purchases?: boolean | companies$purchasesArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type companiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type companiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $companiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "companies"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
      subscriptions: Prisma.$subscriptionsPayload<ExtArgs>[]
      suppliers: Prisma.$suppliersPayload<ExtArgs>[]
      products: Prisma.$productsPayload<ExtArgs>[]
      customers: Prisma.$customersPayload<ExtArgs>[]
      sales: Prisma.$salesPayload<ExtArgs>[]
      purchases: Prisma.$purchasesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      cnpj: string | null
      address: Prisma.JsonValue | null
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["companies"]>
    composites: {}
  }

  type companiesGetPayload<S extends boolean | null | undefined | companiesDefaultArgs> = $Result.GetResult<Prisma.$companiesPayload, S>

  type companiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompaniesCountAggregateInputType | true
    }

  export interface companiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['companies'], meta: { name: 'companies' } }
    /**
     * Find zero or one Companies that matches the filter.
     * @param {companiesFindUniqueArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companiesFindUniqueArgs>(args: SelectSubset<T, companiesFindUniqueArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Companies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companiesFindUniqueOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companiesFindUniqueOrThrowArgs>(args: SelectSubset<T, companiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companiesFindFirstArgs>(args?: SelectSubset<T, companiesFindFirstArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companiesFindFirstOrThrowArgs>(args?: SelectSubset<T, companiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.companies.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.companies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companiesWithIdOnly = await prisma.companies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends companiesFindManyArgs>(args?: SelectSubset<T, companiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Companies.
     * @param {companiesCreateArgs} args - Arguments to create a Companies.
     * @example
     * // Create one Companies
     * const Companies = await prisma.companies.create({
     *   data: {
     *     // ... data to create a Companies
     *   }
     * })
     * 
     */
    create<T extends companiesCreateArgs>(args: SelectSubset<T, companiesCreateArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companiesCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companiesCreateManyArgs>(args?: SelectSubset<T, companiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {companiesCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companiesWithIdOnly = await prisma.companies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends companiesCreateManyAndReturnArgs>(args?: SelectSubset<T, companiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Companies.
     * @param {companiesDeleteArgs} args - Arguments to delete one Companies.
     * @example
     * // Delete one Companies
     * const Companies = await prisma.companies.delete({
     *   where: {
     *     // ... filter to delete one Companies
     *   }
     * })
     * 
     */
    delete<T extends companiesDeleteArgs>(args: SelectSubset<T, companiesDeleteArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Companies.
     * @param {companiesUpdateArgs} args - Arguments to update one Companies.
     * @example
     * // Update one Companies
     * const companies = await prisma.companies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companiesUpdateArgs>(args: SelectSubset<T, companiesUpdateArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companiesDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.companies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companiesDeleteManyArgs>(args?: SelectSubset<T, companiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companiesUpdateManyArgs>(args: SelectSubset<T, companiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {companiesUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companiesWithIdOnly = await prisma.companies.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends companiesUpdateManyAndReturnArgs>(args: SelectSubset<T, companiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Companies.
     * @param {companiesUpsertArgs} args - Arguments to update or create a Companies.
     * @example
     * // Update or create a Companies
     * const companies = await prisma.companies.upsert({
     *   create: {
     *     // ... data to create a Companies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companies we want to update
     *   }
     * })
     */
    upsert<T extends companiesUpsertArgs>(args: SelectSubset<T, companiesUpsertArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.companies.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companiesCountArgs>(
      args?: Subset<T, companiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompaniesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompaniesAggregateArgs>(args: Subset<T, CompaniesAggregateArgs>): Prisma.PrismaPromise<GetCompaniesAggregateType<T>>

    /**
     * Group by Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends companiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companiesGroupByArgs['orderBy'] }
        : { orderBy?: companiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, companiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompaniesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the companies model
   */
  readonly fields: companiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for companies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends companies$usersArgs<ExtArgs> = {}>(args?: Subset<T, companies$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends companies$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, companies$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    suppliers<T extends companies$suppliersArgs<ExtArgs> = {}>(args?: Subset<T, companies$suppliersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends companies$productsArgs<ExtArgs> = {}>(args?: Subset<T, companies$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customers<T extends companies$customersArgs<ExtArgs> = {}>(args?: Subset<T, companies$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends companies$salesArgs<ExtArgs> = {}>(args?: Subset<T, companies$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends companies$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, companies$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the companies model
   */
  interface companiesFieldRefs {
    readonly id: FieldRef<"companies", 'String'>
    readonly name: FieldRef<"companies", 'String'>
    readonly email: FieldRef<"companies", 'String'>
    readonly phone: FieldRef<"companies", 'String'>
    readonly cnpj: FieldRef<"companies", 'String'>
    readonly address: FieldRef<"companies", 'Json'>
    readonly is_active: FieldRef<"companies", 'Boolean'>
    readonly created_at: FieldRef<"companies", 'DateTime'>
    readonly updated_at: FieldRef<"companies", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * companies findUnique
   */
  export type companiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies findUniqueOrThrow
   */
  export type companiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies findFirst
   */
  export type companiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies findFirstOrThrow
   */
  export type companiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies findMany
   */
  export type companiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies create
   */
  export type companiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The data needed to create a companies.
     */
    data: XOR<companiesCreateInput, companiesUncheckedCreateInput>
  }

  /**
   * companies createMany
   */
  export type companiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companiesCreateManyInput | companiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * companies createManyAndReturn
   */
  export type companiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * The data used to create many companies.
     */
    data: companiesCreateManyInput | companiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * companies update
   */
  export type companiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The data needed to update a companies.
     */
    data: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
    /**
     * Choose, which companies to update.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies updateMany
   */
  export type companiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companiesUpdateManyMutationInput, companiesUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * companies updateManyAndReturn
   */
  export type companiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * The data used to update companies.
     */
    data: XOR<companiesUpdateManyMutationInput, companiesUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * companies upsert
   */
  export type companiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The filter to search for the companies to update in case it exists.
     */
    where: companiesWhereUniqueInput
    /**
     * In case the companies found by the `where` argument doesn't exist, create a new companies with this data.
     */
    create: XOR<companiesCreateInput, companiesUncheckedCreateInput>
    /**
     * In case the companies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
  }

  /**
   * companies delete
   */
  export type companiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter which companies to delete.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies deleteMany
   */
  export type companiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * companies.users
   */
  export type companies$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * companies.subscriptions
   */
  export type companies$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    where?: subscriptionsWhereInput
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[]
    cursor?: subscriptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * companies.suppliers
   */
  export type companies$suppliersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    where?: suppliersWhereInput
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    cursor?: suppliersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * companies.products
   */
  export type companies$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * companies.customers
   */
  export type companies$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    where?: customersWhereInput
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    cursor?: customersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * companies.sales
   */
  export type companies$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    where?: salesWhereInput
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    cursor?: salesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * companies.purchases
   */
  export type companies$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    where?: purchasesWhereInput
    orderBy?: purchasesOrderByWithRelationInput | purchasesOrderByWithRelationInput[]
    cursor?: purchasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * companies without action
   */
  export type companiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    role_id: string | null
    company_id: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    role_id: string | null
    company_id: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    is_active: number
    created_at: number
    updated_at: number
    role_id: number
    company_id: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    role_id?: true
    company_id?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    role_id?: true
    company_id?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    role_id?: true
    company_id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    password_hash: string
    is_active: boolean
    created_at: Date
    updated_at: Date
    role_id: string
    company_id: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    role_id?: boolean
    company_id?: boolean
    role?: boolean | rolesDefaultArgs<ExtArgs>
    company?: boolean | users$companyArgs<ExtArgs>
    sales?: boolean | users$salesArgs<ExtArgs>
    purchases?: boolean | users$purchasesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    role_id?: boolean
    company_id?: boolean
    role?: boolean | rolesDefaultArgs<ExtArgs>
    company?: boolean | users$companyArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    role_id?: boolean
    company_id?: boolean
    role?: boolean | rolesDefaultArgs<ExtArgs>
    company?: boolean | users$companyArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    role_id?: boolean
    company_id?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash" | "is_active" | "created_at" | "updated_at" | "role_id" | "company_id", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | rolesDefaultArgs<ExtArgs>
    company?: boolean | users$companyArgs<ExtArgs>
    sales?: boolean | users$salesArgs<ExtArgs>
    purchases?: boolean | users$purchasesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | rolesDefaultArgs<ExtArgs>
    company?: boolean | users$companyArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | rolesDefaultArgs<ExtArgs>
    company?: boolean | users$companyArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      role: Prisma.$rolesPayload<ExtArgs>
      company: Prisma.$companiesPayload<ExtArgs> | null
      sales: Prisma.$salesPayload<ExtArgs>[]
      purchases: Prisma.$purchasesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password_hash: string
      is_active: boolean
      created_at: Date
      updated_at: Date
      role_id: string
      company_id: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolesDefaultArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends users$companyArgs<ExtArgs> = {}>(args?: Subset<T, users$companyArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sales<T extends users$salesArgs<ExtArgs> = {}>(args?: Subset<T, users$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends users$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, users$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly is_active: FieldRef<"users", 'Boolean'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly role_id: FieldRef<"users", 'String'>
    readonly company_id: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.company
   */
  export type users$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    where?: companiesWhereInput
  }

  /**
   * users.sales
   */
  export type users$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    where?: salesWhereInput
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    cursor?: salesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * users.purchases
   */
  export type users$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    where?: purchasesWhereInput
    orderBy?: purchasesOrderByWithRelationInput | purchasesOrderByWithRelationInput[]
    cursor?: purchasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model subscriptions
   */

  export type AggregateSubscriptions = {
    _count: SubscriptionsCountAggregateOutputType | null
    _min: SubscriptionsMinAggregateOutputType | null
    _max: SubscriptionsMaxAggregateOutputType | null
  }

  export type SubscriptionsMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    plan_name: string | null
    status: string | null
    started_at: Date | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SubscriptionsMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    plan_name: string | null
    status: string | null
    started_at: Date | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SubscriptionsCountAggregateOutputType = {
    id: number
    company_id: number
    plan_name: number
    status: number
    started_at: number
    expires_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SubscriptionsMinAggregateInputType = {
    id?: true
    company_id?: true
    plan_name?: true
    status?: true
    started_at?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type SubscriptionsMaxAggregateInputType = {
    id?: true
    company_id?: true
    plan_name?: true
    status?: true
    started_at?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type SubscriptionsCountAggregateInputType = {
    id?: true
    company_id?: true
    plan_name?: true
    status?: true
    started_at?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SubscriptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscriptions to aggregate.
     */
    where?: subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subscriptions
    **/
    _count?: true | SubscriptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionsMaxAggregateInputType
  }

  export type GetSubscriptionsAggregateType<T extends SubscriptionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptions[P]>
      : GetScalarType<T[P], AggregateSubscriptions[P]>
  }




  export type subscriptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscriptionsWhereInput
    orderBy?: subscriptionsOrderByWithAggregationInput | subscriptionsOrderByWithAggregationInput[]
    by: SubscriptionsScalarFieldEnum[] | SubscriptionsScalarFieldEnum
    having?: subscriptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionsCountAggregateInputType | true
    _min?: SubscriptionsMinAggregateInputType
    _max?: SubscriptionsMaxAggregateInputType
  }

  export type SubscriptionsGroupByOutputType = {
    id: string
    company_id: string
    plan_name: string
    status: string
    started_at: Date
    expires_at: Date | null
    created_at: Date
    updated_at: Date
    _count: SubscriptionsCountAggregateOutputType | null
    _min: SubscriptionsMinAggregateOutputType | null
    _max: SubscriptionsMaxAggregateOutputType | null
  }

  type GetSubscriptionsGroupByPayload<T extends subscriptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>
        }
      >
    >


  export type subscriptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    plan_name?: boolean
    status?: boolean
    started_at?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type subscriptionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    plan_name?: boolean
    status?: boolean
    started_at?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type subscriptionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    plan_name?: boolean
    status?: boolean
    started_at?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type subscriptionsSelectScalar = {
    id?: boolean
    company_id?: boolean
    plan_name?: boolean
    status?: boolean
    started_at?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type subscriptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_id" | "plan_name" | "status" | "started_at" | "expires_at" | "created_at" | "updated_at", ExtArgs["result"]["subscriptions"]>
  export type subscriptionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
  }
  export type subscriptionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
  }
  export type subscriptionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
  }

  export type $subscriptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subscriptions"
    objects: {
      company: Prisma.$companiesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_id: string
      plan_name: string
      status: string
      started_at: Date
      expires_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["subscriptions"]>
    composites: {}
  }

  type subscriptionsGetPayload<S extends boolean | null | undefined | subscriptionsDefaultArgs> = $Result.GetResult<Prisma.$subscriptionsPayload, S>

  type subscriptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subscriptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionsCountAggregateInputType | true
    }

  export interface subscriptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subscriptions'], meta: { name: 'subscriptions' } }
    /**
     * Find zero or one Subscriptions that matches the filter.
     * @param {subscriptionsFindUniqueArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subscriptionsFindUniqueArgs>(args: SelectSubset<T, subscriptionsFindUniqueArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscriptions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subscriptionsFindUniqueOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subscriptionsFindUniqueOrThrowArgs>(args: SelectSubset<T, subscriptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsFindFirstArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subscriptionsFindFirstArgs>(args?: SelectSubset<T, subscriptionsFindFirstArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsFindFirstOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subscriptionsFindFirstOrThrowArgs>(args?: SelectSubset<T, subscriptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subscriptionsFindManyArgs>(args?: SelectSubset<T, subscriptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscriptions.
     * @param {subscriptionsCreateArgs} args - Arguments to create a Subscriptions.
     * @example
     * // Create one Subscriptions
     * const Subscriptions = await prisma.subscriptions.create({
     *   data: {
     *     // ... data to create a Subscriptions
     *   }
     * })
     * 
     */
    create<T extends subscriptionsCreateArgs>(args: SelectSubset<T, subscriptionsCreateArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {subscriptionsCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscriptions = await prisma.subscriptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subscriptionsCreateManyArgs>(args?: SelectSubset<T, subscriptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {subscriptionsCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscriptions = await prisma.subscriptions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subscriptionsCreateManyAndReturnArgs>(args?: SelectSubset<T, subscriptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscriptions.
     * @param {subscriptionsDeleteArgs} args - Arguments to delete one Subscriptions.
     * @example
     * // Delete one Subscriptions
     * const Subscriptions = await prisma.subscriptions.delete({
     *   where: {
     *     // ... filter to delete one Subscriptions
     *   }
     * })
     * 
     */
    delete<T extends subscriptionsDeleteArgs>(args: SelectSubset<T, subscriptionsDeleteArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscriptions.
     * @param {subscriptionsUpdateArgs} args - Arguments to update one Subscriptions.
     * @example
     * // Update one Subscriptions
     * const subscriptions = await prisma.subscriptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subscriptionsUpdateArgs>(args: SelectSubset<T, subscriptionsUpdateArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {subscriptionsDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscriptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subscriptionsDeleteManyArgs>(args?: SelectSubset<T, subscriptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscriptions = await prisma.subscriptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subscriptionsUpdateManyArgs>(args: SelectSubset<T, subscriptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {subscriptionsUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscriptions = await prisma.subscriptions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends subscriptionsUpdateManyAndReturnArgs>(args: SelectSubset<T, subscriptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscriptions.
     * @param {subscriptionsUpsertArgs} args - Arguments to update or create a Subscriptions.
     * @example
     * // Update or create a Subscriptions
     * const subscriptions = await prisma.subscriptions.upsert({
     *   create: {
     *     // ... data to create a Subscriptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscriptions we want to update
     *   }
     * })
     */
    upsert<T extends subscriptionsUpsertArgs>(args: SelectSubset<T, subscriptionsUpsertArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscriptions.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends subscriptionsCountArgs>(
      args?: Subset<T, subscriptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionsAggregateArgs>(args: Subset<T, SubscriptionsAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionsAggregateType<T>>

    /**
     * Group by Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends subscriptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subscriptionsGroupByArgs['orderBy'] }
        : { orderBy?: subscriptionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, subscriptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subscriptions model
   */
  readonly fields: subscriptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subscriptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subscriptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends companiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companiesDefaultArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the subscriptions model
   */
  interface subscriptionsFieldRefs {
    readonly id: FieldRef<"subscriptions", 'String'>
    readonly company_id: FieldRef<"subscriptions", 'String'>
    readonly plan_name: FieldRef<"subscriptions", 'String'>
    readonly status: FieldRef<"subscriptions", 'String'>
    readonly started_at: FieldRef<"subscriptions", 'DateTime'>
    readonly expires_at: FieldRef<"subscriptions", 'DateTime'>
    readonly created_at: FieldRef<"subscriptions", 'DateTime'>
    readonly updated_at: FieldRef<"subscriptions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * subscriptions findUnique
   */
  export type subscriptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where: subscriptionsWhereUniqueInput
  }

  /**
   * subscriptions findUniqueOrThrow
   */
  export type subscriptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where: subscriptionsWhereUniqueInput
  }

  /**
   * subscriptions findFirst
   */
  export type subscriptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * subscriptions findFirstOrThrow
   */
  export type subscriptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * subscriptions findMany
   */
  export type subscriptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subscriptions.
     */
    cursor?: subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * subscriptions create
   */
  export type subscriptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to create a subscriptions.
     */
    data: XOR<subscriptionsCreateInput, subscriptionsUncheckedCreateInput>
  }

  /**
   * subscriptions createMany
   */
  export type subscriptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subscriptions.
     */
    data: subscriptionsCreateManyInput | subscriptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subscriptions createManyAndReturn
   */
  export type subscriptionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * The data used to create many subscriptions.
     */
    data: subscriptionsCreateManyInput | subscriptionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subscriptions update
   */
  export type subscriptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to update a subscriptions.
     */
    data: XOR<subscriptionsUpdateInput, subscriptionsUncheckedUpdateInput>
    /**
     * Choose, which subscriptions to update.
     */
    where: subscriptionsWhereUniqueInput
  }

  /**
   * subscriptions updateMany
   */
  export type subscriptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subscriptions.
     */
    data: XOR<subscriptionsUpdateManyMutationInput, subscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which subscriptions to update
     */
    where?: subscriptionsWhereInput
    /**
     * Limit how many subscriptions to update.
     */
    limit?: number
  }

  /**
   * subscriptions updateManyAndReturn
   */
  export type subscriptionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * The data used to update subscriptions.
     */
    data: XOR<subscriptionsUpdateManyMutationInput, subscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which subscriptions to update
     */
    where?: subscriptionsWhereInput
    /**
     * Limit how many subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subscriptions upsert
   */
  export type subscriptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * The filter to search for the subscriptions to update in case it exists.
     */
    where: subscriptionsWhereUniqueInput
    /**
     * In case the subscriptions found by the `where` argument doesn't exist, create a new subscriptions with this data.
     */
    create: XOR<subscriptionsCreateInput, subscriptionsUncheckedCreateInput>
    /**
     * In case the subscriptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subscriptionsUpdateInput, subscriptionsUncheckedUpdateInput>
  }

  /**
   * subscriptions delete
   */
  export type subscriptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter which subscriptions to delete.
     */
    where: subscriptionsWhereUniqueInput
  }

  /**
   * subscriptions deleteMany
   */
  export type subscriptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscriptions to delete
     */
    where?: subscriptionsWhereInput
    /**
     * Limit how many subscriptions to delete.
     */
    limit?: number
  }

  /**
   * subscriptions without action
   */
  export type subscriptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
  }


  /**
   * Model suppliers
   */

  export type AggregateSuppliers = {
    _count: SuppliersCountAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  export type SuppliersMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    contact_name: string | null
    website: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SuppliersMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    contact_name: string | null
    website: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SuppliersCountAggregateOutputType = {
    id: number
    company_id: number
    name: number
    email: number
    phone: number
    address: number
    contact_name: number
    website: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SuppliersMinAggregateInputType = {
    id?: true
    company_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    contact_name?: true
    website?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type SuppliersMaxAggregateInputType = {
    id?: true
    company_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    contact_name?: true
    website?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type SuppliersCountAggregateInputType = {
    id?: true
    company_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    contact_name?: true
    website?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SuppliersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to aggregate.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned suppliers
    **/
    _count?: true | SuppliersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuppliersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuppliersMaxAggregateInputType
  }

  export type GetSuppliersAggregateType<T extends SuppliersAggregateArgs> = {
        [P in keyof T & keyof AggregateSuppliers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuppliers[P]>
      : GetScalarType<T[P], AggregateSuppliers[P]>
  }




  export type suppliersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: suppliersWhereInput
    orderBy?: suppliersOrderByWithAggregationInput | suppliersOrderByWithAggregationInput[]
    by: SuppliersScalarFieldEnum[] | SuppliersScalarFieldEnum
    having?: suppliersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuppliersCountAggregateInputType | true
    _min?: SuppliersMinAggregateInputType
    _max?: SuppliersMaxAggregateInputType
  }

  export type SuppliersGroupByOutputType = {
    id: string
    company_id: string
    name: string
    email: string | null
    phone: string | null
    address: string | null
    contact_name: string | null
    website: string | null
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: SuppliersCountAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  type GetSuppliersGroupByPayload<T extends suppliersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuppliersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuppliersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
            : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
        }
      >
    >


  export type suppliersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    contact_name?: boolean
    website?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
    products?: boolean | suppliers$productsArgs<ExtArgs>
    purchases?: boolean | suppliers$purchasesArgs<ExtArgs>
    _count?: boolean | SuppliersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suppliers"]>

  export type suppliersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    contact_name?: boolean
    website?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suppliers"]>

  export type suppliersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    contact_name?: boolean
    website?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suppliers"]>

  export type suppliersSelectScalar = {
    id?: boolean
    company_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    contact_name?: boolean
    website?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type suppliersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_id" | "name" | "email" | "phone" | "address" | "contact_name" | "website" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["suppliers"]>
  export type suppliersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
    products?: boolean | suppliers$productsArgs<ExtArgs>
    purchases?: boolean | suppliers$purchasesArgs<ExtArgs>
    _count?: boolean | SuppliersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type suppliersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
  }
  export type suppliersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
  }

  export type $suppliersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "suppliers"
    objects: {
      company: Prisma.$companiesPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>[]
      purchases: Prisma.$purchasesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_id: string
      name: string
      email: string | null
      phone: string | null
      address: string | null
      contact_name: string | null
      website: string | null
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["suppliers"]>
    composites: {}
  }

  type suppliersGetPayload<S extends boolean | null | undefined | suppliersDefaultArgs> = $Result.GetResult<Prisma.$suppliersPayload, S>

  type suppliersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<suppliersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuppliersCountAggregateInputType | true
    }

  export interface suppliersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['suppliers'], meta: { name: 'suppliers' } }
    /**
     * Find zero or one Suppliers that matches the filter.
     * @param {suppliersFindUniqueArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends suppliersFindUniqueArgs>(args: SelectSubset<T, suppliersFindUniqueArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Suppliers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {suppliersFindUniqueOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends suppliersFindUniqueOrThrowArgs>(args: SelectSubset<T, suppliersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersFindFirstArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends suppliersFindFirstArgs>(args?: SelectSubset<T, suppliersFindFirstArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suppliers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersFindFirstOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends suppliersFindFirstOrThrowArgs>(args?: SelectSubset<T, suppliersFindFirstOrThrowArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.suppliers.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.suppliers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suppliersWithIdOnly = await prisma.suppliers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends suppliersFindManyArgs>(args?: SelectSubset<T, suppliersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Suppliers.
     * @param {suppliersCreateArgs} args - Arguments to create a Suppliers.
     * @example
     * // Create one Suppliers
     * const Suppliers = await prisma.suppliers.create({
     *   data: {
     *     // ... data to create a Suppliers
     *   }
     * })
     * 
     */
    create<T extends suppliersCreateArgs>(args: SelectSubset<T, suppliersCreateArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {suppliersCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const suppliers = await prisma.suppliers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends suppliersCreateManyArgs>(args?: SelectSubset<T, suppliersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {suppliersCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const suppliers = await prisma.suppliers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const suppliersWithIdOnly = await prisma.suppliers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends suppliersCreateManyAndReturnArgs>(args?: SelectSubset<T, suppliersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Suppliers.
     * @param {suppliersDeleteArgs} args - Arguments to delete one Suppliers.
     * @example
     * // Delete one Suppliers
     * const Suppliers = await prisma.suppliers.delete({
     *   where: {
     *     // ... filter to delete one Suppliers
     *   }
     * })
     * 
     */
    delete<T extends suppliersDeleteArgs>(args: SelectSubset<T, suppliersDeleteArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Suppliers.
     * @param {suppliersUpdateArgs} args - Arguments to update one Suppliers.
     * @example
     * // Update one Suppliers
     * const suppliers = await prisma.suppliers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends suppliersUpdateArgs>(args: SelectSubset<T, suppliersUpdateArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {suppliersDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.suppliers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends suppliersDeleteManyArgs>(args?: SelectSubset<T, suppliersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends suppliersUpdateManyArgs>(args: SelectSubset<T, suppliersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {suppliersUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const suppliersWithIdOnly = await prisma.suppliers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends suppliersUpdateManyAndReturnArgs>(args: SelectSubset<T, suppliersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Suppliers.
     * @param {suppliersUpsertArgs} args - Arguments to update or create a Suppliers.
     * @example
     * // Update or create a Suppliers
     * const suppliers = await prisma.suppliers.upsert({
     *   create: {
     *     // ... data to create a Suppliers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suppliers we want to update
     *   }
     * })
     */
    upsert<T extends suppliersUpsertArgs>(args: SelectSubset<T, suppliersUpsertArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.suppliers.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends suppliersCountArgs>(
      args?: Subset<T, suppliersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuppliersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuppliersAggregateArgs>(args: Subset<T, SuppliersAggregateArgs>): Prisma.PrismaPromise<GetSuppliersAggregateType<T>>

    /**
     * Group by Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends suppliersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: suppliersGroupByArgs['orderBy'] }
        : { orderBy?: suppliersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, suppliersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuppliersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the suppliers model
   */
  readonly fields: suppliersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for suppliers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__suppliersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends companiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companiesDefaultArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends suppliers$productsArgs<ExtArgs> = {}>(args?: Subset<T, suppliers$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends suppliers$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, suppliers$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the suppliers model
   */
  interface suppliersFieldRefs {
    readonly id: FieldRef<"suppliers", 'String'>
    readonly company_id: FieldRef<"suppliers", 'String'>
    readonly name: FieldRef<"suppliers", 'String'>
    readonly email: FieldRef<"suppliers", 'String'>
    readonly phone: FieldRef<"suppliers", 'String'>
    readonly address: FieldRef<"suppliers", 'String'>
    readonly contact_name: FieldRef<"suppliers", 'String'>
    readonly website: FieldRef<"suppliers", 'String'>
    readonly is_active: FieldRef<"suppliers", 'Boolean'>
    readonly created_at: FieldRef<"suppliers", 'DateTime'>
    readonly updated_at: FieldRef<"suppliers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * suppliers findUnique
   */
  export type suppliersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers findUniqueOrThrow
   */
  export type suppliersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers findFirst
   */
  export type suppliersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * suppliers findFirstOrThrow
   */
  export type suppliersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * suppliers findMany
   */
  export type suppliersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing suppliers.
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * suppliers create
   */
  export type suppliersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * The data needed to create a suppliers.
     */
    data: XOR<suppliersCreateInput, suppliersUncheckedCreateInput>
  }

  /**
   * suppliers createMany
   */
  export type suppliersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many suppliers.
     */
    data: suppliersCreateManyInput | suppliersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * suppliers createManyAndReturn
   */
  export type suppliersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * The data used to create many suppliers.
     */
    data: suppliersCreateManyInput | suppliersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * suppliers update
   */
  export type suppliersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * The data needed to update a suppliers.
     */
    data: XOR<suppliersUpdateInput, suppliersUncheckedUpdateInput>
    /**
     * Choose, which suppliers to update.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers updateMany
   */
  export type suppliersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update suppliers.
     */
    data: XOR<suppliersUpdateManyMutationInput, suppliersUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: suppliersWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
  }

  /**
   * suppliers updateManyAndReturn
   */
  export type suppliersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * The data used to update suppliers.
     */
    data: XOR<suppliersUpdateManyMutationInput, suppliersUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: suppliersWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * suppliers upsert
   */
  export type suppliersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * The filter to search for the suppliers to update in case it exists.
     */
    where: suppliersWhereUniqueInput
    /**
     * In case the suppliers found by the `where` argument doesn't exist, create a new suppliers with this data.
     */
    create: XOR<suppliersCreateInput, suppliersUncheckedCreateInput>
    /**
     * In case the suppliers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<suppliersUpdateInput, suppliersUncheckedUpdateInput>
  }

  /**
   * suppliers delete
   */
  export type suppliersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter which suppliers to delete.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers deleteMany
   */
  export type suppliersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to delete
     */
    where?: suppliersWhereInput
    /**
     * Limit how many suppliers to delete.
     */
    limit?: number
  }

  /**
   * suppliers.products
   */
  export type suppliers$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * suppliers.purchases
   */
  export type suppliers$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    where?: purchasesWhereInput
    orderBy?: purchasesOrderByWithRelationInput | purchasesOrderByWithRelationInput[]
    cursor?: purchasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * suppliers without action
   */
  export type suppliersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type ProductsSumAggregateOutputType = {
    price: Decimal | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    supplier_id: string | null
    name: string | null
    description: string | null
    sku: string | null
    price: Decimal | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    supplier_id: string | null
    name: string | null
    description: string | null
    sku: string | null
    price: Decimal | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    company_id: number
    supplier_id: number
    name: number
    description: number
    sku: number
    price: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    price?: true
  }

  export type ProductsSumAggregateInputType = {
    price?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    company_id?: true
    supplier_id?: true
    name?: true
    description?: true
    sku?: true
    price?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    company_id?: true
    supplier_id?: true
    name?: true
    description?: true
    sku?: true
    price?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    company_id?: true
    supplier_id?: true
    name?: true
    description?: true
    sku?: true
    price?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    company_id: string
    supplier_id: string | null
    name: string
    description: string | null
    sku: string | null
    price: Decimal
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    supplier_id?: boolean
    name?: boolean
    description?: boolean
    sku?: boolean
    price?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
    supplier?: boolean | products$supplierArgs<ExtArgs>
    sales_items?: boolean | products$sales_itemsArgs<ExtArgs>
    purchase_items?: boolean | products$purchase_itemsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    supplier_id?: boolean
    name?: boolean
    description?: boolean
    sku?: boolean
    price?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
    supplier?: boolean | products$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    supplier_id?: boolean
    name?: boolean
    description?: boolean
    sku?: boolean
    price?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
    supplier?: boolean | products$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    company_id?: boolean
    supplier_id?: boolean
    name?: boolean
    description?: boolean
    sku?: boolean
    price?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_id" | "supplier_id" | "name" | "description" | "sku" | "price" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
    supplier?: boolean | products$supplierArgs<ExtArgs>
    sales_items?: boolean | products$sales_itemsArgs<ExtArgs>
    purchase_items?: boolean | products$purchase_itemsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
    supplier?: boolean | products$supplierArgs<ExtArgs>
  }
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
    supplier?: boolean | products$supplierArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      company: Prisma.$companiesPayload<ExtArgs>
      supplier: Prisma.$suppliersPayload<ExtArgs> | null
      sales_items: Prisma.$sales_itemsPayload<ExtArgs>[]
      purchase_items: Prisma.$purchases_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_id: string
      supplier_id: string | null
      name: string
      description: string | null
      sku: string | null
      price: Prisma.Decimal
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends companiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companiesDefaultArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supplier<T extends products$supplierArgs<ExtArgs> = {}>(args?: Subset<T, products$supplierArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sales_items<T extends products$sales_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products$sales_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchase_items<T extends products$purchase_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products$purchase_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchases_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'String'>
    readonly company_id: FieldRef<"products", 'String'>
    readonly supplier_id: FieldRef<"products", 'String'>
    readonly name: FieldRef<"products", 'String'>
    readonly description: FieldRef<"products", 'String'>
    readonly sku: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Decimal'>
    readonly is_active: FieldRef<"products", 'Boolean'>
    readonly created_at: FieldRef<"products", 'DateTime'>
    readonly updated_at: FieldRef<"products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.supplier
   */
  export type products$supplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    where?: suppliersWhereInput
  }

  /**
   * products.sales_items
   */
  export type products$sales_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    where?: sales_itemsWhereInput
    orderBy?: sales_itemsOrderByWithRelationInput | sales_itemsOrderByWithRelationInput[]
    cursor?: sales_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sales_itemsScalarFieldEnum | Sales_itemsScalarFieldEnum[]
  }

  /**
   * products.purchase_items
   */
  export type products$purchase_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases_items
     */
    select?: purchases_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases_items
     */
    omit?: purchases_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchases_itemsInclude<ExtArgs> | null
    where?: purchases_itemsWhereInput
    orderBy?: purchases_itemsOrderByWithRelationInput | purchases_itemsOrderByWithRelationInput[]
    cursor?: purchases_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Purchases_itemsScalarFieldEnum | Purchases_itemsScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    name: string | null
    email: string | null
    phone: string | null
    document: string | null
    address: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CustomersMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    name: string | null
    email: string | null
    phone: string | null
    document: string | null
    address: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CustomersCountAggregateOutputType = {
    id: number
    company_id: number
    name: number
    email: number
    phone: number
    document: number
    address: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CustomersMinAggregateInputType = {
    id?: true
    company_id?: true
    name?: true
    email?: true
    phone?: true
    document?: true
    address?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type CustomersMaxAggregateInputType = {
    id?: true
    company_id?: true
    name?: true
    email?: true
    phone?: true
    document?: true
    address?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type CustomersCountAggregateInputType = {
    id?: true
    company_id?: true
    name?: true
    email?: true
    phone?: true
    document?: true
    address?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type customersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
    orderBy?: customersOrderByWithAggregationInput | customersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    id: string
    company_id: string
    name: string
    email: string | null
    phone: string | null
    document: string | null
    address: string | null
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: CustomersCountAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    document?: boolean
    address?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
    sales?: boolean | customers$salesArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    document?: boolean
    address?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    document?: boolean
    address?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectScalar = {
    id?: boolean
    company_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    document?: boolean
    address?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type customersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_id" | "name" | "email" | "phone" | "document" | "address" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["customers"]>
  export type customersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
    sales?: boolean | customers$salesArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
  }
  export type customersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
  }

  export type $customersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customers"
    objects: {
      company: Prisma.$companiesPayload<ExtArgs>
      sales: Prisma.$salesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_id: string
      name: string
      email: string | null
      phone: string | null
      document: string | null
      address: string | null
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = $Result.GetResult<Prisma.$customersPayload, S>

  type customersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface customersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customers'], meta: { name: 'customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customersFindUniqueArgs>(args: SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customersFindFirstArgs>(args?: SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customersWithIdOnly = await prisma.customers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends customersFindManyArgs>(args?: SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends customersCreateArgs>(args: SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customersCreateManyArgs>(args?: SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customersCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customersWithIdOnly = await prisma.customers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customersCreateManyAndReturnArgs>(args?: SelectSubset<T, customersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends customersDeleteArgs>(args: SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customersUpdateArgs>(args: SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customersDeleteManyArgs>(args?: SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customersUpdateManyArgs>(args: SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customersUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customersWithIdOnly = await prisma.customers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends customersUpdateManyAndReturnArgs>(args: SelectSubset<T, customersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends customersUpsertArgs>(args: SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customersGroupByArgs['orderBy'] }
        : { orderBy?: customersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customers model
   */
  readonly fields: customersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends companiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companiesDefaultArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sales<T extends customers$salesArgs<ExtArgs> = {}>(args?: Subset<T, customers$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customers model
   */
  interface customersFieldRefs {
    readonly id: FieldRef<"customers", 'String'>
    readonly company_id: FieldRef<"customers", 'String'>
    readonly name: FieldRef<"customers", 'String'>
    readonly email: FieldRef<"customers", 'String'>
    readonly phone: FieldRef<"customers", 'String'>
    readonly document: FieldRef<"customers", 'String'>
    readonly address: FieldRef<"customers", 'String'>
    readonly is_active: FieldRef<"customers", 'Boolean'>
    readonly created_at: FieldRef<"customers", 'DateTime'>
    readonly updated_at: FieldRef<"customers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findFirst
   */
  export type customersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findMany
   */
  export type customersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers create
   */
  export type customersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to create a customers.
     */
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }

  /**
   * customers createMany
   */
  export type customersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers createManyAndReturn
   */
  export type customersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * customers update
   */
  export type customersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers updateManyAndReturn
   */
  export type customersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * customers upsert
   */
  export type customersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }

  /**
   * customers delete
   */
  export type customersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customers.sales
   */
  export type customers$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    where?: salesWhereInput
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    cursor?: salesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * customers without action
   */
  export type customersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
  }


  /**
   * Model sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  export type SalesMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    user_id: string | null
    customer_id: string | null
    sale_date: Date | null
    notes: string | null
    payment_method: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    user_id: string | null
    customer_id: string | null
    sale_date: Date | null
    notes: string | null
    payment_method: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesCountAggregateOutputType = {
    id: number
    company_id: number
    user_id: number
    customer_id: number
    sale_date: number
    notes: number
    payment_method: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SalesMinAggregateInputType = {
    id?: true
    company_id?: true
    user_id?: true
    customer_id?: true
    sale_date?: true
    notes?: true
    payment_method?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesMaxAggregateInputType = {
    id?: true
    company_id?: true
    user_id?: true
    customer_id?: true
    sale_date?: true
    notes?: true
    payment_method?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesCountAggregateInputType = {
    id?: true
    company_id?: true
    user_id?: true
    customer_id?: true
    sale_date?: true
    notes?: true
    payment_method?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to aggregate.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sales
    **/
    _count?: true | SalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesMaxAggregateInputType
  }

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
        [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>
  }




  export type salesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput
    orderBy?: salesOrderByWithAggregationInput | salesOrderByWithAggregationInput[]
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum
    having?: salesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesCountAggregateInputType | true
    _min?: SalesMinAggregateInputType
    _max?: SalesMaxAggregateInputType
  }

  export type SalesGroupByOutputType = {
    id: string
    company_id: string
    user_id: string
    customer_id: string
    sale_date: Date
    notes: string | null
    payment_method: string
    created_at: Date
    updated_at: Date
    _count: SalesCountAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  type GetSalesGroupByPayload<T extends salesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesGroupByOutputType[P]>
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
        }
      >
    >


  export type salesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    user_id?: boolean
    customer_id?: boolean
    sale_date?: boolean
    notes?: boolean
    payment_method?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    customer?: boolean | customersDefaultArgs<ExtArgs>
    items?: boolean | sales$itemsArgs<ExtArgs>
    _count?: boolean | SalesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type salesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    user_id?: boolean
    customer_id?: boolean
    sale_date?: boolean
    notes?: boolean
    payment_method?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type salesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    user_id?: boolean
    customer_id?: boolean
    sale_date?: boolean
    notes?: boolean
    payment_method?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type salesSelectScalar = {
    id?: boolean
    company_id?: boolean
    user_id?: boolean
    customer_id?: boolean
    sale_date?: boolean
    notes?: boolean
    payment_method?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type salesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_id" | "user_id" | "customer_id" | "sale_date" | "notes" | "payment_method" | "created_at" | "updated_at", ExtArgs["result"]["sales"]>
  export type salesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    customer?: boolean | customersDefaultArgs<ExtArgs>
    items?: boolean | sales$itemsArgs<ExtArgs>
    _count?: boolean | SalesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type salesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }
  export type salesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }

  export type $salesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sales"
    objects: {
      company: Prisma.$companiesPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
      customer: Prisma.$customersPayload<ExtArgs>
      items: Prisma.$sales_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_id: string
      user_id: string
      customer_id: string
      sale_date: Date
      notes: string | null
      payment_method: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["sales"]>
    composites: {}
  }

  type salesGetPayload<S extends boolean | null | undefined | salesDefaultArgs> = $Result.GetResult<Prisma.$salesPayload, S>

  type salesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<salesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesCountAggregateInputType | true
    }

  export interface salesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sales'], meta: { name: 'sales' } }
    /**
     * Find zero or one Sales that matches the filter.
     * @param {salesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends salesFindUniqueArgs>(args: SelectSubset<T, salesFindUniqueArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {salesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends salesFindUniqueOrThrowArgs>(args: SelectSubset<T, salesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends salesFindFirstArgs>(args?: SelectSubset<T, salesFindFirstArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends salesFindFirstOrThrowArgs>(args?: SelectSubset<T, salesFindFirstOrThrowArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesWithIdOnly = await prisma.sales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends salesFindManyArgs>(args?: SelectSubset<T, salesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sales.
     * @param {salesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     * 
     */
    create<T extends salesCreateArgs>(args: SelectSubset<T, salesCreateArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {salesCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends salesCreateManyArgs>(args?: SelectSubset<T, salesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {salesCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends salesCreateManyAndReturnArgs>(args?: SelectSubset<T, salesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sales.
     * @param {salesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     * 
     */
    delete<T extends salesDeleteArgs>(args: SelectSubset<T, salesDeleteArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sales.
     * @param {salesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends salesUpdateArgs>(args: SelectSubset<T, salesUpdateArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {salesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends salesDeleteManyArgs>(args?: SelectSubset<T, salesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends salesUpdateManyArgs>(args: SelectSubset<T, salesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {salesUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends salesUpdateManyAndReturnArgs>(args: SelectSubset<T, salesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sales.
     * @param {salesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     */
    upsert<T extends salesUpsertArgs>(args: SelectSubset<T, salesUpsertArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends salesCountArgs>(
      args?: Subset<T, salesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesAggregateArgs>(args: Subset<T, SalesAggregateArgs>): Prisma.PrismaPromise<GetSalesAggregateType<T>>

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends salesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: salesGroupByArgs['orderBy'] }
        : { orderBy?: salesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, salesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sales model
   */
  readonly fields: salesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__salesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends companiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companiesDefaultArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends customersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customersDefaultArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends sales$itemsArgs<ExtArgs> = {}>(args?: Subset<T, sales$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sales model
   */
  interface salesFieldRefs {
    readonly id: FieldRef<"sales", 'String'>
    readonly company_id: FieldRef<"sales", 'String'>
    readonly user_id: FieldRef<"sales", 'String'>
    readonly customer_id: FieldRef<"sales", 'String'>
    readonly sale_date: FieldRef<"sales", 'DateTime'>
    readonly notes: FieldRef<"sales", 'String'>
    readonly payment_method: FieldRef<"sales", 'String'>
    readonly created_at: FieldRef<"sales", 'DateTime'>
    readonly updated_at: FieldRef<"sales", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sales findUnique
   */
  export type salesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales findUniqueOrThrow
   */
  export type salesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales findFirst
   */
  export type salesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales findFirstOrThrow
   */
  export type salesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales findMany
   */
  export type salesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales create
   */
  export type salesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * The data needed to create a sales.
     */
    data: XOR<salesCreateInput, salesUncheckedCreateInput>
  }

  /**
   * sales createMany
   */
  export type salesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sales.
     */
    data: salesCreateManyInput | salesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sales createManyAndReturn
   */
  export type salesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * The data used to create many sales.
     */
    data: salesCreateManyInput | salesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sales update
   */
  export type salesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * The data needed to update a sales.
     */
    data: XOR<salesUpdateInput, salesUncheckedUpdateInput>
    /**
     * Choose, which sales to update.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales updateMany
   */
  export type salesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sales.
     */
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyInput>
    /**
     * Filter which sales to update
     */
    where?: salesWhereInput
    /**
     * Limit how many sales to update.
     */
    limit?: number
  }

  /**
   * sales updateManyAndReturn
   */
  export type salesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * The data used to update sales.
     */
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyInput>
    /**
     * Filter which sales to update
     */
    where?: salesWhereInput
    /**
     * Limit how many sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sales upsert
   */
  export type salesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * The filter to search for the sales to update in case it exists.
     */
    where: salesWhereUniqueInput
    /**
     * In case the sales found by the `where` argument doesn't exist, create a new sales with this data.
     */
    create: XOR<salesCreateInput, salesUncheckedCreateInput>
    /**
     * In case the sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<salesUpdateInput, salesUncheckedUpdateInput>
  }

  /**
   * sales delete
   */
  export type salesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter which sales to delete.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales deleteMany
   */
  export type salesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to delete
     */
    where?: salesWhereInput
    /**
     * Limit how many sales to delete.
     */
    limit?: number
  }

  /**
   * sales.items
   */
  export type sales$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    where?: sales_itemsWhereInput
    orderBy?: sales_itemsOrderByWithRelationInput | sales_itemsOrderByWithRelationInput[]
    cursor?: sales_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sales_itemsScalarFieldEnum | Sales_itemsScalarFieldEnum[]
  }

  /**
   * sales without action
   */
  export type salesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
  }


  /**
   * Model sales_items
   */

  export type AggregateSales_items = {
    _count: Sales_itemsCountAggregateOutputType | null
    _avg: Sales_itemsAvgAggregateOutputType | null
    _sum: Sales_itemsSumAggregateOutputType | null
    _min: Sales_itemsMinAggregateOutputType | null
    _max: Sales_itemsMaxAggregateOutputType | null
  }

  export type Sales_itemsAvgAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
  }

  export type Sales_itemsSumAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
  }

  export type Sales_itemsMinAggregateOutputType = {
    id: string | null
    sales_id: string | null
    product_id: string | null
    quantity: number | null
    price: Decimal | null
  }

  export type Sales_itemsMaxAggregateOutputType = {
    id: string | null
    sales_id: string | null
    product_id: string | null
    quantity: number | null
    price: Decimal | null
  }

  export type Sales_itemsCountAggregateOutputType = {
    id: number
    sales_id: number
    product_id: number
    quantity: number
    price: number
    _all: number
  }


  export type Sales_itemsAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type Sales_itemsSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type Sales_itemsMinAggregateInputType = {
    id?: true
    sales_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Sales_itemsMaxAggregateInputType = {
    id?: true
    sales_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Sales_itemsCountAggregateInputType = {
    id?: true
    sales_id?: true
    product_id?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type Sales_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales_items to aggregate.
     */
    where?: sales_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales_items to fetch.
     */
    orderBy?: sales_itemsOrderByWithRelationInput | sales_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sales_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sales_items
    **/
    _count?: true | Sales_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sales_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sales_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sales_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sales_itemsMaxAggregateInputType
  }

  export type GetSales_itemsAggregateType<T extends Sales_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateSales_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales_items[P]>
      : GetScalarType<T[P], AggregateSales_items[P]>
  }




  export type sales_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sales_itemsWhereInput
    orderBy?: sales_itemsOrderByWithAggregationInput | sales_itemsOrderByWithAggregationInput[]
    by: Sales_itemsScalarFieldEnum[] | Sales_itemsScalarFieldEnum
    having?: sales_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sales_itemsCountAggregateInputType | true
    _avg?: Sales_itemsAvgAggregateInputType
    _sum?: Sales_itemsSumAggregateInputType
    _min?: Sales_itemsMinAggregateInputType
    _max?: Sales_itemsMaxAggregateInputType
  }

  export type Sales_itemsGroupByOutputType = {
    id: string
    sales_id: string
    product_id: string
    quantity: number
    price: Decimal
    _count: Sales_itemsCountAggregateOutputType | null
    _avg: Sales_itemsAvgAggregateOutputType | null
    _sum: Sales_itemsSumAggregateOutputType | null
    _min: Sales_itemsMinAggregateOutputType | null
    _max: Sales_itemsMaxAggregateOutputType | null
  }

  type GetSales_itemsGroupByPayload<T extends sales_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sales_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sales_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sales_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Sales_itemsGroupByOutputType[P]>
        }
      >
    >


  export type sales_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sales_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    sale?: boolean | salesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales_items"]>

  export type sales_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sales_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    sale?: boolean | salesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales_items"]>

  export type sales_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sales_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    sale?: boolean | salesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales_items"]>

  export type sales_itemsSelectScalar = {
    id?: boolean
    sales_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type sales_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sales_id" | "product_id" | "quantity" | "price", ExtArgs["result"]["sales_items"]>
  export type sales_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | salesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type sales_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | salesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type sales_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | salesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $sales_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sales_items"
    objects: {
      sale: Prisma.$salesPayload<ExtArgs>
      product: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sales_id: string
      product_id: string
      quantity: number
      price: Prisma.Decimal
    }, ExtArgs["result"]["sales_items"]>
    composites: {}
  }

  type sales_itemsGetPayload<S extends boolean | null | undefined | sales_itemsDefaultArgs> = $Result.GetResult<Prisma.$sales_itemsPayload, S>

  type sales_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sales_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sales_itemsCountAggregateInputType | true
    }

  export interface sales_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sales_items'], meta: { name: 'sales_items' } }
    /**
     * Find zero or one Sales_items that matches the filter.
     * @param {sales_itemsFindUniqueArgs} args - Arguments to find a Sales_items
     * @example
     * // Get one Sales_items
     * const sales_items = await prisma.sales_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sales_itemsFindUniqueArgs>(args: SelectSubset<T, sales_itemsFindUniqueArgs<ExtArgs>>): Prisma__sales_itemsClient<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sales_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sales_itemsFindUniqueOrThrowArgs} args - Arguments to find a Sales_items
     * @example
     * // Get one Sales_items
     * const sales_items = await prisma.sales_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sales_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, sales_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sales_itemsClient<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_itemsFindFirstArgs} args - Arguments to find a Sales_items
     * @example
     * // Get one Sales_items
     * const sales_items = await prisma.sales_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sales_itemsFindFirstArgs>(args?: SelectSubset<T, sales_itemsFindFirstArgs<ExtArgs>>): Prisma__sales_itemsClient<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_itemsFindFirstOrThrowArgs} args - Arguments to find a Sales_items
     * @example
     * // Get one Sales_items
     * const sales_items = await prisma.sales_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sales_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, sales_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sales_itemsClient<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales_items
     * const sales_items = await prisma.sales_items.findMany()
     * 
     * // Get first 10 Sales_items
     * const sales_items = await prisma.sales_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sales_itemsWithIdOnly = await prisma.sales_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sales_itemsFindManyArgs>(args?: SelectSubset<T, sales_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sales_items.
     * @param {sales_itemsCreateArgs} args - Arguments to create a Sales_items.
     * @example
     * // Create one Sales_items
     * const Sales_items = await prisma.sales_items.create({
     *   data: {
     *     // ... data to create a Sales_items
     *   }
     * })
     * 
     */
    create<T extends sales_itemsCreateArgs>(args: SelectSubset<T, sales_itemsCreateArgs<ExtArgs>>): Prisma__sales_itemsClient<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales_items.
     * @param {sales_itemsCreateManyArgs} args - Arguments to create many Sales_items.
     * @example
     * // Create many Sales_items
     * const sales_items = await prisma.sales_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sales_itemsCreateManyArgs>(args?: SelectSubset<T, sales_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales_items and returns the data saved in the database.
     * @param {sales_itemsCreateManyAndReturnArgs} args - Arguments to create many Sales_items.
     * @example
     * // Create many Sales_items
     * const sales_items = await prisma.sales_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales_items and only return the `id`
     * const sales_itemsWithIdOnly = await prisma.sales_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sales_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, sales_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sales_items.
     * @param {sales_itemsDeleteArgs} args - Arguments to delete one Sales_items.
     * @example
     * // Delete one Sales_items
     * const Sales_items = await prisma.sales_items.delete({
     *   where: {
     *     // ... filter to delete one Sales_items
     *   }
     * })
     * 
     */
    delete<T extends sales_itemsDeleteArgs>(args: SelectSubset<T, sales_itemsDeleteArgs<ExtArgs>>): Prisma__sales_itemsClient<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sales_items.
     * @param {sales_itemsUpdateArgs} args - Arguments to update one Sales_items.
     * @example
     * // Update one Sales_items
     * const sales_items = await prisma.sales_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sales_itemsUpdateArgs>(args: SelectSubset<T, sales_itemsUpdateArgs<ExtArgs>>): Prisma__sales_itemsClient<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales_items.
     * @param {sales_itemsDeleteManyArgs} args - Arguments to filter Sales_items to delete.
     * @example
     * // Delete a few Sales_items
     * const { count } = await prisma.sales_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sales_itemsDeleteManyArgs>(args?: SelectSubset<T, sales_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales_items
     * const sales_items = await prisma.sales_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sales_itemsUpdateManyArgs>(args: SelectSubset<T, sales_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales_items and returns the data updated in the database.
     * @param {sales_itemsUpdateManyAndReturnArgs} args - Arguments to update many Sales_items.
     * @example
     * // Update many Sales_items
     * const sales_items = await prisma.sales_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales_items and only return the `id`
     * const sales_itemsWithIdOnly = await prisma.sales_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sales_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, sales_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sales_items.
     * @param {sales_itemsUpsertArgs} args - Arguments to update or create a Sales_items.
     * @example
     * // Update or create a Sales_items
     * const sales_items = await prisma.sales_items.upsert({
     *   create: {
     *     // ... data to create a Sales_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales_items we want to update
     *   }
     * })
     */
    upsert<T extends sales_itemsUpsertArgs>(args: SelectSubset<T, sales_itemsUpsertArgs<ExtArgs>>): Prisma__sales_itemsClient<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_itemsCountArgs} args - Arguments to filter Sales_items to count.
     * @example
     * // Count the number of Sales_items
     * const count = await prisma.sales_items.count({
     *   where: {
     *     // ... the filter for the Sales_items we want to count
     *   }
     * })
    **/
    count<T extends sales_itemsCountArgs>(
      args?: Subset<T, sales_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sales_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sales_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sales_itemsAggregateArgs>(args: Subset<T, Sales_itemsAggregateArgs>): Prisma.PrismaPromise<GetSales_itemsAggregateType<T>>

    /**
     * Group by Sales_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sales_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sales_itemsGroupByArgs['orderBy'] }
        : { orderBy?: sales_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sales_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSales_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sales_items model
   */
  readonly fields: sales_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sales_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sales_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sale<T extends salesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, salesDefaultArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sales_items model
   */
  interface sales_itemsFieldRefs {
    readonly id: FieldRef<"sales_items", 'String'>
    readonly sales_id: FieldRef<"sales_items", 'String'>
    readonly product_id: FieldRef<"sales_items", 'String'>
    readonly quantity: FieldRef<"sales_items", 'Int'>
    readonly price: FieldRef<"sales_items", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * sales_items findUnique
   */
  export type sales_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * Filter, which sales_items to fetch.
     */
    where: sales_itemsWhereUniqueInput
  }

  /**
   * sales_items findUniqueOrThrow
   */
  export type sales_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * Filter, which sales_items to fetch.
     */
    where: sales_itemsWhereUniqueInput
  }

  /**
   * sales_items findFirst
   */
  export type sales_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * Filter, which sales_items to fetch.
     */
    where?: sales_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales_items to fetch.
     */
    orderBy?: sales_itemsOrderByWithRelationInput | sales_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales_items.
     */
    cursor?: sales_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales_items.
     */
    distinct?: Sales_itemsScalarFieldEnum | Sales_itemsScalarFieldEnum[]
  }

  /**
   * sales_items findFirstOrThrow
   */
  export type sales_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * Filter, which sales_items to fetch.
     */
    where?: sales_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales_items to fetch.
     */
    orderBy?: sales_itemsOrderByWithRelationInput | sales_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales_items.
     */
    cursor?: sales_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales_items.
     */
    distinct?: Sales_itemsScalarFieldEnum | Sales_itemsScalarFieldEnum[]
  }

  /**
   * sales_items findMany
   */
  export type sales_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * Filter, which sales_items to fetch.
     */
    where?: sales_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales_items to fetch.
     */
    orderBy?: sales_itemsOrderByWithRelationInput | sales_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sales_items.
     */
    cursor?: sales_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales_items.
     */
    skip?: number
    distinct?: Sales_itemsScalarFieldEnum | Sales_itemsScalarFieldEnum[]
  }

  /**
   * sales_items create
   */
  export type sales_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a sales_items.
     */
    data: XOR<sales_itemsCreateInput, sales_itemsUncheckedCreateInput>
  }

  /**
   * sales_items createMany
   */
  export type sales_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sales_items.
     */
    data: sales_itemsCreateManyInput | sales_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sales_items createManyAndReturn
   */
  export type sales_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many sales_items.
     */
    data: sales_itemsCreateManyInput | sales_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sales_items update
   */
  export type sales_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a sales_items.
     */
    data: XOR<sales_itemsUpdateInput, sales_itemsUncheckedUpdateInput>
    /**
     * Choose, which sales_items to update.
     */
    where: sales_itemsWhereUniqueInput
  }

  /**
   * sales_items updateMany
   */
  export type sales_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sales_items.
     */
    data: XOR<sales_itemsUpdateManyMutationInput, sales_itemsUncheckedUpdateManyInput>
    /**
     * Filter which sales_items to update
     */
    where?: sales_itemsWhereInput
    /**
     * Limit how many sales_items to update.
     */
    limit?: number
  }

  /**
   * sales_items updateManyAndReturn
   */
  export type sales_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * The data used to update sales_items.
     */
    data: XOR<sales_itemsUpdateManyMutationInput, sales_itemsUncheckedUpdateManyInput>
    /**
     * Filter which sales_items to update
     */
    where?: sales_itemsWhereInput
    /**
     * Limit how many sales_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sales_items upsert
   */
  export type sales_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the sales_items to update in case it exists.
     */
    where: sales_itemsWhereUniqueInput
    /**
     * In case the sales_items found by the `where` argument doesn't exist, create a new sales_items with this data.
     */
    create: XOR<sales_itemsCreateInput, sales_itemsUncheckedCreateInput>
    /**
     * In case the sales_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sales_itemsUpdateInput, sales_itemsUncheckedUpdateInput>
  }

  /**
   * sales_items delete
   */
  export type sales_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * Filter which sales_items to delete.
     */
    where: sales_itemsWhereUniqueInput
  }

  /**
   * sales_items deleteMany
   */
  export type sales_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales_items to delete
     */
    where?: sales_itemsWhereInput
    /**
     * Limit how many sales_items to delete.
     */
    limit?: number
  }

  /**
   * sales_items without action
   */
  export type sales_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
  }


  /**
   * Model purchases
   */

  export type AggregatePurchases = {
    _count: PurchasesCountAggregateOutputType | null
    _min: PurchasesMinAggregateOutputType | null
    _max: PurchasesMaxAggregateOutputType | null
  }

  export type PurchasesMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    user_id: string | null
    supplier_id: string | null
    input_date: Date | null
    invoice_number: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PurchasesMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    user_id: string | null
    supplier_id: string | null
    input_date: Date | null
    invoice_number: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PurchasesCountAggregateOutputType = {
    id: number
    company_id: number
    user_id: number
    supplier_id: number
    input_date: number
    invoice_number: number
    notes: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PurchasesMinAggregateInputType = {
    id?: true
    company_id?: true
    user_id?: true
    supplier_id?: true
    input_date?: true
    invoice_number?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type PurchasesMaxAggregateInputType = {
    id?: true
    company_id?: true
    user_id?: true
    supplier_id?: true
    input_date?: true
    invoice_number?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type PurchasesCountAggregateInputType = {
    id?: true
    company_id?: true
    user_id?: true
    supplier_id?: true
    input_date?: true
    invoice_number?: true
    notes?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PurchasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which purchases to aggregate.
     */
    where?: purchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchases to fetch.
     */
    orderBy?: purchasesOrderByWithRelationInput | purchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: purchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned purchases
    **/
    _count?: true | PurchasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchasesMaxAggregateInputType
  }

  export type GetPurchasesAggregateType<T extends PurchasesAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchases[P]>
      : GetScalarType<T[P], AggregatePurchases[P]>
  }




  export type purchasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchasesWhereInput
    orderBy?: purchasesOrderByWithAggregationInput | purchasesOrderByWithAggregationInput[]
    by: PurchasesScalarFieldEnum[] | PurchasesScalarFieldEnum
    having?: purchasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchasesCountAggregateInputType | true
    _min?: PurchasesMinAggregateInputType
    _max?: PurchasesMaxAggregateInputType
  }

  export type PurchasesGroupByOutputType = {
    id: string
    company_id: string
    user_id: string
    supplier_id: string | null
    input_date: Date
    invoice_number: string | null
    notes: string | null
    created_at: Date
    updated_at: Date
    _count: PurchasesCountAggregateOutputType | null
    _min: PurchasesMinAggregateOutputType | null
    _max: PurchasesMaxAggregateOutputType | null
  }

  type GetPurchasesGroupByPayload<T extends purchasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchasesGroupByOutputType[P]>
            : GetScalarType<T[P], PurchasesGroupByOutputType[P]>
        }
      >
    >


  export type purchasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    user_id?: boolean
    supplier_id?: boolean
    input_date?: boolean
    invoice_number?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    supplier?: boolean | purchases$supplierArgs<ExtArgs>
    items?: boolean | purchases$itemsArgs<ExtArgs>
    _count?: boolean | PurchasesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchases"]>

  export type purchasesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    user_id?: boolean
    supplier_id?: boolean
    input_date?: boolean
    invoice_number?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    supplier?: boolean | purchases$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["purchases"]>

  export type purchasesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    user_id?: boolean
    supplier_id?: boolean
    input_date?: boolean
    invoice_number?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    supplier?: boolean | purchases$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["purchases"]>

  export type purchasesSelectScalar = {
    id?: boolean
    company_id?: boolean
    user_id?: boolean
    supplier_id?: boolean
    input_date?: boolean
    invoice_number?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type purchasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_id" | "user_id" | "supplier_id" | "input_date" | "invoice_number" | "notes" | "created_at" | "updated_at", ExtArgs["result"]["purchases"]>
  export type purchasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    supplier?: boolean | purchases$supplierArgs<ExtArgs>
    items?: boolean | purchases$itemsArgs<ExtArgs>
    _count?: boolean | PurchasesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type purchasesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    supplier?: boolean | purchases$supplierArgs<ExtArgs>
  }
  export type purchasesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    supplier?: boolean | purchases$supplierArgs<ExtArgs>
  }

  export type $purchasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "purchases"
    objects: {
      company: Prisma.$companiesPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
      supplier: Prisma.$suppliersPayload<ExtArgs> | null
      items: Prisma.$purchases_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_id: string
      user_id: string
      supplier_id: string | null
      input_date: Date
      invoice_number: string | null
      notes: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["purchases"]>
    composites: {}
  }

  type purchasesGetPayload<S extends boolean | null | undefined | purchasesDefaultArgs> = $Result.GetResult<Prisma.$purchasesPayload, S>

  type purchasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<purchasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchasesCountAggregateInputType | true
    }

  export interface purchasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['purchases'], meta: { name: 'purchases' } }
    /**
     * Find zero or one Purchases that matches the filter.
     * @param {purchasesFindUniqueArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends purchasesFindUniqueArgs>(args: SelectSubset<T, purchasesFindUniqueArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {purchasesFindUniqueOrThrowArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends purchasesFindUniqueOrThrowArgs>(args: SelectSubset<T, purchasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchasesFindFirstArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends purchasesFindFirstArgs>(args?: SelectSubset<T, purchasesFindFirstArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchasesFindFirstOrThrowArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends purchasesFindFirstOrThrowArgs>(args?: SelectSubset<T, purchasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchases.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchases.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchasesWithIdOnly = await prisma.purchases.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends purchasesFindManyArgs>(args?: SelectSubset<T, purchasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchases.
     * @param {purchasesCreateArgs} args - Arguments to create a Purchases.
     * @example
     * // Create one Purchases
     * const Purchases = await prisma.purchases.create({
     *   data: {
     *     // ... data to create a Purchases
     *   }
     * })
     * 
     */
    create<T extends purchasesCreateArgs>(args: SelectSubset<T, purchasesCreateArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {purchasesCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchases = await prisma.purchases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends purchasesCreateManyArgs>(args?: SelectSubset<T, purchasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {purchasesCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchases = await prisma.purchases.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchasesWithIdOnly = await prisma.purchases.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends purchasesCreateManyAndReturnArgs>(args?: SelectSubset<T, purchasesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchases.
     * @param {purchasesDeleteArgs} args - Arguments to delete one Purchases.
     * @example
     * // Delete one Purchases
     * const Purchases = await prisma.purchases.delete({
     *   where: {
     *     // ... filter to delete one Purchases
     *   }
     * })
     * 
     */
    delete<T extends purchasesDeleteArgs>(args: SelectSubset<T, purchasesDeleteArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchases.
     * @param {purchasesUpdateArgs} args - Arguments to update one Purchases.
     * @example
     * // Update one Purchases
     * const purchases = await prisma.purchases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends purchasesUpdateArgs>(args: SelectSubset<T, purchasesUpdateArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {purchasesDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends purchasesDeleteManyArgs>(args?: SelectSubset<T, purchasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchases = await prisma.purchases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends purchasesUpdateManyArgs>(args: SelectSubset<T, purchasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {purchasesUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchases = await prisma.purchases.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `id`
     * const purchasesWithIdOnly = await prisma.purchases.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends purchasesUpdateManyAndReturnArgs>(args: SelectSubset<T, purchasesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchases.
     * @param {purchasesUpsertArgs} args - Arguments to update or create a Purchases.
     * @example
     * // Update or create a Purchases
     * const purchases = await prisma.purchases.upsert({
     *   create: {
     *     // ... data to create a Purchases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchases we want to update
     *   }
     * })
     */
    upsert<T extends purchasesUpsertArgs>(args: SelectSubset<T, purchasesUpsertArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchasesCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchases.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends purchasesCountArgs>(
      args?: Subset<T, purchasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchasesAggregateArgs>(args: Subset<T, PurchasesAggregateArgs>): Prisma.PrismaPromise<GetPurchasesAggregateType<T>>

    /**
     * Group by Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchasesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends purchasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: purchasesGroupByArgs['orderBy'] }
        : { orderBy?: purchasesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, purchasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the purchases model
   */
  readonly fields: purchasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for purchases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__purchasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends companiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companiesDefaultArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supplier<T extends purchases$supplierArgs<ExtArgs> = {}>(args?: Subset<T, purchases$supplierArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends purchases$itemsArgs<ExtArgs> = {}>(args?: Subset<T, purchases$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchases_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the purchases model
   */
  interface purchasesFieldRefs {
    readonly id: FieldRef<"purchases", 'String'>
    readonly company_id: FieldRef<"purchases", 'String'>
    readonly user_id: FieldRef<"purchases", 'String'>
    readonly supplier_id: FieldRef<"purchases", 'String'>
    readonly input_date: FieldRef<"purchases", 'DateTime'>
    readonly invoice_number: FieldRef<"purchases", 'String'>
    readonly notes: FieldRef<"purchases", 'String'>
    readonly created_at: FieldRef<"purchases", 'DateTime'>
    readonly updated_at: FieldRef<"purchases", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * purchases findUnique
   */
  export type purchasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * Filter, which purchases to fetch.
     */
    where: purchasesWhereUniqueInput
  }

  /**
   * purchases findUniqueOrThrow
   */
  export type purchasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * Filter, which purchases to fetch.
     */
    where: purchasesWhereUniqueInput
  }

  /**
   * purchases findFirst
   */
  export type purchasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * Filter, which purchases to fetch.
     */
    where?: purchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchases to fetch.
     */
    orderBy?: purchasesOrderByWithRelationInput | purchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for purchases.
     */
    cursor?: purchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of purchases.
     */
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * purchases findFirstOrThrow
   */
  export type purchasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * Filter, which purchases to fetch.
     */
    where?: purchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchases to fetch.
     */
    orderBy?: purchasesOrderByWithRelationInput | purchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for purchases.
     */
    cursor?: purchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of purchases.
     */
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * purchases findMany
   */
  export type purchasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * Filter, which purchases to fetch.
     */
    where?: purchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchases to fetch.
     */
    orderBy?: purchasesOrderByWithRelationInput | purchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing purchases.
     */
    cursor?: purchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchases.
     */
    skip?: number
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * purchases create
   */
  export type purchasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * The data needed to create a purchases.
     */
    data: XOR<purchasesCreateInput, purchasesUncheckedCreateInput>
  }

  /**
   * purchases createMany
   */
  export type purchasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many purchases.
     */
    data: purchasesCreateManyInput | purchasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * purchases createManyAndReturn
   */
  export type purchasesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * The data used to create many purchases.
     */
    data: purchasesCreateManyInput | purchasesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * purchases update
   */
  export type purchasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * The data needed to update a purchases.
     */
    data: XOR<purchasesUpdateInput, purchasesUncheckedUpdateInput>
    /**
     * Choose, which purchases to update.
     */
    where: purchasesWhereUniqueInput
  }

  /**
   * purchases updateMany
   */
  export type purchasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update purchases.
     */
    data: XOR<purchasesUpdateManyMutationInput, purchasesUncheckedUpdateManyInput>
    /**
     * Filter which purchases to update
     */
    where?: purchasesWhereInput
    /**
     * Limit how many purchases to update.
     */
    limit?: number
  }

  /**
   * purchases updateManyAndReturn
   */
  export type purchasesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * The data used to update purchases.
     */
    data: XOR<purchasesUpdateManyMutationInput, purchasesUncheckedUpdateManyInput>
    /**
     * Filter which purchases to update
     */
    where?: purchasesWhereInput
    /**
     * Limit how many purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * purchases upsert
   */
  export type purchasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * The filter to search for the purchases to update in case it exists.
     */
    where: purchasesWhereUniqueInput
    /**
     * In case the purchases found by the `where` argument doesn't exist, create a new purchases with this data.
     */
    create: XOR<purchasesCreateInput, purchasesUncheckedCreateInput>
    /**
     * In case the purchases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<purchasesUpdateInput, purchasesUncheckedUpdateInput>
  }

  /**
   * purchases delete
   */
  export type purchasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * Filter which purchases to delete.
     */
    where: purchasesWhereUniqueInput
  }

  /**
   * purchases deleteMany
   */
  export type purchasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which purchases to delete
     */
    where?: purchasesWhereInput
    /**
     * Limit how many purchases to delete.
     */
    limit?: number
  }

  /**
   * purchases.supplier
   */
  export type purchases$supplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    where?: suppliersWhereInput
  }

  /**
   * purchases.items
   */
  export type purchases$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases_items
     */
    select?: purchases_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases_items
     */
    omit?: purchases_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchases_itemsInclude<ExtArgs> | null
    where?: purchases_itemsWhereInput
    orderBy?: purchases_itemsOrderByWithRelationInput | purchases_itemsOrderByWithRelationInput[]
    cursor?: purchases_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Purchases_itemsScalarFieldEnum | Purchases_itemsScalarFieldEnum[]
  }

  /**
   * purchases without action
   */
  export type purchasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
  }


  /**
   * Model purchases_items
   */

  export type AggregatePurchases_items = {
    _count: Purchases_itemsCountAggregateOutputType | null
    _avg: Purchases_itemsAvgAggregateOutputType | null
    _sum: Purchases_itemsSumAggregateOutputType | null
    _min: Purchases_itemsMinAggregateOutputType | null
    _max: Purchases_itemsMaxAggregateOutputType | null
  }

  export type Purchases_itemsAvgAggregateOutputType = {
    quantity: number | null
    cost: Decimal | null
  }

  export type Purchases_itemsSumAggregateOutputType = {
    quantity: number | null
    cost: Decimal | null
  }

  export type Purchases_itemsMinAggregateOutputType = {
    id: string | null
    purchases_id: string | null
    product_id: string | null
    quantity: number | null
    cost: Decimal | null
  }

  export type Purchases_itemsMaxAggregateOutputType = {
    id: string | null
    purchases_id: string | null
    product_id: string | null
    quantity: number | null
    cost: Decimal | null
  }

  export type Purchases_itemsCountAggregateOutputType = {
    id: number
    purchases_id: number
    product_id: number
    quantity: number
    cost: number
    _all: number
  }


  export type Purchases_itemsAvgAggregateInputType = {
    quantity?: true
    cost?: true
  }

  export type Purchases_itemsSumAggregateInputType = {
    quantity?: true
    cost?: true
  }

  export type Purchases_itemsMinAggregateInputType = {
    id?: true
    purchases_id?: true
    product_id?: true
    quantity?: true
    cost?: true
  }

  export type Purchases_itemsMaxAggregateInputType = {
    id?: true
    purchases_id?: true
    product_id?: true
    quantity?: true
    cost?: true
  }

  export type Purchases_itemsCountAggregateInputType = {
    id?: true
    purchases_id?: true
    product_id?: true
    quantity?: true
    cost?: true
    _all?: true
  }

  export type Purchases_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which purchases_items to aggregate.
     */
    where?: purchases_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchases_items to fetch.
     */
    orderBy?: purchases_itemsOrderByWithRelationInput | purchases_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: purchases_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchases_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchases_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned purchases_items
    **/
    _count?: true | Purchases_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Purchases_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Purchases_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Purchases_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Purchases_itemsMaxAggregateInputType
  }

  export type GetPurchases_itemsAggregateType<T extends Purchases_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchases_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchases_items[P]>
      : GetScalarType<T[P], AggregatePurchases_items[P]>
  }




  export type purchases_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchases_itemsWhereInput
    orderBy?: purchases_itemsOrderByWithAggregationInput | purchases_itemsOrderByWithAggregationInput[]
    by: Purchases_itemsScalarFieldEnum[] | Purchases_itemsScalarFieldEnum
    having?: purchases_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Purchases_itemsCountAggregateInputType | true
    _avg?: Purchases_itemsAvgAggregateInputType
    _sum?: Purchases_itemsSumAggregateInputType
    _min?: Purchases_itemsMinAggregateInputType
    _max?: Purchases_itemsMaxAggregateInputType
  }

  export type Purchases_itemsGroupByOutputType = {
    id: string
    purchases_id: string
    product_id: string
    quantity: number
    cost: Decimal
    _count: Purchases_itemsCountAggregateOutputType | null
    _avg: Purchases_itemsAvgAggregateOutputType | null
    _sum: Purchases_itemsSumAggregateOutputType | null
    _min: Purchases_itemsMinAggregateOutputType | null
    _max: Purchases_itemsMaxAggregateOutputType | null
  }

  type GetPurchases_itemsGroupByPayload<T extends purchases_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Purchases_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Purchases_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Purchases_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Purchases_itemsGroupByOutputType[P]>
        }
      >
    >


  export type purchases_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchases_id?: boolean
    product_id?: boolean
    quantity?: boolean
    cost?: boolean
    purchase?: boolean | purchasesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchases_items"]>

  export type purchases_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchases_id?: boolean
    product_id?: boolean
    quantity?: boolean
    cost?: boolean
    purchase?: boolean | purchasesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchases_items"]>

  export type purchases_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchases_id?: boolean
    product_id?: boolean
    quantity?: boolean
    cost?: boolean
    purchase?: boolean | purchasesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchases_items"]>

  export type purchases_itemsSelectScalar = {
    id?: boolean
    purchases_id?: boolean
    product_id?: boolean
    quantity?: boolean
    cost?: boolean
  }

  export type purchases_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "purchases_id" | "product_id" | "quantity" | "cost", ExtArgs["result"]["purchases_items"]>
  export type purchases_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | purchasesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type purchases_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | purchasesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type purchases_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | purchasesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $purchases_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "purchases_items"
    objects: {
      purchase: Prisma.$purchasesPayload<ExtArgs>
      product: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      purchases_id: string
      product_id: string
      quantity: number
      cost: Prisma.Decimal
    }, ExtArgs["result"]["purchases_items"]>
    composites: {}
  }

  type purchases_itemsGetPayload<S extends boolean | null | undefined | purchases_itemsDefaultArgs> = $Result.GetResult<Prisma.$purchases_itemsPayload, S>

  type purchases_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<purchases_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Purchases_itemsCountAggregateInputType | true
    }

  export interface purchases_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['purchases_items'], meta: { name: 'purchases_items' } }
    /**
     * Find zero or one Purchases_items that matches the filter.
     * @param {purchases_itemsFindUniqueArgs} args - Arguments to find a Purchases_items
     * @example
     * // Get one Purchases_items
     * const purchases_items = await prisma.purchases_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends purchases_itemsFindUniqueArgs>(args: SelectSubset<T, purchases_itemsFindUniqueArgs<ExtArgs>>): Prisma__purchases_itemsClient<$Result.GetResult<Prisma.$purchases_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchases_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {purchases_itemsFindUniqueOrThrowArgs} args - Arguments to find a Purchases_items
     * @example
     * // Get one Purchases_items
     * const purchases_items = await prisma.purchases_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends purchases_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, purchases_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__purchases_itemsClient<$Result.GetResult<Prisma.$purchases_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchases_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchases_itemsFindFirstArgs} args - Arguments to find a Purchases_items
     * @example
     * // Get one Purchases_items
     * const purchases_items = await prisma.purchases_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends purchases_itemsFindFirstArgs>(args?: SelectSubset<T, purchases_itemsFindFirstArgs<ExtArgs>>): Prisma__purchases_itemsClient<$Result.GetResult<Prisma.$purchases_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchases_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchases_itemsFindFirstOrThrowArgs} args - Arguments to find a Purchases_items
     * @example
     * // Get one Purchases_items
     * const purchases_items = await prisma.purchases_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends purchases_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, purchases_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__purchases_itemsClient<$Result.GetResult<Prisma.$purchases_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchases_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases_items
     * const purchases_items = await prisma.purchases_items.findMany()
     * 
     * // Get first 10 Purchases_items
     * const purchases_items = await prisma.purchases_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchases_itemsWithIdOnly = await prisma.purchases_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends purchases_itemsFindManyArgs>(args?: SelectSubset<T, purchases_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchases_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchases_items.
     * @param {purchases_itemsCreateArgs} args - Arguments to create a Purchases_items.
     * @example
     * // Create one Purchases_items
     * const Purchases_items = await prisma.purchases_items.create({
     *   data: {
     *     // ... data to create a Purchases_items
     *   }
     * })
     * 
     */
    create<T extends purchases_itemsCreateArgs>(args: SelectSubset<T, purchases_itemsCreateArgs<ExtArgs>>): Prisma__purchases_itemsClient<$Result.GetResult<Prisma.$purchases_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases_items.
     * @param {purchases_itemsCreateManyArgs} args - Arguments to create many Purchases_items.
     * @example
     * // Create many Purchases_items
     * const purchases_items = await prisma.purchases_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends purchases_itemsCreateManyArgs>(args?: SelectSubset<T, purchases_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases_items and returns the data saved in the database.
     * @param {purchases_itemsCreateManyAndReturnArgs} args - Arguments to create many Purchases_items.
     * @example
     * // Create many Purchases_items
     * const purchases_items = await prisma.purchases_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases_items and only return the `id`
     * const purchases_itemsWithIdOnly = await prisma.purchases_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends purchases_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, purchases_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchases_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchases_items.
     * @param {purchases_itemsDeleteArgs} args - Arguments to delete one Purchases_items.
     * @example
     * // Delete one Purchases_items
     * const Purchases_items = await prisma.purchases_items.delete({
     *   where: {
     *     // ... filter to delete one Purchases_items
     *   }
     * })
     * 
     */
    delete<T extends purchases_itemsDeleteArgs>(args: SelectSubset<T, purchases_itemsDeleteArgs<ExtArgs>>): Prisma__purchases_itemsClient<$Result.GetResult<Prisma.$purchases_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchases_items.
     * @param {purchases_itemsUpdateArgs} args - Arguments to update one Purchases_items.
     * @example
     * // Update one Purchases_items
     * const purchases_items = await prisma.purchases_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends purchases_itemsUpdateArgs>(args: SelectSubset<T, purchases_itemsUpdateArgs<ExtArgs>>): Prisma__purchases_itemsClient<$Result.GetResult<Prisma.$purchases_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases_items.
     * @param {purchases_itemsDeleteManyArgs} args - Arguments to filter Purchases_items to delete.
     * @example
     * // Delete a few Purchases_items
     * const { count } = await prisma.purchases_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends purchases_itemsDeleteManyArgs>(args?: SelectSubset<T, purchases_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchases_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases_items
     * const purchases_items = await prisma.purchases_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends purchases_itemsUpdateManyArgs>(args: SelectSubset<T, purchases_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases_items and returns the data updated in the database.
     * @param {purchases_itemsUpdateManyAndReturnArgs} args - Arguments to update many Purchases_items.
     * @example
     * // Update many Purchases_items
     * const purchases_items = await prisma.purchases_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases_items and only return the `id`
     * const purchases_itemsWithIdOnly = await prisma.purchases_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends purchases_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, purchases_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchases_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchases_items.
     * @param {purchases_itemsUpsertArgs} args - Arguments to update or create a Purchases_items.
     * @example
     * // Update or create a Purchases_items
     * const purchases_items = await prisma.purchases_items.upsert({
     *   create: {
     *     // ... data to create a Purchases_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchases_items we want to update
     *   }
     * })
     */
    upsert<T extends purchases_itemsUpsertArgs>(args: SelectSubset<T, purchases_itemsUpsertArgs<ExtArgs>>): Prisma__purchases_itemsClient<$Result.GetResult<Prisma.$purchases_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchases_itemsCountArgs} args - Arguments to filter Purchases_items to count.
     * @example
     * // Count the number of Purchases_items
     * const count = await prisma.purchases_items.count({
     *   where: {
     *     // ... the filter for the Purchases_items we want to count
     *   }
     * })
    **/
    count<T extends purchases_itemsCountArgs>(
      args?: Subset<T, purchases_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Purchases_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchases_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchases_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Purchases_itemsAggregateArgs>(args: Subset<T, Purchases_itemsAggregateArgs>): Prisma.PrismaPromise<GetPurchases_itemsAggregateType<T>>

    /**
     * Group by Purchases_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchases_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends purchases_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: purchases_itemsGroupByArgs['orderBy'] }
        : { orderBy?: purchases_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, purchases_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchases_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the purchases_items model
   */
  readonly fields: purchases_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for purchases_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__purchases_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchase<T extends purchasesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, purchasesDefaultArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the purchases_items model
   */
  interface purchases_itemsFieldRefs {
    readonly id: FieldRef<"purchases_items", 'String'>
    readonly purchases_id: FieldRef<"purchases_items", 'String'>
    readonly product_id: FieldRef<"purchases_items", 'String'>
    readonly quantity: FieldRef<"purchases_items", 'Int'>
    readonly cost: FieldRef<"purchases_items", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * purchases_items findUnique
   */
  export type purchases_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases_items
     */
    select?: purchases_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases_items
     */
    omit?: purchases_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchases_itemsInclude<ExtArgs> | null
    /**
     * Filter, which purchases_items to fetch.
     */
    where: purchases_itemsWhereUniqueInput
  }

  /**
   * purchases_items findUniqueOrThrow
   */
  export type purchases_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases_items
     */
    select?: purchases_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases_items
     */
    omit?: purchases_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchases_itemsInclude<ExtArgs> | null
    /**
     * Filter, which purchases_items to fetch.
     */
    where: purchases_itemsWhereUniqueInput
  }

  /**
   * purchases_items findFirst
   */
  export type purchases_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases_items
     */
    select?: purchases_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases_items
     */
    omit?: purchases_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchases_itemsInclude<ExtArgs> | null
    /**
     * Filter, which purchases_items to fetch.
     */
    where?: purchases_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchases_items to fetch.
     */
    orderBy?: purchases_itemsOrderByWithRelationInput | purchases_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for purchases_items.
     */
    cursor?: purchases_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchases_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchases_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of purchases_items.
     */
    distinct?: Purchases_itemsScalarFieldEnum | Purchases_itemsScalarFieldEnum[]
  }

  /**
   * purchases_items findFirstOrThrow
   */
  export type purchases_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases_items
     */
    select?: purchases_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases_items
     */
    omit?: purchases_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchases_itemsInclude<ExtArgs> | null
    /**
     * Filter, which purchases_items to fetch.
     */
    where?: purchases_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchases_items to fetch.
     */
    orderBy?: purchases_itemsOrderByWithRelationInput | purchases_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for purchases_items.
     */
    cursor?: purchases_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchases_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchases_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of purchases_items.
     */
    distinct?: Purchases_itemsScalarFieldEnum | Purchases_itemsScalarFieldEnum[]
  }

  /**
   * purchases_items findMany
   */
  export type purchases_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases_items
     */
    select?: purchases_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases_items
     */
    omit?: purchases_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchases_itemsInclude<ExtArgs> | null
    /**
     * Filter, which purchases_items to fetch.
     */
    where?: purchases_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchases_items to fetch.
     */
    orderBy?: purchases_itemsOrderByWithRelationInput | purchases_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing purchases_items.
     */
    cursor?: purchases_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchases_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchases_items.
     */
    skip?: number
    distinct?: Purchases_itemsScalarFieldEnum | Purchases_itemsScalarFieldEnum[]
  }

  /**
   * purchases_items create
   */
  export type purchases_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases_items
     */
    select?: purchases_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases_items
     */
    omit?: purchases_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchases_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a purchases_items.
     */
    data: XOR<purchases_itemsCreateInput, purchases_itemsUncheckedCreateInput>
  }

  /**
   * purchases_items createMany
   */
  export type purchases_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many purchases_items.
     */
    data: purchases_itemsCreateManyInput | purchases_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * purchases_items createManyAndReturn
   */
  export type purchases_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases_items
     */
    select?: purchases_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the purchases_items
     */
    omit?: purchases_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many purchases_items.
     */
    data: purchases_itemsCreateManyInput | purchases_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchases_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * purchases_items update
   */
  export type purchases_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases_items
     */
    select?: purchases_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases_items
     */
    omit?: purchases_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchases_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a purchases_items.
     */
    data: XOR<purchases_itemsUpdateInput, purchases_itemsUncheckedUpdateInput>
    /**
     * Choose, which purchases_items to update.
     */
    where: purchases_itemsWhereUniqueInput
  }

  /**
   * purchases_items updateMany
   */
  export type purchases_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update purchases_items.
     */
    data: XOR<purchases_itemsUpdateManyMutationInput, purchases_itemsUncheckedUpdateManyInput>
    /**
     * Filter which purchases_items to update
     */
    where?: purchases_itemsWhereInput
    /**
     * Limit how many purchases_items to update.
     */
    limit?: number
  }

  /**
   * purchases_items updateManyAndReturn
   */
  export type purchases_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases_items
     */
    select?: purchases_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the purchases_items
     */
    omit?: purchases_itemsOmit<ExtArgs> | null
    /**
     * The data used to update purchases_items.
     */
    data: XOR<purchases_itemsUpdateManyMutationInput, purchases_itemsUncheckedUpdateManyInput>
    /**
     * Filter which purchases_items to update
     */
    where?: purchases_itemsWhereInput
    /**
     * Limit how many purchases_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchases_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * purchases_items upsert
   */
  export type purchases_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases_items
     */
    select?: purchases_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases_items
     */
    omit?: purchases_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchases_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the purchases_items to update in case it exists.
     */
    where: purchases_itemsWhereUniqueInput
    /**
     * In case the purchases_items found by the `where` argument doesn't exist, create a new purchases_items with this data.
     */
    create: XOR<purchases_itemsCreateInput, purchases_itemsUncheckedCreateInput>
    /**
     * In case the purchases_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<purchases_itemsUpdateInput, purchases_itemsUncheckedUpdateInput>
  }

  /**
   * purchases_items delete
   */
  export type purchases_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases_items
     */
    select?: purchases_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases_items
     */
    omit?: purchases_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchases_itemsInclude<ExtArgs> | null
    /**
     * Filter which purchases_items to delete.
     */
    where: purchases_itemsWhereUniqueInput
  }

  /**
   * purchases_items deleteMany
   */
  export type purchases_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which purchases_items to delete
     */
    where?: purchases_itemsWhereInput
    /**
     * Limit how many purchases_items to delete.
     */
    limit?: number
  }

  /**
   * purchases_items without action
   */
  export type purchases_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases_items
     */
    select?: purchases_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases_items
     */
    omit?: purchases_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchases_itemsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const CompaniesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    cnpj: 'cnpj',
    address: 'address',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CompaniesScalarFieldEnum = (typeof CompaniesScalarFieldEnum)[keyof typeof CompaniesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at',
    role_id: 'role_id',
    company_id: 'company_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SubscriptionsScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    plan_name: 'plan_name',
    status: 'status',
    started_at: 'started_at',
    expires_at: 'expires_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SubscriptionsScalarFieldEnum = (typeof SubscriptionsScalarFieldEnum)[keyof typeof SubscriptionsScalarFieldEnum]


  export const SuppliersScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    contact_name: 'contact_name',
    website: 'website',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SuppliersScalarFieldEnum = (typeof SuppliersScalarFieldEnum)[keyof typeof SuppliersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    supplier_id: 'supplier_id',
    name: 'name',
    description: 'description',
    sku: 'sku',
    price: 'price',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    document: 'document',
    address: 'address',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const SalesScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    user_id: 'user_id',
    customer_id: 'customer_id',
    sale_date: 'sale_date',
    notes: 'notes',
    payment_method: 'payment_method',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum]


  export const Sales_itemsScalarFieldEnum: {
    id: 'id',
    sales_id: 'sales_id',
    product_id: 'product_id',
    quantity: 'quantity',
    price: 'price'
  };

  export type Sales_itemsScalarFieldEnum = (typeof Sales_itemsScalarFieldEnum)[keyof typeof Sales_itemsScalarFieldEnum]


  export const PurchasesScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    user_id: 'user_id',
    supplier_id: 'supplier_id',
    input_date: 'input_date',
    invoice_number: 'invoice_number',
    notes: 'notes',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PurchasesScalarFieldEnum = (typeof PurchasesScalarFieldEnum)[keyof typeof PurchasesScalarFieldEnum]


  export const Purchases_itemsScalarFieldEnum: {
    id: 'id',
    purchases_id: 'purchases_id',
    product_id: 'product_id',
    quantity: 'quantity',
    cost: 'cost'
  };

  export type Purchases_itemsScalarFieldEnum = (typeof Purchases_itemsScalarFieldEnum)[keyof typeof Purchases_itemsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: StringFilter<"roles"> | string
    name?: StringFilter<"roles"> | string
    description?: StringNullableFilter<"roles"> | string | null
    users?: UsersListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    description?: StringNullableFilter<"roles"> | string | null
    users?: UsersListRelationFilter
  }, "id" | "name">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: rolesCountOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"roles"> | string
    name?: StringWithAggregatesFilter<"roles"> | string
    description?: StringNullableWithAggregatesFilter<"roles"> | string | null
  }

  export type companiesWhereInput = {
    AND?: companiesWhereInput | companiesWhereInput[]
    OR?: companiesWhereInput[]
    NOT?: companiesWhereInput | companiesWhereInput[]
    id?: StringFilter<"companies"> | string
    name?: StringFilter<"companies"> | string
    email?: StringFilter<"companies"> | string
    phone?: StringNullableFilter<"companies"> | string | null
    cnpj?: StringNullableFilter<"companies"> | string | null
    address?: JsonNullableFilter<"companies">
    is_active?: BoolFilter<"companies"> | boolean
    created_at?: DateTimeFilter<"companies"> | Date | string
    updated_at?: DateTimeFilter<"companies"> | Date | string
    users?: UsersListRelationFilter
    subscriptions?: SubscriptionsListRelationFilter
    suppliers?: SuppliersListRelationFilter
    products?: ProductsListRelationFilter
    customers?: CustomersListRelationFilter
    sales?: SalesListRelationFilter
    purchases?: PurchasesListRelationFilter
  }

  export type companiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: usersOrderByRelationAggregateInput
    subscriptions?: subscriptionsOrderByRelationAggregateInput
    suppliers?: suppliersOrderByRelationAggregateInput
    products?: productsOrderByRelationAggregateInput
    customers?: customersOrderByRelationAggregateInput
    sales?: salesOrderByRelationAggregateInput
    purchases?: purchasesOrderByRelationAggregateInput
  }

  export type companiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    email?: string
    cnpj?: string
    AND?: companiesWhereInput | companiesWhereInput[]
    OR?: companiesWhereInput[]
    NOT?: companiesWhereInput | companiesWhereInput[]
    phone?: StringNullableFilter<"companies"> | string | null
    address?: JsonNullableFilter<"companies">
    is_active?: BoolFilter<"companies"> | boolean
    created_at?: DateTimeFilter<"companies"> | Date | string
    updated_at?: DateTimeFilter<"companies"> | Date | string
    users?: UsersListRelationFilter
    subscriptions?: SubscriptionsListRelationFilter
    suppliers?: SuppliersListRelationFilter
    products?: ProductsListRelationFilter
    customers?: CustomersListRelationFilter
    sales?: SalesListRelationFilter
    purchases?: PurchasesListRelationFilter
  }, "id" | "name" | "email" | "cnpj">

  export type companiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: companiesCountOrderByAggregateInput
    _max?: companiesMaxOrderByAggregateInput
    _min?: companiesMinOrderByAggregateInput
  }

  export type companiesScalarWhereWithAggregatesInput = {
    AND?: companiesScalarWhereWithAggregatesInput | companiesScalarWhereWithAggregatesInput[]
    OR?: companiesScalarWhereWithAggregatesInput[]
    NOT?: companiesScalarWhereWithAggregatesInput | companiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"companies"> | string
    name?: StringWithAggregatesFilter<"companies"> | string
    email?: StringWithAggregatesFilter<"companies"> | string
    phone?: StringNullableWithAggregatesFilter<"companies"> | string | null
    cnpj?: StringNullableWithAggregatesFilter<"companies"> | string | null
    address?: JsonNullableWithAggregatesFilter<"companies">
    is_active?: BoolWithAggregatesFilter<"companies"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"companies"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"companies"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    is_active?: BoolFilter<"users"> | boolean
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    role_id?: StringFilter<"users"> | string
    company_id?: StringNullableFilter<"users"> | string | null
    role?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    company?: XOR<CompaniesNullableScalarRelationFilter, companiesWhereInput> | null
    sales?: SalesListRelationFilter
    purchases?: PurchasesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_id?: SortOrder
    company_id?: SortOrderInput | SortOrder
    role?: rolesOrderByWithRelationInput
    company?: companiesOrderByWithRelationInput
    sales?: salesOrderByRelationAggregateInput
    purchases?: purchasesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    is_active?: BoolFilter<"users"> | boolean
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    role_id?: StringFilter<"users"> | string
    company_id?: StringNullableFilter<"users"> | string | null
    role?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    company?: XOR<CompaniesNullableScalarRelationFilter, companiesWhereInput> | null
    sales?: SalesListRelationFilter
    purchases?: PurchasesListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_id?: SortOrder
    company_id?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    is_active?: BoolWithAggregatesFilter<"users"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    role_id?: StringWithAggregatesFilter<"users"> | string
    company_id?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type subscriptionsWhereInput = {
    AND?: subscriptionsWhereInput | subscriptionsWhereInput[]
    OR?: subscriptionsWhereInput[]
    NOT?: subscriptionsWhereInput | subscriptionsWhereInput[]
    id?: StringFilter<"subscriptions"> | string
    company_id?: StringFilter<"subscriptions"> | string
    plan_name?: StringFilter<"subscriptions"> | string
    status?: StringFilter<"subscriptions"> | string
    started_at?: DateTimeFilter<"subscriptions"> | Date | string
    expires_at?: DateTimeNullableFilter<"subscriptions"> | Date | string | null
    created_at?: DateTimeFilter<"subscriptions"> | Date | string
    updated_at?: DateTimeFilter<"subscriptions"> | Date | string
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
  }

  export type subscriptionsOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    plan_name?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company?: companiesOrderByWithRelationInput
  }

  export type subscriptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: subscriptionsWhereInput | subscriptionsWhereInput[]
    OR?: subscriptionsWhereInput[]
    NOT?: subscriptionsWhereInput | subscriptionsWhereInput[]
    company_id?: StringFilter<"subscriptions"> | string
    plan_name?: StringFilter<"subscriptions"> | string
    status?: StringFilter<"subscriptions"> | string
    started_at?: DateTimeFilter<"subscriptions"> | Date | string
    expires_at?: DateTimeNullableFilter<"subscriptions"> | Date | string | null
    created_at?: DateTimeFilter<"subscriptions"> | Date | string
    updated_at?: DateTimeFilter<"subscriptions"> | Date | string
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
  }, "id">

  export type subscriptionsOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    plan_name?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: subscriptionsCountOrderByAggregateInput
    _max?: subscriptionsMaxOrderByAggregateInput
    _min?: subscriptionsMinOrderByAggregateInput
  }

  export type subscriptionsScalarWhereWithAggregatesInput = {
    AND?: subscriptionsScalarWhereWithAggregatesInput | subscriptionsScalarWhereWithAggregatesInput[]
    OR?: subscriptionsScalarWhereWithAggregatesInput[]
    NOT?: subscriptionsScalarWhereWithAggregatesInput | subscriptionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"subscriptions"> | string
    company_id?: StringWithAggregatesFilter<"subscriptions"> | string
    plan_name?: StringWithAggregatesFilter<"subscriptions"> | string
    status?: StringWithAggregatesFilter<"subscriptions"> | string
    started_at?: DateTimeWithAggregatesFilter<"subscriptions"> | Date | string
    expires_at?: DateTimeNullableWithAggregatesFilter<"subscriptions"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"subscriptions"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"subscriptions"> | Date | string
  }

  export type suppliersWhereInput = {
    AND?: suppliersWhereInput | suppliersWhereInput[]
    OR?: suppliersWhereInput[]
    NOT?: suppliersWhereInput | suppliersWhereInput[]
    id?: StringFilter<"suppliers"> | string
    company_id?: StringFilter<"suppliers"> | string
    name?: StringFilter<"suppliers"> | string
    email?: StringNullableFilter<"suppliers"> | string | null
    phone?: StringNullableFilter<"suppliers"> | string | null
    address?: StringNullableFilter<"suppliers"> | string | null
    contact_name?: StringNullableFilter<"suppliers"> | string | null
    website?: StringNullableFilter<"suppliers"> | string | null
    is_active?: BoolFilter<"suppliers"> | boolean
    created_at?: DateTimeFilter<"suppliers"> | Date | string
    updated_at?: DateTimeFilter<"suppliers"> | Date | string
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    products?: ProductsListRelationFilter
    purchases?: PurchasesListRelationFilter
  }

  export type suppliersOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    contact_name?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company?: companiesOrderByWithRelationInput
    products?: productsOrderByRelationAggregateInput
    purchases?: purchasesOrderByRelationAggregateInput
  }

  export type suppliersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: suppliersWhereInput | suppliersWhereInput[]
    OR?: suppliersWhereInput[]
    NOT?: suppliersWhereInput | suppliersWhereInput[]
    company_id?: StringFilter<"suppliers"> | string
    name?: StringFilter<"suppliers"> | string
    email?: StringNullableFilter<"suppliers"> | string | null
    phone?: StringNullableFilter<"suppliers"> | string | null
    address?: StringNullableFilter<"suppliers"> | string | null
    contact_name?: StringNullableFilter<"suppliers"> | string | null
    website?: StringNullableFilter<"suppliers"> | string | null
    is_active?: BoolFilter<"suppliers"> | boolean
    created_at?: DateTimeFilter<"suppliers"> | Date | string
    updated_at?: DateTimeFilter<"suppliers"> | Date | string
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    products?: ProductsListRelationFilter
    purchases?: PurchasesListRelationFilter
  }, "id">

  export type suppliersOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    contact_name?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: suppliersCountOrderByAggregateInput
    _max?: suppliersMaxOrderByAggregateInput
    _min?: suppliersMinOrderByAggregateInput
  }

  export type suppliersScalarWhereWithAggregatesInput = {
    AND?: suppliersScalarWhereWithAggregatesInput | suppliersScalarWhereWithAggregatesInput[]
    OR?: suppliersScalarWhereWithAggregatesInput[]
    NOT?: suppliersScalarWhereWithAggregatesInput | suppliersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"suppliers"> | string
    company_id?: StringWithAggregatesFilter<"suppliers"> | string
    name?: StringWithAggregatesFilter<"suppliers"> | string
    email?: StringNullableWithAggregatesFilter<"suppliers"> | string | null
    phone?: StringNullableWithAggregatesFilter<"suppliers"> | string | null
    address?: StringNullableWithAggregatesFilter<"suppliers"> | string | null
    contact_name?: StringNullableWithAggregatesFilter<"suppliers"> | string | null
    website?: StringNullableWithAggregatesFilter<"suppliers"> | string | null
    is_active?: BoolWithAggregatesFilter<"suppliers"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"suppliers"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"suppliers"> | Date | string
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: StringFilter<"products"> | string
    company_id?: StringFilter<"products"> | string
    supplier_id?: StringNullableFilter<"products"> | string | null
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    sku?: StringNullableFilter<"products"> | string | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    is_active?: BoolFilter<"products"> | boolean
    created_at?: DateTimeFilter<"products"> | Date | string
    updated_at?: DateTimeFilter<"products"> | Date | string
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    supplier?: XOR<SuppliersNullableScalarRelationFilter, suppliersWhereInput> | null
    sales_items?: Sales_itemsListRelationFilter
    purchase_items?: Purchases_itemsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    supplier_id?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    price?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company?: companiesOrderByWithRelationInput
    supplier?: suppliersOrderByWithRelationInput
    sales_items?: sales_itemsOrderByRelationAggregateInput
    purchase_items?: purchases_itemsOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    company_id?: StringFilter<"products"> | string
    supplier_id?: StringNullableFilter<"products"> | string | null
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    is_active?: BoolFilter<"products"> | boolean
    created_at?: DateTimeFilter<"products"> | Date | string
    updated_at?: DateTimeFilter<"products"> | Date | string
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    supplier?: XOR<SuppliersNullableScalarRelationFilter, suppliersWhereInput> | null
    sales_items?: Sales_itemsListRelationFilter
    purchase_items?: Purchases_itemsListRelationFilter
  }, "id" | "sku">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    supplier_id?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    price?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"products"> | string
    company_id?: StringWithAggregatesFilter<"products"> | string
    supplier_id?: StringNullableWithAggregatesFilter<"products"> | string | null
    name?: StringWithAggregatesFilter<"products"> | string
    description?: StringNullableWithAggregatesFilter<"products"> | string | null
    sku?: StringNullableWithAggregatesFilter<"products"> | string | null
    price?: DecimalWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string
    is_active?: BoolWithAggregatesFilter<"products"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"products"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"products"> | Date | string
  }

  export type customersWhereInput = {
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    id?: StringFilter<"customers"> | string
    company_id?: StringFilter<"customers"> | string
    name?: StringFilter<"customers"> | string
    email?: StringNullableFilter<"customers"> | string | null
    phone?: StringNullableFilter<"customers"> | string | null
    document?: StringNullableFilter<"customers"> | string | null
    address?: StringNullableFilter<"customers"> | string | null
    is_active?: BoolFilter<"customers"> | boolean
    created_at?: DateTimeFilter<"customers"> | Date | string
    updated_at?: DateTimeFilter<"customers"> | Date | string
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    sales?: SalesListRelationFilter
  }

  export type customersOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    document?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company?: companiesOrderByWithRelationInput
    sales?: salesOrderByRelationAggregateInput
  }

  export type customersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    company_id?: StringFilter<"customers"> | string
    name?: StringFilter<"customers"> | string
    email?: StringNullableFilter<"customers"> | string | null
    phone?: StringNullableFilter<"customers"> | string | null
    document?: StringNullableFilter<"customers"> | string | null
    address?: StringNullableFilter<"customers"> | string | null
    is_active?: BoolFilter<"customers"> | boolean
    created_at?: DateTimeFilter<"customers"> | Date | string
    updated_at?: DateTimeFilter<"customers"> | Date | string
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    sales?: SalesListRelationFilter
  }, "id">

  export type customersOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    document?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: customersCountOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    OR?: customersScalarWhereWithAggregatesInput[]
    NOT?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"customers"> | string
    company_id?: StringWithAggregatesFilter<"customers"> | string
    name?: StringWithAggregatesFilter<"customers"> | string
    email?: StringNullableWithAggregatesFilter<"customers"> | string | null
    phone?: StringNullableWithAggregatesFilter<"customers"> | string | null
    document?: StringNullableWithAggregatesFilter<"customers"> | string | null
    address?: StringNullableWithAggregatesFilter<"customers"> | string | null
    is_active?: BoolWithAggregatesFilter<"customers"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"customers"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"customers"> | Date | string
  }

  export type salesWhereInput = {
    AND?: salesWhereInput | salesWhereInput[]
    OR?: salesWhereInput[]
    NOT?: salesWhereInput | salesWhereInput[]
    id?: StringFilter<"sales"> | string
    company_id?: StringFilter<"sales"> | string
    user_id?: StringFilter<"sales"> | string
    customer_id?: StringFilter<"sales"> | string
    sale_date?: DateTimeFilter<"sales"> | Date | string
    notes?: StringNullableFilter<"sales"> | string | null
    payment_method?: StringFilter<"sales"> | string
    created_at?: DateTimeFilter<"sales"> | Date | string
    updated_at?: DateTimeFilter<"sales"> | Date | string
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
    items?: Sales_itemsListRelationFilter
  }

  export type salesOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
    sale_date?: SortOrder
    notes?: SortOrderInput | SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company?: companiesOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
    customer?: customersOrderByWithRelationInput
    items?: sales_itemsOrderByRelationAggregateInput
  }

  export type salesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: salesWhereInput | salesWhereInput[]
    OR?: salesWhereInput[]
    NOT?: salesWhereInput | salesWhereInput[]
    company_id?: StringFilter<"sales"> | string
    user_id?: StringFilter<"sales"> | string
    customer_id?: StringFilter<"sales"> | string
    sale_date?: DateTimeFilter<"sales"> | Date | string
    notes?: StringNullableFilter<"sales"> | string | null
    payment_method?: StringFilter<"sales"> | string
    created_at?: DateTimeFilter<"sales"> | Date | string
    updated_at?: DateTimeFilter<"sales"> | Date | string
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
    items?: Sales_itemsListRelationFilter
  }, "id">

  export type salesOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
    sale_date?: SortOrder
    notes?: SortOrderInput | SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: salesCountOrderByAggregateInput
    _max?: salesMaxOrderByAggregateInput
    _min?: salesMinOrderByAggregateInput
  }

  export type salesScalarWhereWithAggregatesInput = {
    AND?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[]
    OR?: salesScalarWhereWithAggregatesInput[]
    NOT?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sales"> | string
    company_id?: StringWithAggregatesFilter<"sales"> | string
    user_id?: StringWithAggregatesFilter<"sales"> | string
    customer_id?: StringWithAggregatesFilter<"sales"> | string
    sale_date?: DateTimeWithAggregatesFilter<"sales"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"sales"> | string | null
    payment_method?: StringWithAggregatesFilter<"sales"> | string
    created_at?: DateTimeWithAggregatesFilter<"sales"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"sales"> | Date | string
  }

  export type sales_itemsWhereInput = {
    AND?: sales_itemsWhereInput | sales_itemsWhereInput[]
    OR?: sales_itemsWhereInput[]
    NOT?: sales_itemsWhereInput | sales_itemsWhereInput[]
    id?: StringFilter<"sales_items"> | string
    sales_id?: StringFilter<"sales_items"> | string
    product_id?: StringFilter<"sales_items"> | string
    quantity?: IntFilter<"sales_items"> | number
    price?: DecimalFilter<"sales_items"> | Decimal | DecimalJsLike | number | string
    sale?: XOR<SalesScalarRelationFilter, salesWhereInput>
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type sales_itemsOrderByWithRelationInput = {
    id?: SortOrder
    sales_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    sale?: salesOrderByWithRelationInput
    product?: productsOrderByWithRelationInput
  }

  export type sales_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sales_itemsWhereInput | sales_itemsWhereInput[]
    OR?: sales_itemsWhereInput[]
    NOT?: sales_itemsWhereInput | sales_itemsWhereInput[]
    sales_id?: StringFilter<"sales_items"> | string
    product_id?: StringFilter<"sales_items"> | string
    quantity?: IntFilter<"sales_items"> | number
    price?: DecimalFilter<"sales_items"> | Decimal | DecimalJsLike | number | string
    sale?: XOR<SalesScalarRelationFilter, salesWhereInput>
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id">

  export type sales_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    sales_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: sales_itemsCountOrderByAggregateInput
    _avg?: sales_itemsAvgOrderByAggregateInput
    _max?: sales_itemsMaxOrderByAggregateInput
    _min?: sales_itemsMinOrderByAggregateInput
    _sum?: sales_itemsSumOrderByAggregateInput
  }

  export type sales_itemsScalarWhereWithAggregatesInput = {
    AND?: sales_itemsScalarWhereWithAggregatesInput | sales_itemsScalarWhereWithAggregatesInput[]
    OR?: sales_itemsScalarWhereWithAggregatesInput[]
    NOT?: sales_itemsScalarWhereWithAggregatesInput | sales_itemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sales_items"> | string
    sales_id?: StringWithAggregatesFilter<"sales_items"> | string
    product_id?: StringWithAggregatesFilter<"sales_items"> | string
    quantity?: IntWithAggregatesFilter<"sales_items"> | number
    price?: DecimalWithAggregatesFilter<"sales_items"> | Decimal | DecimalJsLike | number | string
  }

  export type purchasesWhereInput = {
    AND?: purchasesWhereInput | purchasesWhereInput[]
    OR?: purchasesWhereInput[]
    NOT?: purchasesWhereInput | purchasesWhereInput[]
    id?: StringFilter<"purchases"> | string
    company_id?: StringFilter<"purchases"> | string
    user_id?: StringFilter<"purchases"> | string
    supplier_id?: StringNullableFilter<"purchases"> | string | null
    input_date?: DateTimeFilter<"purchases"> | Date | string
    invoice_number?: StringNullableFilter<"purchases"> | string | null
    notes?: StringNullableFilter<"purchases"> | string | null
    created_at?: DateTimeFilter<"purchases"> | Date | string
    updated_at?: DateTimeFilter<"purchases"> | Date | string
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    supplier?: XOR<SuppliersNullableScalarRelationFilter, suppliersWhereInput> | null
    items?: Purchases_itemsListRelationFilter
  }

  export type purchasesOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    user_id?: SortOrder
    supplier_id?: SortOrderInput | SortOrder
    input_date?: SortOrder
    invoice_number?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company?: companiesOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
    supplier?: suppliersOrderByWithRelationInput
    items?: purchases_itemsOrderByRelationAggregateInput
  }

  export type purchasesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: purchasesWhereInput | purchasesWhereInput[]
    OR?: purchasesWhereInput[]
    NOT?: purchasesWhereInput | purchasesWhereInput[]
    company_id?: StringFilter<"purchases"> | string
    user_id?: StringFilter<"purchases"> | string
    supplier_id?: StringNullableFilter<"purchases"> | string | null
    input_date?: DateTimeFilter<"purchases"> | Date | string
    invoice_number?: StringNullableFilter<"purchases"> | string | null
    notes?: StringNullableFilter<"purchases"> | string | null
    created_at?: DateTimeFilter<"purchases"> | Date | string
    updated_at?: DateTimeFilter<"purchases"> | Date | string
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    supplier?: XOR<SuppliersNullableScalarRelationFilter, suppliersWhereInput> | null
    items?: Purchases_itemsListRelationFilter
  }, "id">

  export type purchasesOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    user_id?: SortOrder
    supplier_id?: SortOrderInput | SortOrder
    input_date?: SortOrder
    invoice_number?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: purchasesCountOrderByAggregateInput
    _max?: purchasesMaxOrderByAggregateInput
    _min?: purchasesMinOrderByAggregateInput
  }

  export type purchasesScalarWhereWithAggregatesInput = {
    AND?: purchasesScalarWhereWithAggregatesInput | purchasesScalarWhereWithAggregatesInput[]
    OR?: purchasesScalarWhereWithAggregatesInput[]
    NOT?: purchasesScalarWhereWithAggregatesInput | purchasesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"purchases"> | string
    company_id?: StringWithAggregatesFilter<"purchases"> | string
    user_id?: StringWithAggregatesFilter<"purchases"> | string
    supplier_id?: StringNullableWithAggregatesFilter<"purchases"> | string | null
    input_date?: DateTimeWithAggregatesFilter<"purchases"> | Date | string
    invoice_number?: StringNullableWithAggregatesFilter<"purchases"> | string | null
    notes?: StringNullableWithAggregatesFilter<"purchases"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"purchases"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"purchases"> | Date | string
  }

  export type purchases_itemsWhereInput = {
    AND?: purchases_itemsWhereInput | purchases_itemsWhereInput[]
    OR?: purchases_itemsWhereInput[]
    NOT?: purchases_itemsWhereInput | purchases_itemsWhereInput[]
    id?: StringFilter<"purchases_items"> | string
    purchases_id?: StringFilter<"purchases_items"> | string
    product_id?: StringFilter<"purchases_items"> | string
    quantity?: IntFilter<"purchases_items"> | number
    cost?: DecimalFilter<"purchases_items"> | Decimal | DecimalJsLike | number | string
    purchase?: XOR<PurchasesScalarRelationFilter, purchasesWhereInput>
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type purchases_itemsOrderByWithRelationInput = {
    id?: SortOrder
    purchases_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    purchase?: purchasesOrderByWithRelationInput
    product?: productsOrderByWithRelationInput
  }

  export type purchases_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: purchases_itemsWhereInput | purchases_itemsWhereInput[]
    OR?: purchases_itemsWhereInput[]
    NOT?: purchases_itemsWhereInput | purchases_itemsWhereInput[]
    purchases_id?: StringFilter<"purchases_items"> | string
    product_id?: StringFilter<"purchases_items"> | string
    quantity?: IntFilter<"purchases_items"> | number
    cost?: DecimalFilter<"purchases_items"> | Decimal | DecimalJsLike | number | string
    purchase?: XOR<PurchasesScalarRelationFilter, purchasesWhereInput>
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id">

  export type purchases_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    purchases_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    _count?: purchases_itemsCountOrderByAggregateInput
    _avg?: purchases_itemsAvgOrderByAggregateInput
    _max?: purchases_itemsMaxOrderByAggregateInput
    _min?: purchases_itemsMinOrderByAggregateInput
    _sum?: purchases_itemsSumOrderByAggregateInput
  }

  export type purchases_itemsScalarWhereWithAggregatesInput = {
    AND?: purchases_itemsScalarWhereWithAggregatesInput | purchases_itemsScalarWhereWithAggregatesInput[]
    OR?: purchases_itemsScalarWhereWithAggregatesInput[]
    NOT?: purchases_itemsScalarWhereWithAggregatesInput | purchases_itemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"purchases_items"> | string
    purchases_id?: StringWithAggregatesFilter<"purchases_items"> | string
    product_id?: StringWithAggregatesFilter<"purchases_items"> | string
    quantity?: IntWithAggregatesFilter<"purchases_items"> | number
    cost?: DecimalWithAggregatesFilter<"purchases_items"> | Decimal | DecimalJsLike | number | string
  }

  export type rolesCreateInput = {
    id?: string
    name: string
    description?: string | null
    users?: usersCreateNestedManyWithoutRoleInput
  }

  export type rolesUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    users?: usersUncheckedCreateNestedManyWithoutRoleInput
  }

  export type rolesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateManyWithoutRoleNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type rolesCreateManyInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type rolesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companiesCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    cnpj?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersCreateNestedManyWithoutCompanyInput
    subscriptions?: subscriptionsCreateNestedManyWithoutCompanyInput
    suppliers?: suppliersCreateNestedManyWithoutCompanyInput
    products?: productsCreateNestedManyWithoutCompanyInput
    customers?: customersCreateNestedManyWithoutCompanyInput
    sales?: salesCreateNestedManyWithoutCompanyInput
    purchases?: purchasesCreateNestedManyWithoutCompanyInput
  }

  export type companiesUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    cnpj?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersUncheckedCreateNestedManyWithoutCompanyInput
    subscriptions?: subscriptionsUncheckedCreateNestedManyWithoutCompanyInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutCompanyInput
    products?: productsUncheckedCreateNestedManyWithoutCompanyInput
    customers?: customersUncheckedCreateNestedManyWithoutCompanyInput
    sales?: salesUncheckedCreateNestedManyWithoutCompanyInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateManyWithoutCompanyNestedInput
    subscriptions?: subscriptionsUpdateManyWithoutCompanyNestedInput
    suppliers?: suppliersUpdateManyWithoutCompanyNestedInput
    products?: productsUpdateManyWithoutCompanyNestedInput
    customers?: customersUpdateManyWithoutCompanyNestedInput
    sales?: salesUpdateManyWithoutCompanyNestedInput
    purchases?: purchasesUpdateManyWithoutCompanyNestedInput
  }

  export type companiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUncheckedUpdateManyWithoutCompanyNestedInput
    subscriptions?: subscriptionsUncheckedUpdateManyWithoutCompanyNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutCompanyNestedInput
    products?: productsUncheckedUpdateManyWithoutCompanyNestedInput
    customers?: customersUncheckedUpdateManyWithoutCompanyNestedInput
    sales?: salesUncheckedUpdateManyWithoutCompanyNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companiesCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    cnpj?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type companiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type companiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role: rolesCreateNestedOneWithoutUsersInput
    company?: companiesCreateNestedOneWithoutUsersInput
    sales?: salesCreateNestedManyWithoutUserInput
    purchases?: purchasesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role_id: string
    company_id?: string | null
    sales?: salesUncheckedCreateNestedManyWithoutUserInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutUsersNestedInput
    company?: companiesUpdateOneWithoutUsersNestedInput
    sales?: salesUpdateManyWithoutUserNestedInput
    purchases?: purchasesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role_id: string
    company_id?: string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type subscriptionsCreateInput = {
    id?: string
    plan_name: string
    status: string
    started_at?: Date | string
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutSubscriptionsInput
  }

  export type subscriptionsUncheckedCreateInput = {
    id?: string
    company_id: string
    plan_name: string
    status: string
    started_at?: Date | string
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type subscriptionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type subscriptionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    plan_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subscriptionsCreateManyInput = {
    id?: string
    company_id: string
    plan_name: string
    status: string
    started_at?: Date | string
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type subscriptionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subscriptionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    plan_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type suppliersCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    contact_name?: string | null
    website?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutSuppliersInput
    products?: productsCreateNestedManyWithoutSupplierInput
    purchases?: purchasesCreateNestedManyWithoutSupplierInput
  }

  export type suppliersUncheckedCreateInput = {
    id?: string
    company_id: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    contact_name?: string | null
    website?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    products?: productsUncheckedCreateNestedManyWithoutSupplierInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type suppliersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutSuppliersNestedInput
    products?: productsUpdateManyWithoutSupplierNestedInput
    purchases?: purchasesUpdateManyWithoutSupplierNestedInput
  }

  export type suppliersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUncheckedUpdateManyWithoutSupplierNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type suppliersCreateManyInput = {
    id?: string
    company_id: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    contact_name?: string | null
    website?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type suppliersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type suppliersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsCreateInput = {
    id?: string
    name: string
    description?: string | null
    sku?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutProductsInput
    supplier?: suppliersCreateNestedOneWithoutProductsInput
    sales_items?: sales_itemsCreateNestedManyWithoutProductInput
    purchase_items?: purchases_itemsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateInput = {
    id?: string
    company_id: string
    supplier_id?: string | null
    name: string
    description?: string | null
    sku?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutProductInput
    purchase_items?: purchases_itemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutProductsNestedInput
    supplier?: suppliersUpdateOneWithoutProductsNestedInput
    sales_items?: sales_itemsUpdateManyWithoutProductNestedInput
    purchase_items?: purchases_itemsUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    supplier_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sales_items?: sales_itemsUncheckedUpdateManyWithoutProductNestedInput
    purchase_items?: purchases_itemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productsCreateManyInput = {
    id?: string
    company_id: string
    supplier_id?: string | null
    name: string
    description?: string | null
    sku?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type productsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    supplier_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customersCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    document?: string | null
    address?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutCustomersInput
    sales?: salesCreateNestedManyWithoutCustomerInput
  }

  export type customersUncheckedCreateInput = {
    id?: string
    company_id: string
    name: string
    email?: string | null
    phone?: string | null
    document?: string | null
    address?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sales?: salesUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutCustomersNestedInput
    sales?: salesUpdateManyWithoutCustomerNestedInput
  }

  export type customersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: salesUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customersCreateManyInput = {
    id?: string
    company_id: string
    name: string
    email?: string | null
    phone?: string | null
    document?: string | null
    address?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type customersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type salesCreateInput = {
    id?: string
    sale_date?: Date | string
    notes?: string | null
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutSalesInput
    user: usersCreateNestedOneWithoutSalesInput
    customer: customersCreateNestedOneWithoutSalesInput
    items?: sales_itemsCreateNestedManyWithoutSaleInput
  }

  export type salesUncheckedCreateInput = {
    id?: string
    company_id: string
    user_id: string
    customer_id: string
    sale_date?: Date | string
    notes?: string | null
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    items?: sales_itemsUncheckedCreateNestedManyWithoutSaleInput
  }

  export type salesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutSalesNestedInput
    user?: usersUpdateOneRequiredWithoutSalesNestedInput
    customer?: customersUpdateOneRequiredWithoutSalesNestedInput
    items?: sales_itemsUpdateManyWithoutSaleNestedInput
  }

  export type salesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: sales_itemsUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type salesCreateManyInput = {
    id?: string
    company_id: string
    user_id: string
    customer_id: string
    sale_date?: Date | string
    notes?: string | null
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type salesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type salesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sales_itemsCreateInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    sale: salesCreateNestedOneWithoutItemsInput
    product: productsCreateNestedOneWithoutSales_itemsInput
  }

  export type sales_itemsUncheckedCreateInput = {
    id?: string
    sales_id: string
    product_id: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type sales_itemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale?: salesUpdateOneRequiredWithoutItemsNestedInput
    product?: productsUpdateOneRequiredWithoutSales_itemsNestedInput
  }

  export type sales_itemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sales_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type sales_itemsCreateManyInput = {
    id?: string
    sales_id: string
    product_id: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type sales_itemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type sales_itemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sales_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type purchasesCreateInput = {
    id?: string
    input_date?: Date | string
    invoice_number?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutPurchasesInput
    user: usersCreateNestedOneWithoutPurchasesInput
    supplier?: suppliersCreateNestedOneWithoutPurchasesInput
    items?: purchases_itemsCreateNestedManyWithoutPurchaseInput
  }

  export type purchasesUncheckedCreateInput = {
    id?: string
    company_id: string
    user_id: string
    supplier_id?: string | null
    input_date?: Date | string
    invoice_number?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    items?: purchases_itemsUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type purchasesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    input_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutPurchasesNestedInput
    user?: usersUpdateOneRequiredWithoutPurchasesNestedInput
    supplier?: suppliersUpdateOneWithoutPurchasesNestedInput
    items?: purchases_itemsUpdateManyWithoutPurchaseNestedInput
  }

  export type purchasesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    supplier_id?: NullableStringFieldUpdateOperationsInput | string | null
    input_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: purchases_itemsUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type purchasesCreateManyInput = {
    id?: string
    company_id: string
    user_id: string
    supplier_id?: string | null
    input_date?: Date | string
    invoice_number?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type purchasesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    input_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type purchasesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    supplier_id?: NullableStringFieldUpdateOperationsInput | string | null
    input_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type purchases_itemsCreateInput = {
    id?: string
    quantity: number
    cost: Decimal | DecimalJsLike | number | string
    purchase: purchasesCreateNestedOneWithoutItemsInput
    product: productsCreateNestedOneWithoutPurchase_itemsInput
  }

  export type purchases_itemsUncheckedCreateInput = {
    id?: string
    purchases_id: string
    product_id: string
    quantity: number
    cost: Decimal | DecimalJsLike | number | string
  }

  export type purchases_itemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase?: purchasesUpdateOneRequiredWithoutItemsNestedInput
    product?: productsUpdateOneRequiredWithoutPurchase_itemsNestedInput
  }

  export type purchases_itemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchases_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type purchases_itemsCreateManyInput = {
    id?: string
    purchases_id: string
    product_id: string
    quantity: number
    cost: Decimal | DecimalJsLike | number | string
  }

  export type purchases_itemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type purchases_itemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchases_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SubscriptionsListRelationFilter = {
    every?: subscriptionsWhereInput
    some?: subscriptionsWhereInput
    none?: subscriptionsWhereInput
  }

  export type SuppliersListRelationFilter = {
    every?: suppliersWhereInput
    some?: suppliersWhereInput
    none?: suppliersWhereInput
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type CustomersListRelationFilter = {
    every?: customersWhereInput
    some?: customersWhereInput
    none?: customersWhereInput
  }

  export type SalesListRelationFilter = {
    every?: salesWhereInput
    some?: salesWhereInput
    none?: salesWhereInput
  }

  export type PurchasesListRelationFilter = {
    every?: purchasesWhereInput
    some?: purchasesWhereInput
    none?: purchasesWhereInput
  }

  export type subscriptionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type suppliersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type salesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type purchasesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type companiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cnpj?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type companiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cnpj?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RolesScalarRelationFilter = {
    is?: rolesWhereInput
    isNot?: rolesWhereInput
  }

  export type CompaniesNullableScalarRelationFilter = {
    is?: companiesWhereInput | null
    isNot?: companiesWhereInput | null
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_id?: SortOrder
    company_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_id?: SortOrder
    company_id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_id?: SortOrder
    company_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CompaniesScalarRelationFilter = {
    is?: companiesWhereInput
    isNot?: companiesWhereInput
  }

  export type subscriptionsCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    plan_name?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type subscriptionsMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    plan_name?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type subscriptionsMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    plan_name?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type suppliersCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    contact_name?: SortOrder
    website?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type suppliersMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    contact_name?: SortOrder
    website?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type suppliersMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    contact_name?: SortOrder
    website?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type SuppliersNullableScalarRelationFilter = {
    is?: suppliersWhereInput | null
    isNot?: suppliersWhereInput | null
  }

  export type Sales_itemsListRelationFilter = {
    every?: sales_itemsWhereInput
    some?: sales_itemsWhereInput
    none?: sales_itemsWhereInput
  }

  export type Purchases_itemsListRelationFilter = {
    every?: purchases_itemsWhereInput
    some?: purchases_itemsWhereInput
    none?: purchases_itemsWhereInput
  }

  export type sales_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type purchases_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    supplier_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    supplier_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    supplier_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type customersCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    document?: SortOrder
    address?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    document?: SortOrder
    address?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    document?: SortOrder
    address?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type CustomersScalarRelationFilter = {
    is?: customersWhereInput
    isNot?: customersWhereInput
  }

  export type salesCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
    sale_date?: SortOrder
    notes?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type salesMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
    sale_date?: SortOrder
    notes?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type salesMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
    sale_date?: SortOrder
    notes?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SalesScalarRelationFilter = {
    is?: salesWhereInput
    isNot?: salesWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type sales_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    sales_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type sales_itemsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type sales_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    sales_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type sales_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    sales_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type sales_itemsSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type purchasesCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    user_id?: SortOrder
    supplier_id?: SortOrder
    input_date?: SortOrder
    invoice_number?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type purchasesMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    user_id?: SortOrder
    supplier_id?: SortOrder
    input_date?: SortOrder
    invoice_number?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type purchasesMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    user_id?: SortOrder
    supplier_id?: SortOrder
    input_date?: SortOrder
    invoice_number?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PurchasesScalarRelationFilter = {
    is?: purchasesWhereInput
    isNot?: purchasesWhereInput
  }

  export type purchases_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    purchases_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
  }

  export type purchases_itemsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    cost?: SortOrder
  }

  export type purchases_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    purchases_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
  }

  export type purchases_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    purchases_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
  }

  export type purchases_itemsSumOrderByAggregateInput = {
    quantity?: SortOrder
    cost?: SortOrder
  }

  export type usersCreateNestedManyWithoutRoleInput = {
    create?: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput> | usersCreateWithoutRoleInput[] | usersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRoleInput | usersCreateOrConnectWithoutRoleInput[]
    createMany?: usersCreateManyRoleInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput> | usersCreateWithoutRoleInput[] | usersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRoleInput | usersCreateOrConnectWithoutRoleInput[]
    createMany?: usersCreateManyRoleInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateManyWithoutRoleNestedInput = {
    create?: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput> | usersCreateWithoutRoleInput[] | usersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRoleInput | usersCreateOrConnectWithoutRoleInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRoleInput | usersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: usersCreateManyRoleInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRoleInput | usersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRoleInput | usersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput> | usersCreateWithoutRoleInput[] | usersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRoleInput | usersCreateOrConnectWithoutRoleInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRoleInput | usersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: usersCreateManyRoleInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRoleInput | usersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRoleInput | usersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersCreateNestedManyWithoutCompanyInput = {
    create?: XOR<usersCreateWithoutCompanyInput, usersUncheckedCreateWithoutCompanyInput> | usersCreateWithoutCompanyInput[] | usersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: usersCreateOrConnectWithoutCompanyInput | usersCreateOrConnectWithoutCompanyInput[]
    createMany?: usersCreateManyCompanyInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type subscriptionsCreateNestedManyWithoutCompanyInput = {
    create?: XOR<subscriptionsCreateWithoutCompanyInput, subscriptionsUncheckedCreateWithoutCompanyInput> | subscriptionsCreateWithoutCompanyInput[] | subscriptionsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: subscriptionsCreateOrConnectWithoutCompanyInput | subscriptionsCreateOrConnectWithoutCompanyInput[]
    createMany?: subscriptionsCreateManyCompanyInputEnvelope
    connect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
  }

  export type suppliersCreateNestedManyWithoutCompanyInput = {
    create?: XOR<suppliersCreateWithoutCompanyInput, suppliersUncheckedCreateWithoutCompanyInput> | suppliersCreateWithoutCompanyInput[] | suppliersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: suppliersCreateOrConnectWithoutCompanyInput | suppliersCreateOrConnectWithoutCompanyInput[]
    createMany?: suppliersCreateManyCompanyInputEnvelope
    connect?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
  }

  export type productsCreateNestedManyWithoutCompanyInput = {
    create?: XOR<productsCreateWithoutCompanyInput, productsUncheckedCreateWithoutCompanyInput> | productsCreateWithoutCompanyInput[] | productsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCompanyInput | productsCreateOrConnectWithoutCompanyInput[]
    createMany?: productsCreateManyCompanyInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type customersCreateNestedManyWithoutCompanyInput = {
    create?: XOR<customersCreateWithoutCompanyInput, customersUncheckedCreateWithoutCompanyInput> | customersCreateWithoutCompanyInput[] | customersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: customersCreateOrConnectWithoutCompanyInput | customersCreateOrConnectWithoutCompanyInput[]
    createMany?: customersCreateManyCompanyInputEnvelope
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
  }

  export type salesCreateNestedManyWithoutCompanyInput = {
    create?: XOR<salesCreateWithoutCompanyInput, salesUncheckedCreateWithoutCompanyInput> | salesCreateWithoutCompanyInput[] | salesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: salesCreateOrConnectWithoutCompanyInput | salesCreateOrConnectWithoutCompanyInput[]
    createMany?: salesCreateManyCompanyInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type purchasesCreateNestedManyWithoutCompanyInput = {
    create?: XOR<purchasesCreateWithoutCompanyInput, purchasesUncheckedCreateWithoutCompanyInput> | purchasesCreateWithoutCompanyInput[] | purchasesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutCompanyInput | purchasesCreateOrConnectWithoutCompanyInput[]
    createMany?: purchasesCreateManyCompanyInputEnvelope
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<usersCreateWithoutCompanyInput, usersUncheckedCreateWithoutCompanyInput> | usersCreateWithoutCompanyInput[] | usersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: usersCreateOrConnectWithoutCompanyInput | usersCreateOrConnectWithoutCompanyInput[]
    createMany?: usersCreateManyCompanyInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type subscriptionsUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<subscriptionsCreateWithoutCompanyInput, subscriptionsUncheckedCreateWithoutCompanyInput> | subscriptionsCreateWithoutCompanyInput[] | subscriptionsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: subscriptionsCreateOrConnectWithoutCompanyInput | subscriptionsCreateOrConnectWithoutCompanyInput[]
    createMany?: subscriptionsCreateManyCompanyInputEnvelope
    connect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
  }

  export type suppliersUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<suppliersCreateWithoutCompanyInput, suppliersUncheckedCreateWithoutCompanyInput> | suppliersCreateWithoutCompanyInput[] | suppliersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: suppliersCreateOrConnectWithoutCompanyInput | suppliersCreateOrConnectWithoutCompanyInput[]
    createMany?: suppliersCreateManyCompanyInputEnvelope
    connect?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<productsCreateWithoutCompanyInput, productsUncheckedCreateWithoutCompanyInput> | productsCreateWithoutCompanyInput[] | productsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCompanyInput | productsCreateOrConnectWithoutCompanyInput[]
    createMany?: productsCreateManyCompanyInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type customersUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<customersCreateWithoutCompanyInput, customersUncheckedCreateWithoutCompanyInput> | customersCreateWithoutCompanyInput[] | customersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: customersCreateOrConnectWithoutCompanyInput | customersCreateOrConnectWithoutCompanyInput[]
    createMany?: customersCreateManyCompanyInputEnvelope
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
  }

  export type salesUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<salesCreateWithoutCompanyInput, salesUncheckedCreateWithoutCompanyInput> | salesCreateWithoutCompanyInput[] | salesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: salesCreateOrConnectWithoutCompanyInput | salesCreateOrConnectWithoutCompanyInput[]
    createMany?: salesCreateManyCompanyInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type purchasesUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<purchasesCreateWithoutCompanyInput, purchasesUncheckedCreateWithoutCompanyInput> | purchasesCreateWithoutCompanyInput[] | purchasesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutCompanyInput | purchasesCreateOrConnectWithoutCompanyInput[]
    createMany?: purchasesCreateManyCompanyInputEnvelope
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<usersCreateWithoutCompanyInput, usersUncheckedCreateWithoutCompanyInput> | usersCreateWithoutCompanyInput[] | usersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: usersCreateOrConnectWithoutCompanyInput | usersCreateOrConnectWithoutCompanyInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutCompanyInput | usersUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: usersCreateManyCompanyInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutCompanyInput | usersUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: usersUpdateManyWithWhereWithoutCompanyInput | usersUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type subscriptionsUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<subscriptionsCreateWithoutCompanyInput, subscriptionsUncheckedCreateWithoutCompanyInput> | subscriptionsCreateWithoutCompanyInput[] | subscriptionsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: subscriptionsCreateOrConnectWithoutCompanyInput | subscriptionsCreateOrConnectWithoutCompanyInput[]
    upsert?: subscriptionsUpsertWithWhereUniqueWithoutCompanyInput | subscriptionsUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: subscriptionsCreateManyCompanyInputEnvelope
    set?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    disconnect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    delete?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    connect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    update?: subscriptionsUpdateWithWhereUniqueWithoutCompanyInput | subscriptionsUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: subscriptionsUpdateManyWithWhereWithoutCompanyInput | subscriptionsUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: subscriptionsScalarWhereInput | subscriptionsScalarWhereInput[]
  }

  export type suppliersUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<suppliersCreateWithoutCompanyInput, suppliersUncheckedCreateWithoutCompanyInput> | suppliersCreateWithoutCompanyInput[] | suppliersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: suppliersCreateOrConnectWithoutCompanyInput | suppliersCreateOrConnectWithoutCompanyInput[]
    upsert?: suppliersUpsertWithWhereUniqueWithoutCompanyInput | suppliersUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: suppliersCreateManyCompanyInputEnvelope
    set?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
    disconnect?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
    delete?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
    connect?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
    update?: suppliersUpdateWithWhereUniqueWithoutCompanyInput | suppliersUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: suppliersUpdateManyWithWhereWithoutCompanyInput | suppliersUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: suppliersScalarWhereInput | suppliersScalarWhereInput[]
  }

  export type productsUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<productsCreateWithoutCompanyInput, productsUncheckedCreateWithoutCompanyInput> | productsCreateWithoutCompanyInput[] | productsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCompanyInput | productsCreateOrConnectWithoutCompanyInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCompanyInput | productsUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: productsCreateManyCompanyInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCompanyInput | productsUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCompanyInput | productsUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type customersUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<customersCreateWithoutCompanyInput, customersUncheckedCreateWithoutCompanyInput> | customersCreateWithoutCompanyInput[] | customersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: customersCreateOrConnectWithoutCompanyInput | customersCreateOrConnectWithoutCompanyInput[]
    upsert?: customersUpsertWithWhereUniqueWithoutCompanyInput | customersUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: customersCreateManyCompanyInputEnvelope
    set?: customersWhereUniqueInput | customersWhereUniqueInput[]
    disconnect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    delete?: customersWhereUniqueInput | customersWhereUniqueInput[]
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    update?: customersUpdateWithWhereUniqueWithoutCompanyInput | customersUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: customersUpdateManyWithWhereWithoutCompanyInput | customersUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: customersScalarWhereInput | customersScalarWhereInput[]
  }

  export type salesUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<salesCreateWithoutCompanyInput, salesUncheckedCreateWithoutCompanyInput> | salesCreateWithoutCompanyInput[] | salesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: salesCreateOrConnectWithoutCompanyInput | salesCreateOrConnectWithoutCompanyInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutCompanyInput | salesUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: salesCreateManyCompanyInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutCompanyInput | salesUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: salesUpdateManyWithWhereWithoutCompanyInput | salesUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type purchasesUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<purchasesCreateWithoutCompanyInput, purchasesUncheckedCreateWithoutCompanyInput> | purchasesCreateWithoutCompanyInput[] | purchasesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutCompanyInput | purchasesCreateOrConnectWithoutCompanyInput[]
    upsert?: purchasesUpsertWithWhereUniqueWithoutCompanyInput | purchasesUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: purchasesCreateManyCompanyInputEnvelope
    set?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    disconnect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    delete?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    update?: purchasesUpdateWithWhereUniqueWithoutCompanyInput | purchasesUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: purchasesUpdateManyWithWhereWithoutCompanyInput | purchasesUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: purchasesScalarWhereInput | purchasesScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<usersCreateWithoutCompanyInput, usersUncheckedCreateWithoutCompanyInput> | usersCreateWithoutCompanyInput[] | usersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: usersCreateOrConnectWithoutCompanyInput | usersCreateOrConnectWithoutCompanyInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutCompanyInput | usersUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: usersCreateManyCompanyInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutCompanyInput | usersUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: usersUpdateManyWithWhereWithoutCompanyInput | usersUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type subscriptionsUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<subscriptionsCreateWithoutCompanyInput, subscriptionsUncheckedCreateWithoutCompanyInput> | subscriptionsCreateWithoutCompanyInput[] | subscriptionsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: subscriptionsCreateOrConnectWithoutCompanyInput | subscriptionsCreateOrConnectWithoutCompanyInput[]
    upsert?: subscriptionsUpsertWithWhereUniqueWithoutCompanyInput | subscriptionsUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: subscriptionsCreateManyCompanyInputEnvelope
    set?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    disconnect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    delete?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    connect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    update?: subscriptionsUpdateWithWhereUniqueWithoutCompanyInput | subscriptionsUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: subscriptionsUpdateManyWithWhereWithoutCompanyInput | subscriptionsUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: subscriptionsScalarWhereInput | subscriptionsScalarWhereInput[]
  }

  export type suppliersUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<suppliersCreateWithoutCompanyInput, suppliersUncheckedCreateWithoutCompanyInput> | suppliersCreateWithoutCompanyInput[] | suppliersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: suppliersCreateOrConnectWithoutCompanyInput | suppliersCreateOrConnectWithoutCompanyInput[]
    upsert?: suppliersUpsertWithWhereUniqueWithoutCompanyInput | suppliersUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: suppliersCreateManyCompanyInputEnvelope
    set?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
    disconnect?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
    delete?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
    connect?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
    update?: suppliersUpdateWithWhereUniqueWithoutCompanyInput | suppliersUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: suppliersUpdateManyWithWhereWithoutCompanyInput | suppliersUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: suppliersScalarWhereInput | suppliersScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<productsCreateWithoutCompanyInput, productsUncheckedCreateWithoutCompanyInput> | productsCreateWithoutCompanyInput[] | productsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCompanyInput | productsCreateOrConnectWithoutCompanyInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCompanyInput | productsUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: productsCreateManyCompanyInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCompanyInput | productsUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCompanyInput | productsUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type customersUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<customersCreateWithoutCompanyInput, customersUncheckedCreateWithoutCompanyInput> | customersCreateWithoutCompanyInput[] | customersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: customersCreateOrConnectWithoutCompanyInput | customersCreateOrConnectWithoutCompanyInput[]
    upsert?: customersUpsertWithWhereUniqueWithoutCompanyInput | customersUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: customersCreateManyCompanyInputEnvelope
    set?: customersWhereUniqueInput | customersWhereUniqueInput[]
    disconnect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    delete?: customersWhereUniqueInput | customersWhereUniqueInput[]
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    update?: customersUpdateWithWhereUniqueWithoutCompanyInput | customersUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: customersUpdateManyWithWhereWithoutCompanyInput | customersUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: customersScalarWhereInput | customersScalarWhereInput[]
  }

  export type salesUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<salesCreateWithoutCompanyInput, salesUncheckedCreateWithoutCompanyInput> | salesCreateWithoutCompanyInput[] | salesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: salesCreateOrConnectWithoutCompanyInput | salesCreateOrConnectWithoutCompanyInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutCompanyInput | salesUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: salesCreateManyCompanyInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutCompanyInput | salesUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: salesUpdateManyWithWhereWithoutCompanyInput | salesUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type purchasesUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<purchasesCreateWithoutCompanyInput, purchasesUncheckedCreateWithoutCompanyInput> | purchasesCreateWithoutCompanyInput[] | purchasesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutCompanyInput | purchasesCreateOrConnectWithoutCompanyInput[]
    upsert?: purchasesUpsertWithWhereUniqueWithoutCompanyInput | purchasesUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: purchasesCreateManyCompanyInputEnvelope
    set?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    disconnect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    delete?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    update?: purchasesUpdateWithWhereUniqueWithoutCompanyInput | purchasesUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: purchasesUpdateManyWithWhereWithoutCompanyInput | purchasesUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: purchasesScalarWhereInput | purchasesScalarWhereInput[]
  }

  export type rolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    connect?: rolesWhereUniqueInput
  }

  export type companiesCreateNestedOneWithoutUsersInput = {
    create?: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: companiesCreateOrConnectWithoutUsersInput
    connect?: companiesWhereUniqueInput
  }

  export type salesCreateNestedManyWithoutUserInput = {
    create?: XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput> | salesCreateWithoutUserInput[] | salesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: salesCreateOrConnectWithoutUserInput | salesCreateOrConnectWithoutUserInput[]
    createMany?: salesCreateManyUserInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type purchasesCreateNestedManyWithoutUserInput = {
    create?: XOR<purchasesCreateWithoutUserInput, purchasesUncheckedCreateWithoutUserInput> | purchasesCreateWithoutUserInput[] | purchasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutUserInput | purchasesCreateOrConnectWithoutUserInput[]
    createMany?: purchasesCreateManyUserInputEnvelope
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
  }

  export type salesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput> | salesCreateWithoutUserInput[] | salesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: salesCreateOrConnectWithoutUserInput | salesCreateOrConnectWithoutUserInput[]
    createMany?: salesCreateManyUserInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type purchasesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<purchasesCreateWithoutUserInput, purchasesUncheckedCreateWithoutUserInput> | purchasesCreateWithoutUserInput[] | purchasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutUserInput | purchasesCreateOrConnectWithoutUserInput[]
    createMany?: purchasesCreateManyUserInputEnvelope
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
  }

  export type rolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    upsert?: rolesUpsertWithoutUsersInput
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUsersInput, rolesUpdateWithoutUsersInput>, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type companiesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: companiesCreateOrConnectWithoutUsersInput
    upsert?: companiesUpsertWithoutUsersInput
    disconnect?: companiesWhereInput | boolean
    delete?: companiesWhereInput | boolean
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutUsersInput, companiesUpdateWithoutUsersInput>, companiesUncheckedUpdateWithoutUsersInput>
  }

  export type salesUpdateManyWithoutUserNestedInput = {
    create?: XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput> | salesCreateWithoutUserInput[] | salesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: salesCreateOrConnectWithoutUserInput | salesCreateOrConnectWithoutUserInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutUserInput | salesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: salesCreateManyUserInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutUserInput | salesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: salesUpdateManyWithWhereWithoutUserInput | salesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type purchasesUpdateManyWithoutUserNestedInput = {
    create?: XOR<purchasesCreateWithoutUserInput, purchasesUncheckedCreateWithoutUserInput> | purchasesCreateWithoutUserInput[] | purchasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutUserInput | purchasesCreateOrConnectWithoutUserInput[]
    upsert?: purchasesUpsertWithWhereUniqueWithoutUserInput | purchasesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: purchasesCreateManyUserInputEnvelope
    set?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    disconnect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    delete?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    update?: purchasesUpdateWithWhereUniqueWithoutUserInput | purchasesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: purchasesUpdateManyWithWhereWithoutUserInput | purchasesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: purchasesScalarWhereInput | purchasesScalarWhereInput[]
  }

  export type salesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput> | salesCreateWithoutUserInput[] | salesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: salesCreateOrConnectWithoutUserInput | salesCreateOrConnectWithoutUserInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutUserInput | salesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: salesCreateManyUserInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutUserInput | salesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: salesUpdateManyWithWhereWithoutUserInput | salesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type purchasesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<purchasesCreateWithoutUserInput, purchasesUncheckedCreateWithoutUserInput> | purchasesCreateWithoutUserInput[] | purchasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutUserInput | purchasesCreateOrConnectWithoutUserInput[]
    upsert?: purchasesUpsertWithWhereUniqueWithoutUserInput | purchasesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: purchasesCreateManyUserInputEnvelope
    set?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    disconnect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    delete?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    update?: purchasesUpdateWithWhereUniqueWithoutUserInput | purchasesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: purchasesUpdateManyWithWhereWithoutUserInput | purchasesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: purchasesScalarWhereInput | purchasesScalarWhereInput[]
  }

  export type companiesCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<companiesCreateWithoutSubscriptionsInput, companiesUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: companiesCreateOrConnectWithoutSubscriptionsInput
    connect?: companiesWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type companiesUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<companiesCreateWithoutSubscriptionsInput, companiesUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: companiesCreateOrConnectWithoutSubscriptionsInput
    upsert?: companiesUpsertWithoutSubscriptionsInput
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutSubscriptionsInput, companiesUpdateWithoutSubscriptionsInput>, companiesUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type companiesCreateNestedOneWithoutSuppliersInput = {
    create?: XOR<companiesCreateWithoutSuppliersInput, companiesUncheckedCreateWithoutSuppliersInput>
    connectOrCreate?: companiesCreateOrConnectWithoutSuppliersInput
    connect?: companiesWhereUniqueInput
  }

  export type productsCreateNestedManyWithoutSupplierInput = {
    create?: XOR<productsCreateWithoutSupplierInput, productsUncheckedCreateWithoutSupplierInput> | productsCreateWithoutSupplierInput[] | productsUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: productsCreateOrConnectWithoutSupplierInput | productsCreateOrConnectWithoutSupplierInput[]
    createMany?: productsCreateManySupplierInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type purchasesCreateNestedManyWithoutSupplierInput = {
    create?: XOR<purchasesCreateWithoutSupplierInput, purchasesUncheckedCreateWithoutSupplierInput> | purchasesCreateWithoutSupplierInput[] | purchasesUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutSupplierInput | purchasesCreateOrConnectWithoutSupplierInput[]
    createMany?: purchasesCreateManySupplierInputEnvelope
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<productsCreateWithoutSupplierInput, productsUncheckedCreateWithoutSupplierInput> | productsCreateWithoutSupplierInput[] | productsUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: productsCreateOrConnectWithoutSupplierInput | productsCreateOrConnectWithoutSupplierInput[]
    createMany?: productsCreateManySupplierInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type purchasesUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<purchasesCreateWithoutSupplierInput, purchasesUncheckedCreateWithoutSupplierInput> | purchasesCreateWithoutSupplierInput[] | purchasesUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutSupplierInput | purchasesCreateOrConnectWithoutSupplierInput[]
    createMany?: purchasesCreateManySupplierInputEnvelope
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
  }

  export type companiesUpdateOneRequiredWithoutSuppliersNestedInput = {
    create?: XOR<companiesCreateWithoutSuppliersInput, companiesUncheckedCreateWithoutSuppliersInput>
    connectOrCreate?: companiesCreateOrConnectWithoutSuppliersInput
    upsert?: companiesUpsertWithoutSuppliersInput
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutSuppliersInput, companiesUpdateWithoutSuppliersInput>, companiesUncheckedUpdateWithoutSuppliersInput>
  }

  export type productsUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<productsCreateWithoutSupplierInput, productsUncheckedCreateWithoutSupplierInput> | productsCreateWithoutSupplierInput[] | productsUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: productsCreateOrConnectWithoutSupplierInput | productsCreateOrConnectWithoutSupplierInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutSupplierInput | productsUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: productsCreateManySupplierInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutSupplierInput | productsUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: productsUpdateManyWithWhereWithoutSupplierInput | productsUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type purchasesUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<purchasesCreateWithoutSupplierInput, purchasesUncheckedCreateWithoutSupplierInput> | purchasesCreateWithoutSupplierInput[] | purchasesUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutSupplierInput | purchasesCreateOrConnectWithoutSupplierInput[]
    upsert?: purchasesUpsertWithWhereUniqueWithoutSupplierInput | purchasesUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: purchasesCreateManySupplierInputEnvelope
    set?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    disconnect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    delete?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    update?: purchasesUpdateWithWhereUniqueWithoutSupplierInput | purchasesUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: purchasesUpdateManyWithWhereWithoutSupplierInput | purchasesUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: purchasesScalarWhereInput | purchasesScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<productsCreateWithoutSupplierInput, productsUncheckedCreateWithoutSupplierInput> | productsCreateWithoutSupplierInput[] | productsUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: productsCreateOrConnectWithoutSupplierInput | productsCreateOrConnectWithoutSupplierInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutSupplierInput | productsUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: productsCreateManySupplierInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutSupplierInput | productsUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: productsUpdateManyWithWhereWithoutSupplierInput | productsUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type purchasesUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<purchasesCreateWithoutSupplierInput, purchasesUncheckedCreateWithoutSupplierInput> | purchasesCreateWithoutSupplierInput[] | purchasesUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutSupplierInput | purchasesCreateOrConnectWithoutSupplierInput[]
    upsert?: purchasesUpsertWithWhereUniqueWithoutSupplierInput | purchasesUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: purchasesCreateManySupplierInputEnvelope
    set?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    disconnect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    delete?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    update?: purchasesUpdateWithWhereUniqueWithoutSupplierInput | purchasesUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: purchasesUpdateManyWithWhereWithoutSupplierInput | purchasesUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: purchasesScalarWhereInput | purchasesScalarWhereInput[]
  }

  export type companiesCreateNestedOneWithoutProductsInput = {
    create?: XOR<companiesCreateWithoutProductsInput, companiesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: companiesCreateOrConnectWithoutProductsInput
    connect?: companiesWhereUniqueInput
  }

  export type suppliersCreateNestedOneWithoutProductsInput = {
    create?: XOR<suppliersCreateWithoutProductsInput, suppliersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: suppliersCreateOrConnectWithoutProductsInput
    connect?: suppliersWhereUniqueInput
  }

  export type sales_itemsCreateNestedManyWithoutProductInput = {
    create?: XOR<sales_itemsCreateWithoutProductInput, sales_itemsUncheckedCreateWithoutProductInput> | sales_itemsCreateWithoutProductInput[] | sales_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutProductInput | sales_itemsCreateOrConnectWithoutProductInput[]
    createMany?: sales_itemsCreateManyProductInputEnvelope
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
  }

  export type purchases_itemsCreateNestedManyWithoutProductInput = {
    create?: XOR<purchases_itemsCreateWithoutProductInput, purchases_itemsUncheckedCreateWithoutProductInput> | purchases_itemsCreateWithoutProductInput[] | purchases_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: purchases_itemsCreateOrConnectWithoutProductInput | purchases_itemsCreateOrConnectWithoutProductInput[]
    createMany?: purchases_itemsCreateManyProductInputEnvelope
    connect?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
  }

  export type sales_itemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<sales_itemsCreateWithoutProductInput, sales_itemsUncheckedCreateWithoutProductInput> | sales_itemsCreateWithoutProductInput[] | sales_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutProductInput | sales_itemsCreateOrConnectWithoutProductInput[]
    createMany?: sales_itemsCreateManyProductInputEnvelope
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
  }

  export type purchases_itemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<purchases_itemsCreateWithoutProductInput, purchases_itemsUncheckedCreateWithoutProductInput> | purchases_itemsCreateWithoutProductInput[] | purchases_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: purchases_itemsCreateOrConnectWithoutProductInput | purchases_itemsCreateOrConnectWithoutProductInput[]
    createMany?: purchases_itemsCreateManyProductInputEnvelope
    connect?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type companiesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<companiesCreateWithoutProductsInput, companiesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: companiesCreateOrConnectWithoutProductsInput
    upsert?: companiesUpsertWithoutProductsInput
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutProductsInput, companiesUpdateWithoutProductsInput>, companiesUncheckedUpdateWithoutProductsInput>
  }

  export type suppliersUpdateOneWithoutProductsNestedInput = {
    create?: XOR<suppliersCreateWithoutProductsInput, suppliersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: suppliersCreateOrConnectWithoutProductsInput
    upsert?: suppliersUpsertWithoutProductsInput
    disconnect?: suppliersWhereInput | boolean
    delete?: suppliersWhereInput | boolean
    connect?: suppliersWhereUniqueInput
    update?: XOR<XOR<suppliersUpdateToOneWithWhereWithoutProductsInput, suppliersUpdateWithoutProductsInput>, suppliersUncheckedUpdateWithoutProductsInput>
  }

  export type sales_itemsUpdateManyWithoutProductNestedInput = {
    create?: XOR<sales_itemsCreateWithoutProductInput, sales_itemsUncheckedCreateWithoutProductInput> | sales_itemsCreateWithoutProductInput[] | sales_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutProductInput | sales_itemsCreateOrConnectWithoutProductInput[]
    upsert?: sales_itemsUpsertWithWhereUniqueWithoutProductInput | sales_itemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: sales_itemsCreateManyProductInputEnvelope
    set?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    disconnect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    delete?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    update?: sales_itemsUpdateWithWhereUniqueWithoutProductInput | sales_itemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: sales_itemsUpdateManyWithWhereWithoutProductInput | sales_itemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: sales_itemsScalarWhereInput | sales_itemsScalarWhereInput[]
  }

  export type purchases_itemsUpdateManyWithoutProductNestedInput = {
    create?: XOR<purchases_itemsCreateWithoutProductInput, purchases_itemsUncheckedCreateWithoutProductInput> | purchases_itemsCreateWithoutProductInput[] | purchases_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: purchases_itemsCreateOrConnectWithoutProductInput | purchases_itemsCreateOrConnectWithoutProductInput[]
    upsert?: purchases_itemsUpsertWithWhereUniqueWithoutProductInput | purchases_itemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: purchases_itemsCreateManyProductInputEnvelope
    set?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
    disconnect?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
    delete?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
    connect?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
    update?: purchases_itemsUpdateWithWhereUniqueWithoutProductInput | purchases_itemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: purchases_itemsUpdateManyWithWhereWithoutProductInput | purchases_itemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: purchases_itemsScalarWhereInput | purchases_itemsScalarWhereInput[]
  }

  export type sales_itemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<sales_itemsCreateWithoutProductInput, sales_itemsUncheckedCreateWithoutProductInput> | sales_itemsCreateWithoutProductInput[] | sales_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutProductInput | sales_itemsCreateOrConnectWithoutProductInput[]
    upsert?: sales_itemsUpsertWithWhereUniqueWithoutProductInput | sales_itemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: sales_itemsCreateManyProductInputEnvelope
    set?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    disconnect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    delete?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    update?: sales_itemsUpdateWithWhereUniqueWithoutProductInput | sales_itemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: sales_itemsUpdateManyWithWhereWithoutProductInput | sales_itemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: sales_itemsScalarWhereInput | sales_itemsScalarWhereInput[]
  }

  export type purchases_itemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<purchases_itemsCreateWithoutProductInput, purchases_itemsUncheckedCreateWithoutProductInput> | purchases_itemsCreateWithoutProductInput[] | purchases_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: purchases_itemsCreateOrConnectWithoutProductInput | purchases_itemsCreateOrConnectWithoutProductInput[]
    upsert?: purchases_itemsUpsertWithWhereUniqueWithoutProductInput | purchases_itemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: purchases_itemsCreateManyProductInputEnvelope
    set?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
    disconnect?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
    delete?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
    connect?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
    update?: purchases_itemsUpdateWithWhereUniqueWithoutProductInput | purchases_itemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: purchases_itemsUpdateManyWithWhereWithoutProductInput | purchases_itemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: purchases_itemsScalarWhereInput | purchases_itemsScalarWhereInput[]
  }

  export type companiesCreateNestedOneWithoutCustomersInput = {
    create?: XOR<companiesCreateWithoutCustomersInput, companiesUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: companiesCreateOrConnectWithoutCustomersInput
    connect?: companiesWhereUniqueInput
  }

  export type salesCreateNestedManyWithoutCustomerInput = {
    create?: XOR<salesCreateWithoutCustomerInput, salesUncheckedCreateWithoutCustomerInput> | salesCreateWithoutCustomerInput[] | salesUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: salesCreateOrConnectWithoutCustomerInput | salesCreateOrConnectWithoutCustomerInput[]
    createMany?: salesCreateManyCustomerInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type salesUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<salesCreateWithoutCustomerInput, salesUncheckedCreateWithoutCustomerInput> | salesCreateWithoutCustomerInput[] | salesUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: salesCreateOrConnectWithoutCustomerInput | salesCreateOrConnectWithoutCustomerInput[]
    createMany?: salesCreateManyCustomerInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type companiesUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<companiesCreateWithoutCustomersInput, companiesUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: companiesCreateOrConnectWithoutCustomersInput
    upsert?: companiesUpsertWithoutCustomersInput
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutCustomersInput, companiesUpdateWithoutCustomersInput>, companiesUncheckedUpdateWithoutCustomersInput>
  }

  export type salesUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<salesCreateWithoutCustomerInput, salesUncheckedCreateWithoutCustomerInput> | salesCreateWithoutCustomerInput[] | salesUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: salesCreateOrConnectWithoutCustomerInput | salesCreateOrConnectWithoutCustomerInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutCustomerInput | salesUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: salesCreateManyCustomerInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutCustomerInput | salesUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: salesUpdateManyWithWhereWithoutCustomerInput | salesUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type salesUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<salesCreateWithoutCustomerInput, salesUncheckedCreateWithoutCustomerInput> | salesCreateWithoutCustomerInput[] | salesUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: salesCreateOrConnectWithoutCustomerInput | salesCreateOrConnectWithoutCustomerInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutCustomerInput | salesUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: salesCreateManyCustomerInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutCustomerInput | salesUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: salesUpdateManyWithWhereWithoutCustomerInput | salesUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type companiesCreateNestedOneWithoutSalesInput = {
    create?: XOR<companiesCreateWithoutSalesInput, companiesUncheckedCreateWithoutSalesInput>
    connectOrCreate?: companiesCreateOrConnectWithoutSalesInput
    connect?: companiesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutSalesInput = {
    create?: XOR<usersCreateWithoutSalesInput, usersUncheckedCreateWithoutSalesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSalesInput
    connect?: usersWhereUniqueInput
  }

  export type customersCreateNestedOneWithoutSalesInput = {
    create?: XOR<customersCreateWithoutSalesInput, customersUncheckedCreateWithoutSalesInput>
    connectOrCreate?: customersCreateOrConnectWithoutSalesInput
    connect?: customersWhereUniqueInput
  }

  export type sales_itemsCreateNestedManyWithoutSaleInput = {
    create?: XOR<sales_itemsCreateWithoutSaleInput, sales_itemsUncheckedCreateWithoutSaleInput> | sales_itemsCreateWithoutSaleInput[] | sales_itemsUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutSaleInput | sales_itemsCreateOrConnectWithoutSaleInput[]
    createMany?: sales_itemsCreateManySaleInputEnvelope
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
  }

  export type sales_itemsUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<sales_itemsCreateWithoutSaleInput, sales_itemsUncheckedCreateWithoutSaleInput> | sales_itemsCreateWithoutSaleInput[] | sales_itemsUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutSaleInput | sales_itemsCreateOrConnectWithoutSaleInput[]
    createMany?: sales_itemsCreateManySaleInputEnvelope
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
  }

  export type companiesUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<companiesCreateWithoutSalesInput, companiesUncheckedCreateWithoutSalesInput>
    connectOrCreate?: companiesCreateOrConnectWithoutSalesInput
    upsert?: companiesUpsertWithoutSalesInput
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutSalesInput, companiesUpdateWithoutSalesInput>, companiesUncheckedUpdateWithoutSalesInput>
  }

  export type usersUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<usersCreateWithoutSalesInput, usersUncheckedCreateWithoutSalesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSalesInput
    upsert?: usersUpsertWithoutSalesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSalesInput, usersUpdateWithoutSalesInput>, usersUncheckedUpdateWithoutSalesInput>
  }

  export type customersUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<customersCreateWithoutSalesInput, customersUncheckedCreateWithoutSalesInput>
    connectOrCreate?: customersCreateOrConnectWithoutSalesInput
    upsert?: customersUpsertWithoutSalesInput
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutSalesInput, customersUpdateWithoutSalesInput>, customersUncheckedUpdateWithoutSalesInput>
  }

  export type sales_itemsUpdateManyWithoutSaleNestedInput = {
    create?: XOR<sales_itemsCreateWithoutSaleInput, sales_itemsUncheckedCreateWithoutSaleInput> | sales_itemsCreateWithoutSaleInput[] | sales_itemsUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutSaleInput | sales_itemsCreateOrConnectWithoutSaleInput[]
    upsert?: sales_itemsUpsertWithWhereUniqueWithoutSaleInput | sales_itemsUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: sales_itemsCreateManySaleInputEnvelope
    set?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    disconnect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    delete?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    update?: sales_itemsUpdateWithWhereUniqueWithoutSaleInput | sales_itemsUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: sales_itemsUpdateManyWithWhereWithoutSaleInput | sales_itemsUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: sales_itemsScalarWhereInput | sales_itemsScalarWhereInput[]
  }

  export type sales_itemsUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<sales_itemsCreateWithoutSaleInput, sales_itemsUncheckedCreateWithoutSaleInput> | sales_itemsCreateWithoutSaleInput[] | sales_itemsUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutSaleInput | sales_itemsCreateOrConnectWithoutSaleInput[]
    upsert?: sales_itemsUpsertWithWhereUniqueWithoutSaleInput | sales_itemsUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: sales_itemsCreateManySaleInputEnvelope
    set?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    disconnect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    delete?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    update?: sales_itemsUpdateWithWhereUniqueWithoutSaleInput | sales_itemsUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: sales_itemsUpdateManyWithWhereWithoutSaleInput | sales_itemsUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: sales_itemsScalarWhereInput | sales_itemsScalarWhereInput[]
  }

  export type salesCreateNestedOneWithoutItemsInput = {
    create?: XOR<salesCreateWithoutItemsInput, salesUncheckedCreateWithoutItemsInput>
    connectOrCreate?: salesCreateOrConnectWithoutItemsInput
    connect?: salesWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutSales_itemsInput = {
    create?: XOR<productsCreateWithoutSales_itemsInput, productsUncheckedCreateWithoutSales_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutSales_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type salesUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<salesCreateWithoutItemsInput, salesUncheckedCreateWithoutItemsInput>
    connectOrCreate?: salesCreateOrConnectWithoutItemsInput
    upsert?: salesUpsertWithoutItemsInput
    connect?: salesWhereUniqueInput
    update?: XOR<XOR<salesUpdateToOneWithWhereWithoutItemsInput, salesUpdateWithoutItemsInput>, salesUncheckedUpdateWithoutItemsInput>
  }

  export type productsUpdateOneRequiredWithoutSales_itemsNestedInput = {
    create?: XOR<productsCreateWithoutSales_itemsInput, productsUncheckedCreateWithoutSales_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutSales_itemsInput
    upsert?: productsUpsertWithoutSales_itemsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutSales_itemsInput, productsUpdateWithoutSales_itemsInput>, productsUncheckedUpdateWithoutSales_itemsInput>
  }

  export type companiesCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<companiesCreateWithoutPurchasesInput, companiesUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: companiesCreateOrConnectWithoutPurchasesInput
    connect?: companiesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<usersCreateWithoutPurchasesInput, usersUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: usersCreateOrConnectWithoutPurchasesInput
    connect?: usersWhereUniqueInput
  }

  export type suppliersCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<suppliersCreateWithoutPurchasesInput, suppliersUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: suppliersCreateOrConnectWithoutPurchasesInput
    connect?: suppliersWhereUniqueInput
  }

  export type purchases_itemsCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<purchases_itemsCreateWithoutPurchaseInput, purchases_itemsUncheckedCreateWithoutPurchaseInput> | purchases_itemsCreateWithoutPurchaseInput[] | purchases_itemsUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: purchases_itemsCreateOrConnectWithoutPurchaseInput | purchases_itemsCreateOrConnectWithoutPurchaseInput[]
    createMany?: purchases_itemsCreateManyPurchaseInputEnvelope
    connect?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
  }

  export type purchases_itemsUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<purchases_itemsCreateWithoutPurchaseInput, purchases_itemsUncheckedCreateWithoutPurchaseInput> | purchases_itemsCreateWithoutPurchaseInput[] | purchases_itemsUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: purchases_itemsCreateOrConnectWithoutPurchaseInput | purchases_itemsCreateOrConnectWithoutPurchaseInput[]
    createMany?: purchases_itemsCreateManyPurchaseInputEnvelope
    connect?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
  }

  export type companiesUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<companiesCreateWithoutPurchasesInput, companiesUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: companiesCreateOrConnectWithoutPurchasesInput
    upsert?: companiesUpsertWithoutPurchasesInput
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutPurchasesInput, companiesUpdateWithoutPurchasesInput>, companiesUncheckedUpdateWithoutPurchasesInput>
  }

  export type usersUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<usersCreateWithoutPurchasesInput, usersUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: usersCreateOrConnectWithoutPurchasesInput
    upsert?: usersUpsertWithoutPurchasesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPurchasesInput, usersUpdateWithoutPurchasesInput>, usersUncheckedUpdateWithoutPurchasesInput>
  }

  export type suppliersUpdateOneWithoutPurchasesNestedInput = {
    create?: XOR<suppliersCreateWithoutPurchasesInput, suppliersUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: suppliersCreateOrConnectWithoutPurchasesInput
    upsert?: suppliersUpsertWithoutPurchasesInput
    disconnect?: suppliersWhereInput | boolean
    delete?: suppliersWhereInput | boolean
    connect?: suppliersWhereUniqueInput
    update?: XOR<XOR<suppliersUpdateToOneWithWhereWithoutPurchasesInput, suppliersUpdateWithoutPurchasesInput>, suppliersUncheckedUpdateWithoutPurchasesInput>
  }

  export type purchases_itemsUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<purchases_itemsCreateWithoutPurchaseInput, purchases_itemsUncheckedCreateWithoutPurchaseInput> | purchases_itemsCreateWithoutPurchaseInput[] | purchases_itemsUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: purchases_itemsCreateOrConnectWithoutPurchaseInput | purchases_itemsCreateOrConnectWithoutPurchaseInput[]
    upsert?: purchases_itemsUpsertWithWhereUniqueWithoutPurchaseInput | purchases_itemsUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: purchases_itemsCreateManyPurchaseInputEnvelope
    set?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
    disconnect?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
    delete?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
    connect?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
    update?: purchases_itemsUpdateWithWhereUniqueWithoutPurchaseInput | purchases_itemsUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: purchases_itemsUpdateManyWithWhereWithoutPurchaseInput | purchases_itemsUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: purchases_itemsScalarWhereInput | purchases_itemsScalarWhereInput[]
  }

  export type purchases_itemsUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<purchases_itemsCreateWithoutPurchaseInput, purchases_itemsUncheckedCreateWithoutPurchaseInput> | purchases_itemsCreateWithoutPurchaseInput[] | purchases_itemsUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: purchases_itemsCreateOrConnectWithoutPurchaseInput | purchases_itemsCreateOrConnectWithoutPurchaseInput[]
    upsert?: purchases_itemsUpsertWithWhereUniqueWithoutPurchaseInput | purchases_itemsUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: purchases_itemsCreateManyPurchaseInputEnvelope
    set?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
    disconnect?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
    delete?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
    connect?: purchases_itemsWhereUniqueInput | purchases_itemsWhereUniqueInput[]
    update?: purchases_itemsUpdateWithWhereUniqueWithoutPurchaseInput | purchases_itemsUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: purchases_itemsUpdateManyWithWhereWithoutPurchaseInput | purchases_itemsUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: purchases_itemsScalarWhereInput | purchases_itemsScalarWhereInput[]
  }

  export type purchasesCreateNestedOneWithoutItemsInput = {
    create?: XOR<purchasesCreateWithoutItemsInput, purchasesUncheckedCreateWithoutItemsInput>
    connectOrCreate?: purchasesCreateOrConnectWithoutItemsInput
    connect?: purchasesWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutPurchase_itemsInput = {
    create?: XOR<productsCreateWithoutPurchase_itemsInput, productsUncheckedCreateWithoutPurchase_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutPurchase_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type purchasesUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<purchasesCreateWithoutItemsInput, purchasesUncheckedCreateWithoutItemsInput>
    connectOrCreate?: purchasesCreateOrConnectWithoutItemsInput
    upsert?: purchasesUpsertWithoutItemsInput
    connect?: purchasesWhereUniqueInput
    update?: XOR<XOR<purchasesUpdateToOneWithWhereWithoutItemsInput, purchasesUpdateWithoutItemsInput>, purchasesUncheckedUpdateWithoutItemsInput>
  }

  export type productsUpdateOneRequiredWithoutPurchase_itemsNestedInput = {
    create?: XOR<productsCreateWithoutPurchase_itemsInput, productsUncheckedCreateWithoutPurchase_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutPurchase_itemsInput
    upsert?: productsUpsertWithoutPurchase_itemsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutPurchase_itemsInput, productsUpdateWithoutPurchase_itemsInput>, productsUncheckedUpdateWithoutPurchase_itemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type usersCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    company?: companiesCreateNestedOneWithoutUsersInput
    sales?: salesCreateNestedManyWithoutUserInput
    purchases?: purchasesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    company_id?: string | null
    sales?: salesUncheckedCreateNestedManyWithoutUserInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutRoleInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput>
  }

  export type usersCreateManyRoleInputEnvelope = {
    data: usersCreateManyRoleInput | usersCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutRoleInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutRoleInput, usersUncheckedUpdateWithoutRoleInput>
    create: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput>
  }

  export type usersUpdateWithWhereUniqueWithoutRoleInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutRoleInput, usersUncheckedUpdateWithoutRoleInput>
  }

  export type usersUpdateManyWithWhereWithoutRoleInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutRoleInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    is_active?: BoolFilter<"users"> | boolean
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    role_id?: StringFilter<"users"> | string
    company_id?: StringNullableFilter<"users"> | string | null
  }

  export type usersCreateWithoutCompanyInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role: rolesCreateNestedOneWithoutUsersInput
    sales?: salesCreateNestedManyWithoutUserInput
    purchases?: purchasesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role_id: string
    sales?: salesUncheckedCreateNestedManyWithoutUserInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutCompanyInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCompanyInput, usersUncheckedCreateWithoutCompanyInput>
  }

  export type usersCreateManyCompanyInputEnvelope = {
    data: usersCreateManyCompanyInput | usersCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type subscriptionsCreateWithoutCompanyInput = {
    id?: string
    plan_name: string
    status: string
    started_at?: Date | string
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type subscriptionsUncheckedCreateWithoutCompanyInput = {
    id?: string
    plan_name: string
    status: string
    started_at?: Date | string
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type subscriptionsCreateOrConnectWithoutCompanyInput = {
    where: subscriptionsWhereUniqueInput
    create: XOR<subscriptionsCreateWithoutCompanyInput, subscriptionsUncheckedCreateWithoutCompanyInput>
  }

  export type subscriptionsCreateManyCompanyInputEnvelope = {
    data: subscriptionsCreateManyCompanyInput | subscriptionsCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type suppliersCreateWithoutCompanyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    contact_name?: string | null
    website?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    products?: productsCreateNestedManyWithoutSupplierInput
    purchases?: purchasesCreateNestedManyWithoutSupplierInput
  }

  export type suppliersUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    contact_name?: string | null
    website?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    products?: productsUncheckedCreateNestedManyWithoutSupplierInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type suppliersCreateOrConnectWithoutCompanyInput = {
    where: suppliersWhereUniqueInput
    create: XOR<suppliersCreateWithoutCompanyInput, suppliersUncheckedCreateWithoutCompanyInput>
  }

  export type suppliersCreateManyCompanyInputEnvelope = {
    data: suppliersCreateManyCompanyInput | suppliersCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type productsCreateWithoutCompanyInput = {
    id?: string
    name: string
    description?: string | null
    sku?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    supplier?: suppliersCreateNestedOneWithoutProductsInput
    sales_items?: sales_itemsCreateNestedManyWithoutProductInput
    purchase_items?: purchases_itemsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateWithoutCompanyInput = {
    id?: string
    supplier_id?: string | null
    name: string
    description?: string | null
    sku?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutProductInput
    purchase_items?: purchases_itemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsCreateOrConnectWithoutCompanyInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCompanyInput, productsUncheckedCreateWithoutCompanyInput>
  }

  export type productsCreateManyCompanyInputEnvelope = {
    data: productsCreateManyCompanyInput | productsCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type customersCreateWithoutCompanyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    document?: string | null
    address?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sales?: salesCreateNestedManyWithoutCustomerInput
  }

  export type customersUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    document?: string | null
    address?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sales?: salesUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customersCreateOrConnectWithoutCompanyInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutCompanyInput, customersUncheckedCreateWithoutCompanyInput>
  }

  export type customersCreateManyCompanyInputEnvelope = {
    data: customersCreateManyCompanyInput | customersCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type salesCreateWithoutCompanyInput = {
    id?: string
    sale_date?: Date | string
    notes?: string | null
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    user: usersCreateNestedOneWithoutSalesInput
    customer: customersCreateNestedOneWithoutSalesInput
    items?: sales_itemsCreateNestedManyWithoutSaleInput
  }

  export type salesUncheckedCreateWithoutCompanyInput = {
    id?: string
    user_id: string
    customer_id: string
    sale_date?: Date | string
    notes?: string | null
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    items?: sales_itemsUncheckedCreateNestedManyWithoutSaleInput
  }

  export type salesCreateOrConnectWithoutCompanyInput = {
    where: salesWhereUniqueInput
    create: XOR<salesCreateWithoutCompanyInput, salesUncheckedCreateWithoutCompanyInput>
  }

  export type salesCreateManyCompanyInputEnvelope = {
    data: salesCreateManyCompanyInput | salesCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type purchasesCreateWithoutCompanyInput = {
    id?: string
    input_date?: Date | string
    invoice_number?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: usersCreateNestedOneWithoutPurchasesInput
    supplier?: suppliersCreateNestedOneWithoutPurchasesInput
    items?: purchases_itemsCreateNestedManyWithoutPurchaseInput
  }

  export type purchasesUncheckedCreateWithoutCompanyInput = {
    id?: string
    user_id: string
    supplier_id?: string | null
    input_date?: Date | string
    invoice_number?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    items?: purchases_itemsUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type purchasesCreateOrConnectWithoutCompanyInput = {
    where: purchasesWhereUniqueInput
    create: XOR<purchasesCreateWithoutCompanyInput, purchasesUncheckedCreateWithoutCompanyInput>
  }

  export type purchasesCreateManyCompanyInputEnvelope = {
    data: purchasesCreateManyCompanyInput | purchasesCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutCompanyInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutCompanyInput, usersUncheckedUpdateWithoutCompanyInput>
    create: XOR<usersCreateWithoutCompanyInput, usersUncheckedCreateWithoutCompanyInput>
  }

  export type usersUpdateWithWhereUniqueWithoutCompanyInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutCompanyInput, usersUncheckedUpdateWithoutCompanyInput>
  }

  export type usersUpdateManyWithWhereWithoutCompanyInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutCompanyInput>
  }

  export type subscriptionsUpsertWithWhereUniqueWithoutCompanyInput = {
    where: subscriptionsWhereUniqueInput
    update: XOR<subscriptionsUpdateWithoutCompanyInput, subscriptionsUncheckedUpdateWithoutCompanyInput>
    create: XOR<subscriptionsCreateWithoutCompanyInput, subscriptionsUncheckedCreateWithoutCompanyInput>
  }

  export type subscriptionsUpdateWithWhereUniqueWithoutCompanyInput = {
    where: subscriptionsWhereUniqueInput
    data: XOR<subscriptionsUpdateWithoutCompanyInput, subscriptionsUncheckedUpdateWithoutCompanyInput>
  }

  export type subscriptionsUpdateManyWithWhereWithoutCompanyInput = {
    where: subscriptionsScalarWhereInput
    data: XOR<subscriptionsUpdateManyMutationInput, subscriptionsUncheckedUpdateManyWithoutCompanyInput>
  }

  export type subscriptionsScalarWhereInput = {
    AND?: subscriptionsScalarWhereInput | subscriptionsScalarWhereInput[]
    OR?: subscriptionsScalarWhereInput[]
    NOT?: subscriptionsScalarWhereInput | subscriptionsScalarWhereInput[]
    id?: StringFilter<"subscriptions"> | string
    company_id?: StringFilter<"subscriptions"> | string
    plan_name?: StringFilter<"subscriptions"> | string
    status?: StringFilter<"subscriptions"> | string
    started_at?: DateTimeFilter<"subscriptions"> | Date | string
    expires_at?: DateTimeNullableFilter<"subscriptions"> | Date | string | null
    created_at?: DateTimeFilter<"subscriptions"> | Date | string
    updated_at?: DateTimeFilter<"subscriptions"> | Date | string
  }

  export type suppliersUpsertWithWhereUniqueWithoutCompanyInput = {
    where: suppliersWhereUniqueInput
    update: XOR<suppliersUpdateWithoutCompanyInput, suppliersUncheckedUpdateWithoutCompanyInput>
    create: XOR<suppliersCreateWithoutCompanyInput, suppliersUncheckedCreateWithoutCompanyInput>
  }

  export type suppliersUpdateWithWhereUniqueWithoutCompanyInput = {
    where: suppliersWhereUniqueInput
    data: XOR<suppliersUpdateWithoutCompanyInput, suppliersUncheckedUpdateWithoutCompanyInput>
  }

  export type suppliersUpdateManyWithWhereWithoutCompanyInput = {
    where: suppliersScalarWhereInput
    data: XOR<suppliersUpdateManyMutationInput, suppliersUncheckedUpdateManyWithoutCompanyInput>
  }

  export type suppliersScalarWhereInput = {
    AND?: suppliersScalarWhereInput | suppliersScalarWhereInput[]
    OR?: suppliersScalarWhereInput[]
    NOT?: suppliersScalarWhereInput | suppliersScalarWhereInput[]
    id?: StringFilter<"suppliers"> | string
    company_id?: StringFilter<"suppliers"> | string
    name?: StringFilter<"suppliers"> | string
    email?: StringNullableFilter<"suppliers"> | string | null
    phone?: StringNullableFilter<"suppliers"> | string | null
    address?: StringNullableFilter<"suppliers"> | string | null
    contact_name?: StringNullableFilter<"suppliers"> | string | null
    website?: StringNullableFilter<"suppliers"> | string | null
    is_active?: BoolFilter<"suppliers"> | boolean
    created_at?: DateTimeFilter<"suppliers"> | Date | string
    updated_at?: DateTimeFilter<"suppliers"> | Date | string
  }

  export type productsUpsertWithWhereUniqueWithoutCompanyInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutCompanyInput, productsUncheckedUpdateWithoutCompanyInput>
    create: XOR<productsCreateWithoutCompanyInput, productsUncheckedCreateWithoutCompanyInput>
  }

  export type productsUpdateWithWhereUniqueWithoutCompanyInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutCompanyInput, productsUncheckedUpdateWithoutCompanyInput>
  }

  export type productsUpdateManyWithWhereWithoutCompanyInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutCompanyInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    id?: StringFilter<"products"> | string
    company_id?: StringFilter<"products"> | string
    supplier_id?: StringNullableFilter<"products"> | string | null
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    sku?: StringNullableFilter<"products"> | string | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    is_active?: BoolFilter<"products"> | boolean
    created_at?: DateTimeFilter<"products"> | Date | string
    updated_at?: DateTimeFilter<"products"> | Date | string
  }

  export type customersUpsertWithWhereUniqueWithoutCompanyInput = {
    where: customersWhereUniqueInput
    update: XOR<customersUpdateWithoutCompanyInput, customersUncheckedUpdateWithoutCompanyInput>
    create: XOR<customersCreateWithoutCompanyInput, customersUncheckedCreateWithoutCompanyInput>
  }

  export type customersUpdateWithWhereUniqueWithoutCompanyInput = {
    where: customersWhereUniqueInput
    data: XOR<customersUpdateWithoutCompanyInput, customersUncheckedUpdateWithoutCompanyInput>
  }

  export type customersUpdateManyWithWhereWithoutCompanyInput = {
    where: customersScalarWhereInput
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyWithoutCompanyInput>
  }

  export type customersScalarWhereInput = {
    AND?: customersScalarWhereInput | customersScalarWhereInput[]
    OR?: customersScalarWhereInput[]
    NOT?: customersScalarWhereInput | customersScalarWhereInput[]
    id?: StringFilter<"customers"> | string
    company_id?: StringFilter<"customers"> | string
    name?: StringFilter<"customers"> | string
    email?: StringNullableFilter<"customers"> | string | null
    phone?: StringNullableFilter<"customers"> | string | null
    document?: StringNullableFilter<"customers"> | string | null
    address?: StringNullableFilter<"customers"> | string | null
    is_active?: BoolFilter<"customers"> | boolean
    created_at?: DateTimeFilter<"customers"> | Date | string
    updated_at?: DateTimeFilter<"customers"> | Date | string
  }

  export type salesUpsertWithWhereUniqueWithoutCompanyInput = {
    where: salesWhereUniqueInput
    update: XOR<salesUpdateWithoutCompanyInput, salesUncheckedUpdateWithoutCompanyInput>
    create: XOR<salesCreateWithoutCompanyInput, salesUncheckedCreateWithoutCompanyInput>
  }

  export type salesUpdateWithWhereUniqueWithoutCompanyInput = {
    where: salesWhereUniqueInput
    data: XOR<salesUpdateWithoutCompanyInput, salesUncheckedUpdateWithoutCompanyInput>
  }

  export type salesUpdateManyWithWhereWithoutCompanyInput = {
    where: salesScalarWhereInput
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyWithoutCompanyInput>
  }

  export type salesScalarWhereInput = {
    AND?: salesScalarWhereInput | salesScalarWhereInput[]
    OR?: salesScalarWhereInput[]
    NOT?: salesScalarWhereInput | salesScalarWhereInput[]
    id?: StringFilter<"sales"> | string
    company_id?: StringFilter<"sales"> | string
    user_id?: StringFilter<"sales"> | string
    customer_id?: StringFilter<"sales"> | string
    sale_date?: DateTimeFilter<"sales"> | Date | string
    notes?: StringNullableFilter<"sales"> | string | null
    payment_method?: StringFilter<"sales"> | string
    created_at?: DateTimeFilter<"sales"> | Date | string
    updated_at?: DateTimeFilter<"sales"> | Date | string
  }

  export type purchasesUpsertWithWhereUniqueWithoutCompanyInput = {
    where: purchasesWhereUniqueInput
    update: XOR<purchasesUpdateWithoutCompanyInput, purchasesUncheckedUpdateWithoutCompanyInput>
    create: XOR<purchasesCreateWithoutCompanyInput, purchasesUncheckedCreateWithoutCompanyInput>
  }

  export type purchasesUpdateWithWhereUniqueWithoutCompanyInput = {
    where: purchasesWhereUniqueInput
    data: XOR<purchasesUpdateWithoutCompanyInput, purchasesUncheckedUpdateWithoutCompanyInput>
  }

  export type purchasesUpdateManyWithWhereWithoutCompanyInput = {
    where: purchasesScalarWhereInput
    data: XOR<purchasesUpdateManyMutationInput, purchasesUncheckedUpdateManyWithoutCompanyInput>
  }

  export type purchasesScalarWhereInput = {
    AND?: purchasesScalarWhereInput | purchasesScalarWhereInput[]
    OR?: purchasesScalarWhereInput[]
    NOT?: purchasesScalarWhereInput | purchasesScalarWhereInput[]
    id?: StringFilter<"purchases"> | string
    company_id?: StringFilter<"purchases"> | string
    user_id?: StringFilter<"purchases"> | string
    supplier_id?: StringNullableFilter<"purchases"> | string | null
    input_date?: DateTimeFilter<"purchases"> | Date | string
    invoice_number?: StringNullableFilter<"purchases"> | string | null
    notes?: StringNullableFilter<"purchases"> | string | null
    created_at?: DateTimeFilter<"purchases"> | Date | string
    updated_at?: DateTimeFilter<"purchases"> | Date | string
  }

  export type rolesCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type rolesUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type rolesCreateOrConnectWithoutUsersInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
  }

  export type companiesCreateWithoutUsersInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    cnpj?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    subscriptions?: subscriptionsCreateNestedManyWithoutCompanyInput
    suppliers?: suppliersCreateNestedManyWithoutCompanyInput
    products?: productsCreateNestedManyWithoutCompanyInput
    customers?: customersCreateNestedManyWithoutCompanyInput
    sales?: salesCreateNestedManyWithoutCompanyInput
    purchases?: purchasesCreateNestedManyWithoutCompanyInput
  }

  export type companiesUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    cnpj?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    subscriptions?: subscriptionsUncheckedCreateNestedManyWithoutCompanyInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutCompanyInput
    products?: productsUncheckedCreateNestedManyWithoutCompanyInput
    customers?: customersUncheckedCreateNestedManyWithoutCompanyInput
    sales?: salesUncheckedCreateNestedManyWithoutCompanyInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companiesCreateOrConnectWithoutUsersInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput>
  }

  export type salesCreateWithoutUserInput = {
    id?: string
    sale_date?: Date | string
    notes?: string | null
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutSalesInput
    customer: customersCreateNestedOneWithoutSalesInput
    items?: sales_itemsCreateNestedManyWithoutSaleInput
  }

  export type salesUncheckedCreateWithoutUserInput = {
    id?: string
    company_id: string
    customer_id: string
    sale_date?: Date | string
    notes?: string | null
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    items?: sales_itemsUncheckedCreateNestedManyWithoutSaleInput
  }

  export type salesCreateOrConnectWithoutUserInput = {
    where: salesWhereUniqueInput
    create: XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput>
  }

  export type salesCreateManyUserInputEnvelope = {
    data: salesCreateManyUserInput | salesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type purchasesCreateWithoutUserInput = {
    id?: string
    input_date?: Date | string
    invoice_number?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutPurchasesInput
    supplier?: suppliersCreateNestedOneWithoutPurchasesInput
    items?: purchases_itemsCreateNestedManyWithoutPurchaseInput
  }

  export type purchasesUncheckedCreateWithoutUserInput = {
    id?: string
    company_id: string
    supplier_id?: string | null
    input_date?: Date | string
    invoice_number?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    items?: purchases_itemsUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type purchasesCreateOrConnectWithoutUserInput = {
    where: purchasesWhereUniqueInput
    create: XOR<purchasesCreateWithoutUserInput, purchasesUncheckedCreateWithoutUserInput>
  }

  export type purchasesCreateManyUserInputEnvelope = {
    data: purchasesCreateManyUserInput | purchasesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type rolesUpsertWithoutUsersInput = {
    update: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type rolesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rolesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companiesUpsertWithoutUsersInput = {
    update: XOR<companiesUpdateWithoutUsersInput, companiesUncheckedUpdateWithoutUsersInput>
    create: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutUsersInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutUsersInput, companiesUncheckedUpdateWithoutUsersInput>
  }

  export type companiesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: subscriptionsUpdateManyWithoutCompanyNestedInput
    suppliers?: suppliersUpdateManyWithoutCompanyNestedInput
    products?: productsUpdateManyWithoutCompanyNestedInput
    customers?: customersUpdateManyWithoutCompanyNestedInput
    sales?: salesUpdateManyWithoutCompanyNestedInput
    purchases?: purchasesUpdateManyWithoutCompanyNestedInput
  }

  export type companiesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: subscriptionsUncheckedUpdateManyWithoutCompanyNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutCompanyNestedInput
    products?: productsUncheckedUpdateManyWithoutCompanyNestedInput
    customers?: customersUncheckedUpdateManyWithoutCompanyNestedInput
    sales?: salesUncheckedUpdateManyWithoutCompanyNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type salesUpsertWithWhereUniqueWithoutUserInput = {
    where: salesWhereUniqueInput
    update: XOR<salesUpdateWithoutUserInput, salesUncheckedUpdateWithoutUserInput>
    create: XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput>
  }

  export type salesUpdateWithWhereUniqueWithoutUserInput = {
    where: salesWhereUniqueInput
    data: XOR<salesUpdateWithoutUserInput, salesUncheckedUpdateWithoutUserInput>
  }

  export type salesUpdateManyWithWhereWithoutUserInput = {
    where: salesScalarWhereInput
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyWithoutUserInput>
  }

  export type purchasesUpsertWithWhereUniqueWithoutUserInput = {
    where: purchasesWhereUniqueInput
    update: XOR<purchasesUpdateWithoutUserInput, purchasesUncheckedUpdateWithoutUserInput>
    create: XOR<purchasesCreateWithoutUserInput, purchasesUncheckedCreateWithoutUserInput>
  }

  export type purchasesUpdateWithWhereUniqueWithoutUserInput = {
    where: purchasesWhereUniqueInput
    data: XOR<purchasesUpdateWithoutUserInput, purchasesUncheckedUpdateWithoutUserInput>
  }

  export type purchasesUpdateManyWithWhereWithoutUserInput = {
    where: purchasesScalarWhereInput
    data: XOR<purchasesUpdateManyMutationInput, purchasesUncheckedUpdateManyWithoutUserInput>
  }

  export type companiesCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    cnpj?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersCreateNestedManyWithoutCompanyInput
    suppliers?: suppliersCreateNestedManyWithoutCompanyInput
    products?: productsCreateNestedManyWithoutCompanyInput
    customers?: customersCreateNestedManyWithoutCompanyInput
    sales?: salesCreateNestedManyWithoutCompanyInput
    purchases?: purchasesCreateNestedManyWithoutCompanyInput
  }

  export type companiesUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    cnpj?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersUncheckedCreateNestedManyWithoutCompanyInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutCompanyInput
    products?: productsUncheckedCreateNestedManyWithoutCompanyInput
    customers?: customersUncheckedCreateNestedManyWithoutCompanyInput
    sales?: salesUncheckedCreateNestedManyWithoutCompanyInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companiesCreateOrConnectWithoutSubscriptionsInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutSubscriptionsInput, companiesUncheckedCreateWithoutSubscriptionsInput>
  }

  export type companiesUpsertWithoutSubscriptionsInput = {
    update: XOR<companiesUpdateWithoutSubscriptionsInput, companiesUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<companiesCreateWithoutSubscriptionsInput, companiesUncheckedCreateWithoutSubscriptionsInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutSubscriptionsInput, companiesUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type companiesUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateManyWithoutCompanyNestedInput
    suppliers?: suppliersUpdateManyWithoutCompanyNestedInput
    products?: productsUpdateManyWithoutCompanyNestedInput
    customers?: customersUpdateManyWithoutCompanyNestedInput
    sales?: salesUpdateManyWithoutCompanyNestedInput
    purchases?: purchasesUpdateManyWithoutCompanyNestedInput
  }

  export type companiesUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUncheckedUpdateManyWithoutCompanyNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutCompanyNestedInput
    products?: productsUncheckedUpdateManyWithoutCompanyNestedInput
    customers?: customersUncheckedUpdateManyWithoutCompanyNestedInput
    sales?: salesUncheckedUpdateManyWithoutCompanyNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companiesCreateWithoutSuppliersInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    cnpj?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersCreateNestedManyWithoutCompanyInput
    subscriptions?: subscriptionsCreateNestedManyWithoutCompanyInput
    products?: productsCreateNestedManyWithoutCompanyInput
    customers?: customersCreateNestedManyWithoutCompanyInput
    sales?: salesCreateNestedManyWithoutCompanyInput
    purchases?: purchasesCreateNestedManyWithoutCompanyInput
  }

  export type companiesUncheckedCreateWithoutSuppliersInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    cnpj?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersUncheckedCreateNestedManyWithoutCompanyInput
    subscriptions?: subscriptionsUncheckedCreateNestedManyWithoutCompanyInput
    products?: productsUncheckedCreateNestedManyWithoutCompanyInput
    customers?: customersUncheckedCreateNestedManyWithoutCompanyInput
    sales?: salesUncheckedCreateNestedManyWithoutCompanyInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companiesCreateOrConnectWithoutSuppliersInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutSuppliersInput, companiesUncheckedCreateWithoutSuppliersInput>
  }

  export type productsCreateWithoutSupplierInput = {
    id?: string
    name: string
    description?: string | null
    sku?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutProductsInput
    sales_items?: sales_itemsCreateNestedManyWithoutProductInput
    purchase_items?: purchases_itemsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateWithoutSupplierInput = {
    id?: string
    company_id: string
    name: string
    description?: string | null
    sku?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutProductInput
    purchase_items?: purchases_itemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsCreateOrConnectWithoutSupplierInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutSupplierInput, productsUncheckedCreateWithoutSupplierInput>
  }

  export type productsCreateManySupplierInputEnvelope = {
    data: productsCreateManySupplierInput | productsCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type purchasesCreateWithoutSupplierInput = {
    id?: string
    input_date?: Date | string
    invoice_number?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutPurchasesInput
    user: usersCreateNestedOneWithoutPurchasesInput
    items?: purchases_itemsCreateNestedManyWithoutPurchaseInput
  }

  export type purchasesUncheckedCreateWithoutSupplierInput = {
    id?: string
    company_id: string
    user_id: string
    input_date?: Date | string
    invoice_number?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    items?: purchases_itemsUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type purchasesCreateOrConnectWithoutSupplierInput = {
    where: purchasesWhereUniqueInput
    create: XOR<purchasesCreateWithoutSupplierInput, purchasesUncheckedCreateWithoutSupplierInput>
  }

  export type purchasesCreateManySupplierInputEnvelope = {
    data: purchasesCreateManySupplierInput | purchasesCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type companiesUpsertWithoutSuppliersInput = {
    update: XOR<companiesUpdateWithoutSuppliersInput, companiesUncheckedUpdateWithoutSuppliersInput>
    create: XOR<companiesCreateWithoutSuppliersInput, companiesUncheckedCreateWithoutSuppliersInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutSuppliersInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutSuppliersInput, companiesUncheckedUpdateWithoutSuppliersInput>
  }

  export type companiesUpdateWithoutSuppliersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateManyWithoutCompanyNestedInput
    subscriptions?: subscriptionsUpdateManyWithoutCompanyNestedInput
    products?: productsUpdateManyWithoutCompanyNestedInput
    customers?: customersUpdateManyWithoutCompanyNestedInput
    sales?: salesUpdateManyWithoutCompanyNestedInput
    purchases?: purchasesUpdateManyWithoutCompanyNestedInput
  }

  export type companiesUncheckedUpdateWithoutSuppliersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUncheckedUpdateManyWithoutCompanyNestedInput
    subscriptions?: subscriptionsUncheckedUpdateManyWithoutCompanyNestedInput
    products?: productsUncheckedUpdateManyWithoutCompanyNestedInput
    customers?: customersUncheckedUpdateManyWithoutCompanyNestedInput
    sales?: salesUncheckedUpdateManyWithoutCompanyNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type productsUpsertWithWhereUniqueWithoutSupplierInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutSupplierInput, productsUncheckedUpdateWithoutSupplierInput>
    create: XOR<productsCreateWithoutSupplierInput, productsUncheckedCreateWithoutSupplierInput>
  }

  export type productsUpdateWithWhereUniqueWithoutSupplierInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutSupplierInput, productsUncheckedUpdateWithoutSupplierInput>
  }

  export type productsUpdateManyWithWhereWithoutSupplierInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutSupplierInput>
  }

  export type purchasesUpsertWithWhereUniqueWithoutSupplierInput = {
    where: purchasesWhereUniqueInput
    update: XOR<purchasesUpdateWithoutSupplierInput, purchasesUncheckedUpdateWithoutSupplierInput>
    create: XOR<purchasesCreateWithoutSupplierInput, purchasesUncheckedCreateWithoutSupplierInput>
  }

  export type purchasesUpdateWithWhereUniqueWithoutSupplierInput = {
    where: purchasesWhereUniqueInput
    data: XOR<purchasesUpdateWithoutSupplierInput, purchasesUncheckedUpdateWithoutSupplierInput>
  }

  export type purchasesUpdateManyWithWhereWithoutSupplierInput = {
    where: purchasesScalarWhereInput
    data: XOR<purchasesUpdateManyMutationInput, purchasesUncheckedUpdateManyWithoutSupplierInput>
  }

  export type companiesCreateWithoutProductsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    cnpj?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersCreateNestedManyWithoutCompanyInput
    subscriptions?: subscriptionsCreateNestedManyWithoutCompanyInput
    suppliers?: suppliersCreateNestedManyWithoutCompanyInput
    customers?: customersCreateNestedManyWithoutCompanyInput
    sales?: salesCreateNestedManyWithoutCompanyInput
    purchases?: purchasesCreateNestedManyWithoutCompanyInput
  }

  export type companiesUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    cnpj?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersUncheckedCreateNestedManyWithoutCompanyInput
    subscriptions?: subscriptionsUncheckedCreateNestedManyWithoutCompanyInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutCompanyInput
    customers?: customersUncheckedCreateNestedManyWithoutCompanyInput
    sales?: salesUncheckedCreateNestedManyWithoutCompanyInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companiesCreateOrConnectWithoutProductsInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutProductsInput, companiesUncheckedCreateWithoutProductsInput>
  }

  export type suppliersCreateWithoutProductsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    contact_name?: string | null
    website?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutSuppliersInput
    purchases?: purchasesCreateNestedManyWithoutSupplierInput
  }

  export type suppliersUncheckedCreateWithoutProductsInput = {
    id?: string
    company_id: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    contact_name?: string | null
    website?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    purchases?: purchasesUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type suppliersCreateOrConnectWithoutProductsInput = {
    where: suppliersWhereUniqueInput
    create: XOR<suppliersCreateWithoutProductsInput, suppliersUncheckedCreateWithoutProductsInput>
  }

  export type sales_itemsCreateWithoutProductInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    sale: salesCreateNestedOneWithoutItemsInput
  }

  export type sales_itemsUncheckedCreateWithoutProductInput = {
    id?: string
    sales_id: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type sales_itemsCreateOrConnectWithoutProductInput = {
    where: sales_itemsWhereUniqueInput
    create: XOR<sales_itemsCreateWithoutProductInput, sales_itemsUncheckedCreateWithoutProductInput>
  }

  export type sales_itemsCreateManyProductInputEnvelope = {
    data: sales_itemsCreateManyProductInput | sales_itemsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type purchases_itemsCreateWithoutProductInput = {
    id?: string
    quantity: number
    cost: Decimal | DecimalJsLike | number | string
    purchase: purchasesCreateNestedOneWithoutItemsInput
  }

  export type purchases_itemsUncheckedCreateWithoutProductInput = {
    id?: string
    purchases_id: string
    quantity: number
    cost: Decimal | DecimalJsLike | number | string
  }

  export type purchases_itemsCreateOrConnectWithoutProductInput = {
    where: purchases_itemsWhereUniqueInput
    create: XOR<purchases_itemsCreateWithoutProductInput, purchases_itemsUncheckedCreateWithoutProductInput>
  }

  export type purchases_itemsCreateManyProductInputEnvelope = {
    data: purchases_itemsCreateManyProductInput | purchases_itemsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type companiesUpsertWithoutProductsInput = {
    update: XOR<companiesUpdateWithoutProductsInput, companiesUncheckedUpdateWithoutProductsInput>
    create: XOR<companiesCreateWithoutProductsInput, companiesUncheckedCreateWithoutProductsInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutProductsInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutProductsInput, companiesUncheckedUpdateWithoutProductsInput>
  }

  export type companiesUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateManyWithoutCompanyNestedInput
    subscriptions?: subscriptionsUpdateManyWithoutCompanyNestedInput
    suppliers?: suppliersUpdateManyWithoutCompanyNestedInput
    customers?: customersUpdateManyWithoutCompanyNestedInput
    sales?: salesUpdateManyWithoutCompanyNestedInput
    purchases?: purchasesUpdateManyWithoutCompanyNestedInput
  }

  export type companiesUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUncheckedUpdateManyWithoutCompanyNestedInput
    subscriptions?: subscriptionsUncheckedUpdateManyWithoutCompanyNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutCompanyNestedInput
    customers?: customersUncheckedUpdateManyWithoutCompanyNestedInput
    sales?: salesUncheckedUpdateManyWithoutCompanyNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type suppliersUpsertWithoutProductsInput = {
    update: XOR<suppliersUpdateWithoutProductsInput, suppliersUncheckedUpdateWithoutProductsInput>
    create: XOR<suppliersCreateWithoutProductsInput, suppliersUncheckedCreateWithoutProductsInput>
    where?: suppliersWhereInput
  }

  export type suppliersUpdateToOneWithWhereWithoutProductsInput = {
    where?: suppliersWhereInput
    data: XOR<suppliersUpdateWithoutProductsInput, suppliersUncheckedUpdateWithoutProductsInput>
  }

  export type suppliersUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutSuppliersNestedInput
    purchases?: purchasesUpdateManyWithoutSupplierNestedInput
  }

  export type suppliersUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: purchasesUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type sales_itemsUpsertWithWhereUniqueWithoutProductInput = {
    where: sales_itemsWhereUniqueInput
    update: XOR<sales_itemsUpdateWithoutProductInput, sales_itemsUncheckedUpdateWithoutProductInput>
    create: XOR<sales_itemsCreateWithoutProductInput, sales_itemsUncheckedCreateWithoutProductInput>
  }

  export type sales_itemsUpdateWithWhereUniqueWithoutProductInput = {
    where: sales_itemsWhereUniqueInput
    data: XOR<sales_itemsUpdateWithoutProductInput, sales_itemsUncheckedUpdateWithoutProductInput>
  }

  export type sales_itemsUpdateManyWithWhereWithoutProductInput = {
    where: sales_itemsScalarWhereInput
    data: XOR<sales_itemsUpdateManyMutationInput, sales_itemsUncheckedUpdateManyWithoutProductInput>
  }

  export type sales_itemsScalarWhereInput = {
    AND?: sales_itemsScalarWhereInput | sales_itemsScalarWhereInput[]
    OR?: sales_itemsScalarWhereInput[]
    NOT?: sales_itemsScalarWhereInput | sales_itemsScalarWhereInput[]
    id?: StringFilter<"sales_items"> | string
    sales_id?: StringFilter<"sales_items"> | string
    product_id?: StringFilter<"sales_items"> | string
    quantity?: IntFilter<"sales_items"> | number
    price?: DecimalFilter<"sales_items"> | Decimal | DecimalJsLike | number | string
  }

  export type purchases_itemsUpsertWithWhereUniqueWithoutProductInput = {
    where: purchases_itemsWhereUniqueInput
    update: XOR<purchases_itemsUpdateWithoutProductInput, purchases_itemsUncheckedUpdateWithoutProductInput>
    create: XOR<purchases_itemsCreateWithoutProductInput, purchases_itemsUncheckedCreateWithoutProductInput>
  }

  export type purchases_itemsUpdateWithWhereUniqueWithoutProductInput = {
    where: purchases_itemsWhereUniqueInput
    data: XOR<purchases_itemsUpdateWithoutProductInput, purchases_itemsUncheckedUpdateWithoutProductInput>
  }

  export type purchases_itemsUpdateManyWithWhereWithoutProductInput = {
    where: purchases_itemsScalarWhereInput
    data: XOR<purchases_itemsUpdateManyMutationInput, purchases_itemsUncheckedUpdateManyWithoutProductInput>
  }

  export type purchases_itemsScalarWhereInput = {
    AND?: purchases_itemsScalarWhereInput | purchases_itemsScalarWhereInput[]
    OR?: purchases_itemsScalarWhereInput[]
    NOT?: purchases_itemsScalarWhereInput | purchases_itemsScalarWhereInput[]
    id?: StringFilter<"purchases_items"> | string
    purchases_id?: StringFilter<"purchases_items"> | string
    product_id?: StringFilter<"purchases_items"> | string
    quantity?: IntFilter<"purchases_items"> | number
    cost?: DecimalFilter<"purchases_items"> | Decimal | DecimalJsLike | number | string
  }

  export type companiesCreateWithoutCustomersInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    cnpj?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersCreateNestedManyWithoutCompanyInput
    subscriptions?: subscriptionsCreateNestedManyWithoutCompanyInput
    suppliers?: suppliersCreateNestedManyWithoutCompanyInput
    products?: productsCreateNestedManyWithoutCompanyInput
    sales?: salesCreateNestedManyWithoutCompanyInput
    purchases?: purchasesCreateNestedManyWithoutCompanyInput
  }

  export type companiesUncheckedCreateWithoutCustomersInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    cnpj?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersUncheckedCreateNestedManyWithoutCompanyInput
    subscriptions?: subscriptionsUncheckedCreateNestedManyWithoutCompanyInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutCompanyInput
    products?: productsUncheckedCreateNestedManyWithoutCompanyInput
    sales?: salesUncheckedCreateNestedManyWithoutCompanyInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companiesCreateOrConnectWithoutCustomersInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutCustomersInput, companiesUncheckedCreateWithoutCustomersInput>
  }

  export type salesCreateWithoutCustomerInput = {
    id?: string
    sale_date?: Date | string
    notes?: string | null
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutSalesInput
    user: usersCreateNestedOneWithoutSalesInput
    items?: sales_itemsCreateNestedManyWithoutSaleInput
  }

  export type salesUncheckedCreateWithoutCustomerInput = {
    id?: string
    company_id: string
    user_id: string
    sale_date?: Date | string
    notes?: string | null
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    items?: sales_itemsUncheckedCreateNestedManyWithoutSaleInput
  }

  export type salesCreateOrConnectWithoutCustomerInput = {
    where: salesWhereUniqueInput
    create: XOR<salesCreateWithoutCustomerInput, salesUncheckedCreateWithoutCustomerInput>
  }

  export type salesCreateManyCustomerInputEnvelope = {
    data: salesCreateManyCustomerInput | salesCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type companiesUpsertWithoutCustomersInput = {
    update: XOR<companiesUpdateWithoutCustomersInput, companiesUncheckedUpdateWithoutCustomersInput>
    create: XOR<companiesCreateWithoutCustomersInput, companiesUncheckedCreateWithoutCustomersInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutCustomersInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutCustomersInput, companiesUncheckedUpdateWithoutCustomersInput>
  }

  export type companiesUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateManyWithoutCompanyNestedInput
    subscriptions?: subscriptionsUpdateManyWithoutCompanyNestedInput
    suppliers?: suppliersUpdateManyWithoutCompanyNestedInput
    products?: productsUpdateManyWithoutCompanyNestedInput
    sales?: salesUpdateManyWithoutCompanyNestedInput
    purchases?: purchasesUpdateManyWithoutCompanyNestedInput
  }

  export type companiesUncheckedUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUncheckedUpdateManyWithoutCompanyNestedInput
    subscriptions?: subscriptionsUncheckedUpdateManyWithoutCompanyNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutCompanyNestedInput
    products?: productsUncheckedUpdateManyWithoutCompanyNestedInput
    sales?: salesUncheckedUpdateManyWithoutCompanyNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type salesUpsertWithWhereUniqueWithoutCustomerInput = {
    where: salesWhereUniqueInput
    update: XOR<salesUpdateWithoutCustomerInput, salesUncheckedUpdateWithoutCustomerInput>
    create: XOR<salesCreateWithoutCustomerInput, salesUncheckedCreateWithoutCustomerInput>
  }

  export type salesUpdateWithWhereUniqueWithoutCustomerInput = {
    where: salesWhereUniqueInput
    data: XOR<salesUpdateWithoutCustomerInput, salesUncheckedUpdateWithoutCustomerInput>
  }

  export type salesUpdateManyWithWhereWithoutCustomerInput = {
    where: salesScalarWhereInput
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyWithoutCustomerInput>
  }

  export type companiesCreateWithoutSalesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    cnpj?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersCreateNestedManyWithoutCompanyInput
    subscriptions?: subscriptionsCreateNestedManyWithoutCompanyInput
    suppliers?: suppliersCreateNestedManyWithoutCompanyInput
    products?: productsCreateNestedManyWithoutCompanyInput
    customers?: customersCreateNestedManyWithoutCompanyInput
    purchases?: purchasesCreateNestedManyWithoutCompanyInput
  }

  export type companiesUncheckedCreateWithoutSalesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    cnpj?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersUncheckedCreateNestedManyWithoutCompanyInput
    subscriptions?: subscriptionsUncheckedCreateNestedManyWithoutCompanyInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutCompanyInput
    products?: productsUncheckedCreateNestedManyWithoutCompanyInput
    customers?: customersUncheckedCreateNestedManyWithoutCompanyInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companiesCreateOrConnectWithoutSalesInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutSalesInput, companiesUncheckedCreateWithoutSalesInput>
  }

  export type usersCreateWithoutSalesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role: rolesCreateNestedOneWithoutUsersInput
    company?: companiesCreateNestedOneWithoutUsersInput
    purchases?: purchasesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutSalesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role_id: string
    company_id?: string | null
    purchases?: purchasesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutSalesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSalesInput, usersUncheckedCreateWithoutSalesInput>
  }

  export type customersCreateWithoutSalesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    document?: string | null
    address?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutCustomersInput
  }

  export type customersUncheckedCreateWithoutSalesInput = {
    id?: string
    company_id: string
    name: string
    email?: string | null
    phone?: string | null
    document?: string | null
    address?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type customersCreateOrConnectWithoutSalesInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutSalesInput, customersUncheckedCreateWithoutSalesInput>
  }

  export type sales_itemsCreateWithoutSaleInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    product: productsCreateNestedOneWithoutSales_itemsInput
  }

  export type sales_itemsUncheckedCreateWithoutSaleInput = {
    id?: string
    product_id: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type sales_itemsCreateOrConnectWithoutSaleInput = {
    where: sales_itemsWhereUniqueInput
    create: XOR<sales_itemsCreateWithoutSaleInput, sales_itemsUncheckedCreateWithoutSaleInput>
  }

  export type sales_itemsCreateManySaleInputEnvelope = {
    data: sales_itemsCreateManySaleInput | sales_itemsCreateManySaleInput[]
    skipDuplicates?: boolean
  }

  export type companiesUpsertWithoutSalesInput = {
    update: XOR<companiesUpdateWithoutSalesInput, companiesUncheckedUpdateWithoutSalesInput>
    create: XOR<companiesCreateWithoutSalesInput, companiesUncheckedCreateWithoutSalesInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutSalesInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutSalesInput, companiesUncheckedUpdateWithoutSalesInput>
  }

  export type companiesUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateManyWithoutCompanyNestedInput
    subscriptions?: subscriptionsUpdateManyWithoutCompanyNestedInput
    suppliers?: suppliersUpdateManyWithoutCompanyNestedInput
    products?: productsUpdateManyWithoutCompanyNestedInput
    customers?: customersUpdateManyWithoutCompanyNestedInput
    purchases?: purchasesUpdateManyWithoutCompanyNestedInput
  }

  export type companiesUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUncheckedUpdateManyWithoutCompanyNestedInput
    subscriptions?: subscriptionsUncheckedUpdateManyWithoutCompanyNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutCompanyNestedInput
    products?: productsUncheckedUpdateManyWithoutCompanyNestedInput
    customers?: customersUncheckedUpdateManyWithoutCompanyNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type usersUpsertWithoutSalesInput = {
    update: XOR<usersUpdateWithoutSalesInput, usersUncheckedUpdateWithoutSalesInput>
    create: XOR<usersCreateWithoutSalesInput, usersUncheckedCreateWithoutSalesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSalesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSalesInput, usersUncheckedUpdateWithoutSalesInput>
  }

  export type usersUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutUsersNestedInput
    company?: companiesUpdateOneWithoutUsersNestedInput
    purchases?: purchasesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    purchases?: purchasesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type customersUpsertWithoutSalesInput = {
    update: XOR<customersUpdateWithoutSalesInput, customersUncheckedUpdateWithoutSalesInput>
    create: XOR<customersCreateWithoutSalesInput, customersUncheckedCreateWithoutSalesInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutSalesInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutSalesInput, customersUncheckedUpdateWithoutSalesInput>
  }

  export type customersUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sales_itemsUpsertWithWhereUniqueWithoutSaleInput = {
    where: sales_itemsWhereUniqueInput
    update: XOR<sales_itemsUpdateWithoutSaleInput, sales_itemsUncheckedUpdateWithoutSaleInput>
    create: XOR<sales_itemsCreateWithoutSaleInput, sales_itemsUncheckedCreateWithoutSaleInput>
  }

  export type sales_itemsUpdateWithWhereUniqueWithoutSaleInput = {
    where: sales_itemsWhereUniqueInput
    data: XOR<sales_itemsUpdateWithoutSaleInput, sales_itemsUncheckedUpdateWithoutSaleInput>
  }

  export type sales_itemsUpdateManyWithWhereWithoutSaleInput = {
    where: sales_itemsScalarWhereInput
    data: XOR<sales_itemsUpdateManyMutationInput, sales_itemsUncheckedUpdateManyWithoutSaleInput>
  }

  export type salesCreateWithoutItemsInput = {
    id?: string
    sale_date?: Date | string
    notes?: string | null
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutSalesInput
    user: usersCreateNestedOneWithoutSalesInput
    customer: customersCreateNestedOneWithoutSalesInput
  }

  export type salesUncheckedCreateWithoutItemsInput = {
    id?: string
    company_id: string
    user_id: string
    customer_id: string
    sale_date?: Date | string
    notes?: string | null
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type salesCreateOrConnectWithoutItemsInput = {
    where: salesWhereUniqueInput
    create: XOR<salesCreateWithoutItemsInput, salesUncheckedCreateWithoutItemsInput>
  }

  export type productsCreateWithoutSales_itemsInput = {
    id?: string
    name: string
    description?: string | null
    sku?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutProductsInput
    supplier?: suppliersCreateNestedOneWithoutProductsInput
    purchase_items?: purchases_itemsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateWithoutSales_itemsInput = {
    id?: string
    company_id: string
    supplier_id?: string | null
    name: string
    description?: string | null
    sku?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    purchase_items?: purchases_itemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsCreateOrConnectWithoutSales_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutSales_itemsInput, productsUncheckedCreateWithoutSales_itemsInput>
  }

  export type salesUpsertWithoutItemsInput = {
    update: XOR<salesUpdateWithoutItemsInput, salesUncheckedUpdateWithoutItemsInput>
    create: XOR<salesCreateWithoutItemsInput, salesUncheckedCreateWithoutItemsInput>
    where?: salesWhereInput
  }

  export type salesUpdateToOneWithWhereWithoutItemsInput = {
    where?: salesWhereInput
    data: XOR<salesUpdateWithoutItemsInput, salesUncheckedUpdateWithoutItemsInput>
  }

  export type salesUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutSalesNestedInput
    user?: usersUpdateOneRequiredWithoutSalesNestedInput
    customer?: customersUpdateOneRequiredWithoutSalesNestedInput
  }

  export type salesUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUpsertWithoutSales_itemsInput = {
    update: XOR<productsUpdateWithoutSales_itemsInput, productsUncheckedUpdateWithoutSales_itemsInput>
    create: XOR<productsCreateWithoutSales_itemsInput, productsUncheckedCreateWithoutSales_itemsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutSales_itemsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutSales_itemsInput, productsUncheckedUpdateWithoutSales_itemsInput>
  }

  export type productsUpdateWithoutSales_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutProductsNestedInput
    supplier?: suppliersUpdateOneWithoutProductsNestedInput
    purchase_items?: purchases_itemsUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateWithoutSales_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    supplier_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase_items?: purchases_itemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type companiesCreateWithoutPurchasesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    cnpj?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersCreateNestedManyWithoutCompanyInput
    subscriptions?: subscriptionsCreateNestedManyWithoutCompanyInput
    suppliers?: suppliersCreateNestedManyWithoutCompanyInput
    products?: productsCreateNestedManyWithoutCompanyInput
    customers?: customersCreateNestedManyWithoutCompanyInput
    sales?: salesCreateNestedManyWithoutCompanyInput
  }

  export type companiesUncheckedCreateWithoutPurchasesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    cnpj?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersUncheckedCreateNestedManyWithoutCompanyInput
    subscriptions?: subscriptionsUncheckedCreateNestedManyWithoutCompanyInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutCompanyInput
    products?: productsUncheckedCreateNestedManyWithoutCompanyInput
    customers?: customersUncheckedCreateNestedManyWithoutCompanyInput
    sales?: salesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companiesCreateOrConnectWithoutPurchasesInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutPurchasesInput, companiesUncheckedCreateWithoutPurchasesInput>
  }

  export type usersCreateWithoutPurchasesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role: rolesCreateNestedOneWithoutUsersInput
    company?: companiesCreateNestedOneWithoutUsersInput
    sales?: salesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPurchasesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role_id: string
    company_id?: string | null
    sales?: salesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPurchasesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPurchasesInput, usersUncheckedCreateWithoutPurchasesInput>
  }

  export type suppliersCreateWithoutPurchasesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    contact_name?: string | null
    website?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutSuppliersInput
    products?: productsCreateNestedManyWithoutSupplierInput
  }

  export type suppliersUncheckedCreateWithoutPurchasesInput = {
    id?: string
    company_id: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    contact_name?: string | null
    website?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    products?: productsUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type suppliersCreateOrConnectWithoutPurchasesInput = {
    where: suppliersWhereUniqueInput
    create: XOR<suppliersCreateWithoutPurchasesInput, suppliersUncheckedCreateWithoutPurchasesInput>
  }

  export type purchases_itemsCreateWithoutPurchaseInput = {
    id?: string
    quantity: number
    cost: Decimal | DecimalJsLike | number | string
    product: productsCreateNestedOneWithoutPurchase_itemsInput
  }

  export type purchases_itemsUncheckedCreateWithoutPurchaseInput = {
    id?: string
    product_id: string
    quantity: number
    cost: Decimal | DecimalJsLike | number | string
  }

  export type purchases_itemsCreateOrConnectWithoutPurchaseInput = {
    where: purchases_itemsWhereUniqueInput
    create: XOR<purchases_itemsCreateWithoutPurchaseInput, purchases_itemsUncheckedCreateWithoutPurchaseInput>
  }

  export type purchases_itemsCreateManyPurchaseInputEnvelope = {
    data: purchases_itemsCreateManyPurchaseInput | purchases_itemsCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type companiesUpsertWithoutPurchasesInput = {
    update: XOR<companiesUpdateWithoutPurchasesInput, companiesUncheckedUpdateWithoutPurchasesInput>
    create: XOR<companiesCreateWithoutPurchasesInput, companiesUncheckedCreateWithoutPurchasesInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutPurchasesInput, companiesUncheckedUpdateWithoutPurchasesInput>
  }

  export type companiesUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateManyWithoutCompanyNestedInput
    subscriptions?: subscriptionsUpdateManyWithoutCompanyNestedInput
    suppliers?: suppliersUpdateManyWithoutCompanyNestedInput
    products?: productsUpdateManyWithoutCompanyNestedInput
    customers?: customersUpdateManyWithoutCompanyNestedInput
    sales?: salesUpdateManyWithoutCompanyNestedInput
  }

  export type companiesUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUncheckedUpdateManyWithoutCompanyNestedInput
    subscriptions?: subscriptionsUncheckedUpdateManyWithoutCompanyNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutCompanyNestedInput
    products?: productsUncheckedUpdateManyWithoutCompanyNestedInput
    customers?: customersUncheckedUpdateManyWithoutCompanyNestedInput
    sales?: salesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type usersUpsertWithoutPurchasesInput = {
    update: XOR<usersUpdateWithoutPurchasesInput, usersUncheckedUpdateWithoutPurchasesInput>
    create: XOR<usersCreateWithoutPurchasesInput, usersUncheckedCreateWithoutPurchasesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPurchasesInput, usersUncheckedUpdateWithoutPurchasesInput>
  }

  export type usersUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutUsersNestedInput
    company?: companiesUpdateOneWithoutUsersNestedInput
    sales?: salesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type suppliersUpsertWithoutPurchasesInput = {
    update: XOR<suppliersUpdateWithoutPurchasesInput, suppliersUncheckedUpdateWithoutPurchasesInput>
    create: XOR<suppliersCreateWithoutPurchasesInput, suppliersUncheckedCreateWithoutPurchasesInput>
    where?: suppliersWhereInput
  }

  export type suppliersUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: suppliersWhereInput
    data: XOR<suppliersUpdateWithoutPurchasesInput, suppliersUncheckedUpdateWithoutPurchasesInput>
  }

  export type suppliersUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutSuppliersNestedInput
    products?: productsUpdateManyWithoutSupplierNestedInput
  }

  export type suppliersUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type purchases_itemsUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: purchases_itemsWhereUniqueInput
    update: XOR<purchases_itemsUpdateWithoutPurchaseInput, purchases_itemsUncheckedUpdateWithoutPurchaseInput>
    create: XOR<purchases_itemsCreateWithoutPurchaseInput, purchases_itemsUncheckedCreateWithoutPurchaseInput>
  }

  export type purchases_itemsUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: purchases_itemsWhereUniqueInput
    data: XOR<purchases_itemsUpdateWithoutPurchaseInput, purchases_itemsUncheckedUpdateWithoutPurchaseInput>
  }

  export type purchases_itemsUpdateManyWithWhereWithoutPurchaseInput = {
    where: purchases_itemsScalarWhereInput
    data: XOR<purchases_itemsUpdateManyMutationInput, purchases_itemsUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type purchasesCreateWithoutItemsInput = {
    id?: string
    input_date?: Date | string
    invoice_number?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutPurchasesInput
    user: usersCreateNestedOneWithoutPurchasesInput
    supplier?: suppliersCreateNestedOneWithoutPurchasesInput
  }

  export type purchasesUncheckedCreateWithoutItemsInput = {
    id?: string
    company_id: string
    user_id: string
    supplier_id?: string | null
    input_date?: Date | string
    invoice_number?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type purchasesCreateOrConnectWithoutItemsInput = {
    where: purchasesWhereUniqueInput
    create: XOR<purchasesCreateWithoutItemsInput, purchasesUncheckedCreateWithoutItemsInput>
  }

  export type productsCreateWithoutPurchase_itemsInput = {
    id?: string
    name: string
    description?: string | null
    sku?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    company: companiesCreateNestedOneWithoutProductsInput
    supplier?: suppliersCreateNestedOneWithoutProductsInput
    sales_items?: sales_itemsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateWithoutPurchase_itemsInput = {
    id?: string
    company_id: string
    supplier_id?: string | null
    name: string
    description?: string | null
    sku?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsCreateOrConnectWithoutPurchase_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutPurchase_itemsInput, productsUncheckedCreateWithoutPurchase_itemsInput>
  }

  export type purchasesUpsertWithoutItemsInput = {
    update: XOR<purchasesUpdateWithoutItemsInput, purchasesUncheckedUpdateWithoutItemsInput>
    create: XOR<purchasesCreateWithoutItemsInput, purchasesUncheckedCreateWithoutItemsInput>
    where?: purchasesWhereInput
  }

  export type purchasesUpdateToOneWithWhereWithoutItemsInput = {
    where?: purchasesWhereInput
    data: XOR<purchasesUpdateWithoutItemsInput, purchasesUncheckedUpdateWithoutItemsInput>
  }

  export type purchasesUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    input_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutPurchasesNestedInput
    user?: usersUpdateOneRequiredWithoutPurchasesNestedInput
    supplier?: suppliersUpdateOneWithoutPurchasesNestedInput
  }

  export type purchasesUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    supplier_id?: NullableStringFieldUpdateOperationsInput | string | null
    input_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUpsertWithoutPurchase_itemsInput = {
    update: XOR<productsUpdateWithoutPurchase_itemsInput, productsUncheckedUpdateWithoutPurchase_itemsInput>
    create: XOR<productsCreateWithoutPurchase_itemsInput, productsUncheckedCreateWithoutPurchase_itemsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutPurchase_itemsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutPurchase_itemsInput, productsUncheckedUpdateWithoutPurchase_itemsInput>
  }

  export type productsUpdateWithoutPurchase_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutProductsNestedInput
    supplier?: suppliersUpdateOneWithoutProductsNestedInput
    sales_items?: sales_itemsUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateWithoutPurchase_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    supplier_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sales_items?: sales_itemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type usersCreateManyRoleInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    company_id?: string | null
  }

  export type usersUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneWithoutUsersNestedInput
    sales?: salesUpdateManyWithoutUserNestedInput
    purchases?: purchasesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateManyCompanyInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role_id: string
  }

  export type subscriptionsCreateManyCompanyInput = {
    id?: string
    plan_name: string
    status: string
    started_at?: Date | string
    expires_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type suppliersCreateManyCompanyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    contact_name?: string | null
    website?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type productsCreateManyCompanyInput = {
    id?: string
    supplier_id?: string | null
    name: string
    description?: string | null
    sku?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type customersCreateManyCompanyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    document?: string | null
    address?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type salesCreateManyCompanyInput = {
    id?: string
    user_id: string
    customer_id: string
    sale_date?: Date | string
    notes?: string | null
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type purchasesCreateManyCompanyInput = {
    id?: string
    user_id: string
    supplier_id?: string | null
    input_date?: Date | string
    invoice_number?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutUsersNestedInput
    sales?: salesUpdateManyWithoutUserNestedInput
    purchases?: purchasesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: StringFieldUpdateOperationsInput | string
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: StringFieldUpdateOperationsInput | string
  }

  export type subscriptionsUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subscriptionsUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subscriptionsUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type suppliersUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUpdateManyWithoutSupplierNestedInput
    purchases?: purchasesUpdateManyWithoutSupplierNestedInput
  }

  export type suppliersUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUncheckedUpdateManyWithoutSupplierNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type suppliersUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: suppliersUpdateOneWithoutProductsNestedInput
    sales_items?: sales_itemsUpdateManyWithoutProductNestedInput
    purchase_items?: purchases_itemsUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplier_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sales_items?: sales_itemsUncheckedUpdateManyWithoutProductNestedInput
    purchase_items?: purchases_itemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplier_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customersUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: salesUpdateManyWithoutCustomerNestedInput
  }

  export type customersUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: salesUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customersUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type salesUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutSalesNestedInput
    customer?: customersUpdateOneRequiredWithoutSalesNestedInput
    items?: sales_itemsUpdateManyWithoutSaleNestedInput
  }

  export type salesUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: sales_itemsUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type salesUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type purchasesUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    input_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutPurchasesNestedInput
    supplier?: suppliersUpdateOneWithoutPurchasesNestedInput
    items?: purchases_itemsUpdateManyWithoutPurchaseNestedInput
  }

  export type purchasesUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    supplier_id?: NullableStringFieldUpdateOperationsInput | string | null
    input_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: purchases_itemsUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type purchasesUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    supplier_id?: NullableStringFieldUpdateOperationsInput | string | null
    input_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type salesCreateManyUserInput = {
    id?: string
    company_id: string
    customer_id: string
    sale_date?: Date | string
    notes?: string | null
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type purchasesCreateManyUserInput = {
    id?: string
    company_id: string
    supplier_id?: string | null
    input_date?: Date | string
    invoice_number?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type salesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutSalesNestedInput
    customer?: customersUpdateOneRequiredWithoutSalesNestedInput
    items?: sales_itemsUpdateManyWithoutSaleNestedInput
  }

  export type salesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: sales_itemsUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type salesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type purchasesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    input_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutPurchasesNestedInput
    supplier?: suppliersUpdateOneWithoutPurchasesNestedInput
    items?: purchases_itemsUpdateManyWithoutPurchaseNestedInput
  }

  export type purchasesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    supplier_id?: NullableStringFieldUpdateOperationsInput | string | null
    input_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: purchases_itemsUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type purchasesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    supplier_id?: NullableStringFieldUpdateOperationsInput | string | null
    input_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsCreateManySupplierInput = {
    id?: string
    company_id: string
    name: string
    description?: string | null
    sku?: string | null
    price: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type purchasesCreateManySupplierInput = {
    id?: string
    company_id: string
    user_id: string
    input_date?: Date | string
    invoice_number?: string | null
    notes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type productsUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutProductsNestedInput
    sales_items?: sales_itemsUpdateManyWithoutProductNestedInput
    purchase_items?: purchases_itemsUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sales_items?: sales_itemsUncheckedUpdateManyWithoutProductNestedInput
    purchase_items?: purchases_itemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type purchasesUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    input_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutPurchasesNestedInput
    user?: usersUpdateOneRequiredWithoutPurchasesNestedInput
    items?: purchases_itemsUpdateManyWithoutPurchaseNestedInput
  }

  export type purchasesUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    input_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: purchases_itemsUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type purchasesUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    input_date?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sales_itemsCreateManyProductInput = {
    id?: string
    sales_id: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type purchases_itemsCreateManyProductInput = {
    id?: string
    purchases_id: string
    quantity: number
    cost: Decimal | DecimalJsLike | number | string
  }

  export type sales_itemsUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale?: salesUpdateOneRequiredWithoutItemsNestedInput
  }

  export type sales_itemsUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sales_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type sales_itemsUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sales_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type purchases_itemsUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase?: purchasesUpdateOneRequiredWithoutItemsNestedInput
  }

  export type purchases_itemsUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchases_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type purchases_itemsUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchases_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type salesCreateManyCustomerInput = {
    id?: string
    company_id: string
    user_id: string
    sale_date?: Date | string
    notes?: string | null
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type salesUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companiesUpdateOneRequiredWithoutSalesNestedInput
    user?: usersUpdateOneRequiredWithoutSalesNestedInput
    items?: sales_itemsUpdateManyWithoutSaleNestedInput
  }

  export type salesUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: sales_itemsUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type salesUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sales_itemsCreateManySaleInput = {
    id?: string
    product_id: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type sales_itemsUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: productsUpdateOneRequiredWithoutSales_itemsNestedInput
  }

  export type sales_itemsUncheckedUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type sales_itemsUncheckedUpdateManyWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type purchases_itemsCreateManyPurchaseInput = {
    id?: string
    product_id: string
    quantity: number
    cost: Decimal | DecimalJsLike | number | string
  }

  export type purchases_itemsUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: productsUpdateOneRequiredWithoutPurchase_itemsNestedInput
  }

  export type purchases_itemsUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type purchases_itemsUncheckedUpdateManyWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}