# Mimic REST API Server

REST API completa construída com NestJS, Prisma e PostgreSQL.

## 🚀 Tecnologias

- **NestJS** - Framework Node.js progressivo
- **Prisma** - ORM moderno para Node.js e TypeScript
- **PostgreSQL** - Banco de dados relacional
- **Swagger** - Documentação automática da API
- **JWT** - Autenticação via JSON Web Tokens
- **TypeScript** - Superset tipado do JavaScript

## 📋 Pré-requisitos

- Node.js (v18 ou superior)
- PostgreSQL (v14 ou superior)
- npm ou yarn

## 🔧 Instalação

1. **Clone o repositório e navegue até o diretório**

```bash
cd packages/server2
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

Copie o arquivo `.env.example` para `.env` e configure as variáveis:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
JWT_SECRET=sua-chave-secreta-aqui
JWT_EXPIRES_IN=24h
PORT=3001
NODE_ENV=development
```

4. **Execute as migrações do Prisma**

```bash
npm run prisma:generate
npm run prisma:migrate
```

5. **Inicie o servidor**

```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run build
npm run start:prod
```

## 📚 Documentação da API

Após iniciar o servidor, acesse a documentação Swagger em:

```
http://localhost:3001/api
```

## 🔐 Autenticação

A API utiliza JWT (JSON Web Tokens) para autenticação. Para acessar endpoints protegidos:

1. Faça login através do endpoint `POST /auth/login`
2. Use o token retornado no header `Authorization: Bearer {token}`

## 📦 Módulos da API

### Auth
- `POST /auth/login` - Login de usuário

### Users
- `GET /users` - Listar todos os usuários
- `GET /users/:id` - Buscar usuário por ID
- `POST /users` - Criar novo usuário
- `PATCH /users/:id` - Atualizar usuário
- `DELETE /users/:id` - Deletar usuário

### Roles
- `GET /roles` - Listar todos os roles
- `GET /roles/:id` - Buscar role por ID
- `POST /roles` - Criar novo role
- `PATCH /roles/:id` - Atualizar role
- `DELETE /roles/:id` - Deletar role

### Companies
- `GET /companies` - Listar todas as empresas
- `GET /companies/:id` - Buscar empresa por ID
- `POST /companies` - Criar nova empresa
- `PATCH /companies/:id` - Atualizar empresa
- `DELETE /companies/:id` - Deletar empresa

### Customers
- `GET /customers` - Listar todos os clientes
- `GET /customers/:id` - Buscar cliente por ID
- `POST /customers` - Criar novo cliente
- `PATCH /customers/:id` - Atualizar cliente
- `DELETE /customers/:id` - Deletar cliente

### Products
- `GET /products` - Listar todos os produtos
- `GET /products/:id` - Buscar produto por ID
- `POST /products` - Criar novo produto
- `PATCH /products/:id` - Atualizar produto
- `DELETE /products/:id` - Deletar produto

### Suppliers
- `GET /suppliers` - Listar todos os fornecedores
- `GET /suppliers/:id` - Buscar fornecedor por ID
- `POST /suppliers` - Criar novo fornecedor
- `PATCH /suppliers/:id` - Atualizar fornecedor
- `DELETE /suppliers/:id` - Deletar fornecedor

### Purchases
- `GET /purchases` - Listar todas as compras
- `GET /purchases/:id` - Buscar compra por ID
- `POST /purchases` - Criar nova compra (com itens)
- `PATCH /purchases/:id` - Atualizar compra
- `DELETE /purchases/:id` - Deletar compra

### Sales
- `GET /sales` - Listar todas as vendas
- `GET /sales/:id` - Buscar venda por ID
- `POST /sales` - Criar nova venda (com itens)
- `PATCH /sales/:id` - Atualizar venda
- `DELETE /sales/:id` - Deletar venda

## 🗄️ Estrutura do Banco de Dados

O banco de dados possui as seguintes tabelas principais:

- **roles** - Papéis de usuário (Admin, Manager, etc.)
- **companies** - Empresas/Organizações
- **users** - Usuários do sistema
- **customers** - Clientes
- **suppliers** - Fornecedores
- **products** - Produtos
- **sales** - Vendas
- **sales_items** - Itens de venda
- **purchases** - Compras
- **purchases_items** - Itens de compra
- **subscriptions** - Assinaturas das empresas

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run start:dev        # Inicia em modo de desenvolvimento com hot-reload
npm run start:debug      # Inicia em modo debug

# Build e Produção
npm run build            # Compila o projeto
npm run start:prod       # Inicia em modo produção

# Testes
npm run test             # Executa testes unitários
npm run test:watch       # Executa testes em modo watch
npm run test:cov         # Executa testes com cobertura
npm run test:e2e         # Executa testes end-to-end

# Prisma
npm run prisma:generate  # Gera o Prisma Client
npm run prisma:migrate   # Executa migrações
npm run prisma:studio    # Abre o Prisma Studio
npm run prisma:seed      # Executa seeds do banco

# Qualidade de Código
npm run lint             # Executa o linter
npm run format           # Formata o código
```

## 🔄 Diferenças do Server Original

Este servidor (`server2`) é uma reimplementação completa do servidor original com as seguintes diferenças:

- ✅ **REST API pura** - Sem GraphQL, apenas endpoints REST
- ✅ **Swagger integrado** - Documentação automática e interativa
- ✅ **Validação completa** - Uso de class-validator em todos os DTOs
- ✅ **Estrutura consistente** - Todos os módulos seguem o mesmo padrão
- ✅ **Integração Prisma** - Todos os módulos integrados ao banco de dados
- ✅ **Autenticação JWT** - Sistema de autenticação completo

## 📝 Exemplo de Uso

### Login
```bash
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'
```

### Criar Produto (com autenticação)
```bash
curl -X POST http://localhost:3001/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer {seu-token-jwt}" \
  -d '{
    "company_id": "uuid-da-empresa",
    "name": "Produto Teste",
    "price": 99.90,
    "sku": "SKU001"
  }'
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença UNLICENSED.

## 👤 Autor

**igorgomes98**

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
