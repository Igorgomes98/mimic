# Seeds do Banco de Dados

Este diretório contém os scripts de seed para popular o banco de dados com dados iniciais.

## 📦 Dados Criados

As seeds criam os seguintes dados:

### 1. **Roles (4)**
- `admin` - Administrador do sistema
- `manager` - Gerente da empresa
- `user` - Usuário comum
- `super_admin` - Super Administrador do sistema

### 2. **Companies (2)**
- **TechCorp Solutions**
  - Email: contato@techcorp.com.br
  - CNPJ: 12.345.678/0001-90
  - Endereço: Av. Paulista, 1000 - São Paulo/SP

- **Comercial SP Ltda**
  - Email: info@comercialsp.com.br
  - CNPJ: 98.765.432/0001-12
  - Endereço: Rua Augusta, 500 - São Paulo/SP

### 3. **Users (4)**
Todos os usuários têm a senha: **123456**

- **admin@techcorp.com.br** (João Silva)
  - Role: admin
  - Company: TechCorp Solutions

- **gerente@techcorp.com.br** (Maria Santos)
  - Role: manager
  - Company: TechCorp Solutions

- **vendedor@comercialsp.com.br** (Carlos Oliveira)
  - Role: user
  - Company: Comercial SP Ltda

- **igor@zukunfty.com.br** (Igor Gomes)
  - Role: super_admin
  - Company: TechCorp Solutions

### 4. **Subscriptions (2)**
- TechCorp Solutions: Plano Premium (expira em 31/12/2025)
- Comercial SP Ltda: Plano Basic (expira em 30/06/2025)

### 5. **Suppliers (3)**
- TechSupply Distribuidora
- InfoParts Brasil
- Atacado Office

### 6. **Products (5)**
- Notebook Dell Inspiron 15 - R$ 2.899,90
- Mouse Logitech MX Master 3 - R$ 459,90
- Teclado Mecânico Corsair K95 - R$ 899,90
- Cadeira Ergonômica Office Pro - R$ 1.299,90
- Mesa para Escritório Executive - R$ 899,90

### 7. **Customers (3)**
- Empresa ABC Ltda
- Pedro Henrique Martins
- Startup Innovation

### 8. **Purchases (2)**
- Compra de equipamentos de informática (5 itens)
- Mobiliário para novo escritório (2 itens)

### 9. **Sales (3)**
- Venda para Empresa ABC Ltda (2 itens)
- Venda para Pedro Henrique Martins (1 item)
- Venda para Startup Innovation (2 itens)

## 🚀 Como Executar

### Executar seeds manualmente:
```bash
npm run seed
```

### Executar seeds via Prisma:
```bash
npx prisma db seed
```

### Resetar banco e executar seeds:
```bash
npm run prisma:reset
```

## 🔑 Credenciais de Teste

Use qualquer um dos emails abaixo com a senha **123456**:

- admin@techcorp.com.br
- gerente@techcorp.com.br
- vendedor@comercialsp.com.br
- igor@zukunfty.com.br

## 📝 Notas

- As seeds usam `upsert` para evitar duplicação de dados
- Os IDs são fixos para facilitar testes e desenvolvimento
- Todos os dados são fictícios e apenas para desenvolvimento
- As senhas são hasheadas com bcrypt (10 rounds)
