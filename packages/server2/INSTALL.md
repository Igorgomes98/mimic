# Guia de Instalação - Mimic REST API Server

## 📦 Instalação Rápida

### 1. Instalar Dependências

```bash
cd packages/server2
npm install
```

### 2. Configurar Banco de Dados

Certifique-se de que o PostgreSQL está rodando. Você pode usar o mesmo banco do `server` original ou criar um novo.

**Opção A: Usar o mesmo banco do server original**
```bash
# Copie o .env do server original
cp ../server/.env .env
```

**Opção B: Criar novo banco**
```bash
# Crie o arquivo .env
cp .env.example .env

# Edite o .env e configure a DATABASE_URL
# DATABASE_URL="postgresql://postgres:password@localhost:5432/mimic_db?schema=public"
```

### 3. Gerar Prisma Client e Executar Migrações

```bash
# Gerar o Prisma Client
npm run prisma:generate

# Executar migrações (cria as tabelas)
npm run prisma:migrate

# (Opcional) Popular o banco com dados de teste
npm run prisma:seed
```

### 4. Iniciar o Servidor

```bash
# Modo desenvolvimento (com hot-reload)
npm run start:dev

# O servidor estará disponível em http://localhost:3001
# Documentação Swagger em http://localhost:3001/api
```

## 🔧 Configuração Detalhada

### Variáveis de Ambiente

Edite o arquivo `.env` com as seguintes variáveis:

```env
# Database
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_banco?schema=public"

# JWT
JWT_SECRET=sua-chave-secreta-muito-segura-aqui
JWT_EXPIRES_IN=24h

# App
PORT=3001
NODE_ENV=development
```

### Porta Diferente

Se a porta 3001 já estiver em uso, você pode alterá-la no arquivo `.env`:

```env
PORT=3002
```

## 🐳 Usando Docker (Opcional)

Se você quiser usar Docker para o PostgreSQL:

```bash
# Subir o PostgreSQL com Docker
docker run --name mimic-postgres \
  -e POSTGRES_PASSWORD=password123 \
  -e POSTGRES_DB=mimic_db \
  -p 5432:5432 \
  -d postgres:14

# Aguarde alguns segundos para o banco iniciar
sleep 5

# Execute as migrações
npm run prisma:migrate
```

## 🧪 Testando a Instalação

### 1. Verificar se o servidor está rodando

```bash
curl http://localhost:3001
```

### 2. Acessar a documentação Swagger

Abra no navegador: `http://localhost:3001/api`

### 3. Testar o endpoint de login

Primeiro, você precisa criar um usuário e role. Você pode fazer isso via Prisma Studio:

```bash
npm run prisma:studio
```

Ou criar via SQL direto no banco:

```sql
-- Criar um role
INSERT INTO roles (id, name, description) 
VALUES ('550e8400-e29b-41d4-a716-446655440000', 'Admin', 'Administrator role');

-- Criar um usuário (senha: password123)
INSERT INTO users (id, name, email, password_hash, role_id, is_active) 
VALUES (
  '550e8400-e29b-41d4-a716-446655440001',
  'Admin User',
  'admin@example.com',
  '$2b$10$YourHashedPasswordHere',
  '550e8400-e29b-41d4-a716-446655440000',
  true
);
```

Para gerar o hash da senha em Node.js:

```javascript
const bcrypt = require('bcrypt');
const hash = await bcrypt.hash('password123', 10);
console.log(hash);
```

Depois teste o login:

```bash
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "password123"
  }'
```

## ❗ Problemas Comuns

### Erro: "Cannot find module '@nestjs/common'"

```bash
# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Prisma Client not generated"

```bash
npm run prisma:generate
```

### Erro: "Port 3001 already in use"

Altere a porta no arquivo `.env` ou mate o processo que está usando a porta:

```bash
# Linux/Mac
lsof -ti:3001 | xargs kill -9

# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F
```

### Erro de conexão com o banco de dados

Verifique se:
1. O PostgreSQL está rodando
2. As credenciais no `.env` estão corretas
3. O banco de dados existe
4. O usuário tem permissões adequadas

```bash
# Testar conexão com o banco
psql -h localhost -U postgres -d mimic_db
```

## 🚀 Próximos Passos

Após a instalação bem-sucedida:

1. ✅ Acesse a documentação Swagger em `http://localhost:3001/api`
2. ✅ Crie usuários, roles e empresas
3. ✅ Teste os endpoints da API
4. ✅ Integre com seu frontend

## 📚 Recursos Adicionais

- [Documentação NestJS](https://docs.nestjs.com/)
- [Documentação Prisma](https://www.prisma.io/docs/)
- [Documentação Swagger](https://swagger.io/docs/)

## 💡 Dicas

- Use o Prisma Studio para visualizar e editar dados: `npm run prisma:studio`
- Mantenha o `.env` fora do controle de versão (já está no `.gitignore`)
- Para produção, use variáveis de ambiente seguras e não commite o `.env`
- Configure CORS adequadamente para produção no `main.ts`

---

Se você encontrar algum problema não listado aqui, abra uma issue no repositório.
