import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seeds...');
  
  // Gerar UUIDs para todas as entidades
  const uuids = {
    subscription1: randomUUID(),
    subscription2: randomUUID(),
    supplier1: randomUUID(),
    supplier2: randomUUID(),
    supplier3: randomUUID(),
    customer1: randomUUID(),
    customer2: randomUUID(),
    customer3: randomUUID(),
    purchase1: randomUUID(),
    purchase2: randomUUID(),
    sale1: randomUUID(),
    sale2: randomUUID(),
    sale3: randomUUID(),
  };

  // 1. Criar Roles
  console.log('Criando roles...');
  const adminRole = await prisma.roles.upsert({
    where: { name: 'admin' },
    update: {},
    create: {
      name: 'admin',
      description: 'Administrador do sistema',
    },
  });

  const managerRole = await prisma.roles.upsert({
    where: { name: 'manager' },
    update: {},
    create: {
      name: 'manager',
      description: 'Gerente da empresa',
    },
  });

  const userRole = await prisma.roles.upsert({
    where: { name: 'user' },
    update: {},
    create: {
      name: 'user',
      description: 'Usuário comum',
    },
  });

  const superAdminRole = await prisma.roles.upsert({
    where: { name: 'super_admin' },
    update: {},
    create: {
      name: 'super_admin',
      description: 'Super Administrador do sistema',
    },
  });

  // 2. Criar Companies
  console.log('Criando empresas...');
  const company1 = await prisma.companies.upsert({
    where: { email: 'contato@techcorp.com.br' },
    update: {},
    create: {
      name: 'TechCorp Solutions',
      email: 'contato@techcorp.com.br',
      phone: '(11) 3456-7890',
      cnpj: '12.345.678/0001-90',
      address: {
        street: 'Av. Paulista, 1000',
        city: 'São Paulo',
        state: 'SP',
        zipCode: '01310-100',
        country: 'Brasil'
      },
    },
  });

  const company2 = await prisma.companies.upsert({
    where: { email: 'info@comercialsp.com.br' },
    update: {},
    create: {
      name: 'Comercial SP Ltda',
      email: 'info@comercialsp.com.br',
      phone: '(11) 2345-6789',
      cnpj: '98.765.432/0001-12',
      address: {
        street: 'Rua Augusta, 500',
        city: 'São Paulo',
        state: 'SP',
        zipCode: '01305-000',
        country: 'Brasil'
      },
    },
  });

  // 3. Criar Users
  console.log('Criando usuários...');
  const hashedPassword = await bcrypt.hash('123456', 10);

  const adminUser = await prisma.users.upsert({
    where: { email: 'admin@techcorp.com.br' },
    update: {},
    create: {
      name: 'João Silva',
      email: 'admin@techcorp.com.br',
      password_hash: hashedPassword,
      role_id: adminRole.id,
      company_id: company1.id,
    },
  });

  const managerUser = await prisma.users.upsert({
    where: { email: 'gerente@techcorp.com.br' },
    update: {},
    create: {
      name: 'Maria Santos',
      email: 'gerente@techcorp.com.br',
      password_hash: hashedPassword,
      role_id: managerRole.id,
      company_id: company1.id,
    },
  });

  const normalUser = await prisma.users.upsert({
    where: { email: 'vendedor@comercialsp.com.br' },
    update: {},
    create: {
      name: 'Carlos Oliveira',
      email: 'vendedor@comercialsp.com.br',
      password_hash: hashedPassword,
      role_id: userRole.id,
      company_id: company2.id,
    },
  });

  const superAdminUser = await prisma.users.upsert({
    where: { email: 'igor@zukunfty.com.br' },
    update: {},
    create: {
      name: 'Igor Gomes',
      email: 'igor@zukunfty.com.br',
      password_hash: hashedPassword,
      role_id: superAdminRole.id,
      company_id: company1.id,
    },
  });

  // 4. Criar Subscriptions
  console.log('Criando assinaturas...');
  await prisma.subscriptions.upsert({
    where: { id: uuids.subscription1 },
    update: {},
    create: {
      id: uuids.subscription1,
      company_id: company1.id,
      plan_name: 'Premium',
      status: 'active',
      expires_at: new Date('2025-12-31'),
    },
  });

  await prisma.subscriptions.upsert({
    where: { id: uuids.subscription2 },
    update: {},
    create: {
      id: uuids.subscription2,
      company_id: company2.id,
      plan_name: 'Basic',
      status: 'active',
      expires_at: new Date('2025-06-30'),
    },
  });

  // 5. Criar Suppliers
  console.log('Criando fornecedores...');
  const supplier1 = await prisma.suppliers.upsert({
    where: { id: uuids.supplier1 },
    update: {},
    create: {
      id: uuids.supplier1,
      company_id: company1.id,
      name: 'TechSupply Distribuidora',
      email: 'vendas@techsupply.com.br',
      phone: '(11) 4567-8901',
      address: 'Rua das Flores, 123 - Vila Madalena, São Paulo - SP',
      contact_name: 'Roberto Lima',
      website: 'https://www.techsupply.com.br',
    },
  });

  const supplier2 = await prisma.suppliers.upsert({
    where: { id: uuids.supplier2 },
    update: {},
    create: {
      id: uuids.supplier2,
      company_id: company1.id,
      name: 'InfoParts Brasil',
      email: 'contato@infoparts.com.br',
      phone: '(21) 3456-7890',
      address: 'Av. Rio Branco, 456 - Centro, Rio de Janeiro - RJ',
      contact_name: 'Ana Paula Costa',
      website: 'https://www.infoparts.com.br',
    },
  });

  const supplier3 = await prisma.suppliers.upsert({
    where: { id: uuids.supplier3 },
    update: {},
    create: {
      id: uuids.supplier3,
      company_id: company2.id,
      name: 'Atacado Office',
      email: 'pedidos@atacadooffice.com.br',
      phone: '(11) 5678-9012',
      address: 'Rua Comercial, 789 - Bela Vista, São Paulo - SP',
      contact_name: 'Fernando Souza',
    },
  });

  // 6. Criar Products
  console.log('Criando produtos...');
  const product1 = await prisma.products.upsert({
    where: { sku: 'DELL-INS15-001' },
    update: {},
    create: {
      company_id: company1.id,
      supplier_id: supplier1.id,
      name: 'Notebook Dell Inspiron 15',
      description: 'Notebook Dell Inspiron 15 3000, Intel Core i5, 8GB RAM, 256GB SSD',
      sku: 'DELL-INS15-001',
      price: 2899.90,
    },
  });

  const product2 = await prisma.products.upsert({
    where: { sku: 'LOG-MX3-001' },
    update: {},
    create: {
      company_id: company1.id,
      supplier_id: supplier1.id,
      name: 'Mouse Logitech MX Master 3',
      description: 'Mouse wireless Logitech MX Master 3 para produtividade',
      sku: 'LOG-MX3-001',
      price: 459.90,
    },
  });

  const product3 = await prisma.products.upsert({
    where: { sku: 'COR-K95-001' },
    update: {},
    create: {
      company_id: company1.id,
      supplier_id: supplier2.id,
      name: 'Teclado Mecânico Corsair K95',
      description: 'Teclado mecânico gamer Corsair K95 RGB Platinum XT',
      sku: 'COR-K95-001',
      price: 899.90,
    },
  });

  const product4 = await prisma.products.upsert({
    where: { sku: 'OFF-CHAIR-001' },
    update: {},
    create: {
      company_id: company2.id,
      supplier_id: supplier3.id,
      name: 'Cadeira Ergonômica Office Pro',
      description: 'Cadeira ergonômica para escritório com apoio lombar',
      sku: 'OFF-CHAIR-001',
      price: 1299.90,
    },
  });

  const product5 = await prisma.products.upsert({
    where: { sku: 'OFF-DESK-001' },
    update: {},
    create: {
      company_id: company2.id,
      supplier_id: supplier3.id,
      name: 'Mesa para Escritório Executive',
      description: 'Mesa executiva para escritório em MDF com gavetas',
      sku: 'OFF-DESK-001',
      price: 899.90,
    },
  });

  // 7. Criar Customers
  console.log('Criando clientes...');
  const customer1 = await prisma.customers.upsert({
    where: { id: uuids.customer1 },
    update: {},
    create: {
      id: uuids.customer1,
      company_id: company1.id,
      name: 'Empresa ABC Ltda',
      email: 'contato@empresaabc.com.br',
      phone: '(11) 9876-5432',
      document: '11.222.333/0001-44',
      address: 'Rua Exemplo, 100 - Jardins, São Paulo - SP',
    },
  });

  const customer2 = await prisma.customers.upsert({
    where: { id: uuids.customer2 },
    update: {},
    create: {
      id: uuids.customer2,
      company_id: company1.id,
      name: 'Pedro Henrique Martins',
      email: 'pedro.martins@email.com',
      phone: '(11) 98765-4321',
      document: '123.456.789-00',
      address: 'Av. Principal, 200 - Moema, São Paulo - SP',
    },
  });

  const customer3 = await prisma.customers.upsert({
    where: { id: uuids.customer3 },
    update: {},
    create: {
      id: uuids.customer3,
      company_id: company2.id,
      name: 'Startup Innovation',
      email: 'hello@startupinnovation.com',
      phone: '(11) 91234-5678',
      document: '22.333.444/0001-55',
      address: 'Rua Startup, 300 - Vila Olímpia, São Paulo - SP',
    },
  });

  // 8. Criar Purchases
  console.log('Criando compras...');
  const purchase1 = await prisma.purchases.upsert({
    where: { id: uuids.purchase1 },
    update: {},
    create: {
      id: uuids.purchase1,
      company_id: company1.id,
      user_id: managerUser.id,
      supplier_id: supplier1.id,
      invoice_number: 'NF-001234',
      notes: 'Compra de equipamentos de informática para escritório',
    },
  });

  const purchase2 = await prisma.purchases.upsert({
    where: { id: uuids.purchase2 },
    update: {},
    create: {
      id: uuids.purchase2,
      company_id: company2.id,
      user_id: normalUser.id,
      supplier_id: supplier3.id,
      invoice_number: 'NF-005678',
      notes: 'Mobiliário para novo escritório',
    },
  });

  // 9. Criar Purchase Items
  console.log('Criando itens de compra...');
  await prisma.purchases_items.deleteMany({
    where: {
      purchases_id: {
        in: [purchase1.id, purchase2.id]
      }
    }
  });

  await prisma.purchases_items.createMany({
    data: [
      {
        purchases_id: purchase1.id,
        product_id: product1.id,
        quantity: 5,
        cost: 2750.00,
      },
      {
        purchases_id: purchase1.id,
        product_id: product2.id,
        quantity: 10,
        cost: 420.00,
      },
      {
        purchases_id: purchase1.id,
        product_id: product3.id,
        quantity: 3,
        cost: 850.00,
      },
      {
        purchases_id: purchase2.id,
        product_id: product4.id,
        quantity: 8,
        cost: 1150.00,
      },
      {
        purchases_id: purchase2.id,
        product_id: product5.id,
        quantity: 4,
        cost: 800.00,
      },
    ],
  });

  // 10. Criar Sales
  console.log('Criando vendas...');
  const sale1 = await prisma.sales.upsert({
    where: { id: uuids.sale1 },
    update: {},
    create: {
      id: uuids.sale1,
      company_id: company1.id,
      user_id: adminUser.id,
      customer_id: customer1.id,
      payment_method: 'credit_card',
      notes: 'Venda de equipamentos para escritório corporativo',
    },
  });

  const sale2 = await prisma.sales.upsert({
    where: { id: uuids.sale2 },
    update: {},
    create: {
      id: uuids.sale2,
      company_id: company1.id,
      user_id: managerUser.id,
      customer_id: customer2.id,
      payment_method: 'pix',
      notes: 'Venda individual de periféricos',
    },
  });

  const sale3 = await prisma.sales.upsert({
    where: { id: uuids.sale3 },
    update: {},
    create: {
      id: uuids.sale3,
      company_id: company2.id,
      user_id: normalUser.id,
      customer_id: customer3.id,
      payment_method: 'bank_transfer',
      notes: 'Mobiliário para startup',
    },
  });

  // 11. Criar Sales Items
  console.log('Criando itens de venda...');
  await prisma.sales_items.deleteMany({
    where: {
      sales_id: {
        in: [sale1.id, sale2.id, sale3.id]
      }
    }
  });

  await prisma.sales_items.createMany({
    data: [
      {
        sales_id: sale1.id,
        product_id: product1.id,
        quantity: 3,
        price: 2899.90,
      },
      {
        sales_id: sale1.id,
        product_id: product3.id,
        quantity: 2,
        price: 899.90,
      },
      {
        sales_id: sale2.id,
        product_id: product2.id,
        quantity: 1,
        price: 459.90,
      },
      {
        sales_id: sale3.id,
        product_id: product4.id,
        quantity: 5,
        price: 1299.90,
      },
      {
        sales_id: sale3.id,
        product_id: product5.id,
        quantity: 2,
        price: 899.90,
      },
    ],
  });

  console.log('✅ Seeds executados com sucesso!');
  console.log('📊 Dados criados:');
  console.log('- 4 Roles');
  console.log('- 2 Companies');
  console.log('- 4 Users (senha: 123456)');
  console.log('  • admin@techcorp.com.br');
  console.log('  • gerente@techcorp.com.br');
  console.log('  • vendedor@comercialsp.com.br');
  console.log('  • igor@zukunfty.com.br');
  console.log('- 2 Subscriptions');
  console.log('- 3 Suppliers');
  console.log('- 5 Products');
  console.log('- 3 Customers');
  console.log('- 2 Purchases com 5 items');
  console.log('- 3 Sales com 5 items');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Erro ao executar seeds:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
