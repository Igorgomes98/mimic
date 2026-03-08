import { Test, TestingModule } from '@nestjs/testing';
import { SalesService } from './sales.service';
import { PrismaService } from '../prisma/prisma.service';
import { BulkCreateSaleDto } from './dto/bulk-create-sale.dto';

describe('SalesService - Bulk Operations', () => {
  let service: SalesService;
  let prisma: PrismaService;

  const mockCompanyId = '550e8400-e29b-41d4-a716-446655440001';
  const mockUserId = '550e8400-e29b-41d4-a716-446655440002';
  const mockCustomerId = '550e8400-e29b-41d4-a716-446655440003';
  const mockProductId = '550e8400-e29b-41d4-a716-446655440004';

  const mockCreatedSale = {
    id: '550e8400-e29b-41d4-a716-446655440000',
    company_id: mockCompanyId,
    user_id: mockUserId,
    customer_id: mockCustomerId,
    payment_method: 'credit_card',
    notes: 'Test sale',
    sale_date: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
    company: { id: mockCompanyId, name: 'Test Company' },
    user: { id: mockUserId, name: 'Test User' },
    customer: { id: mockCustomerId, name: 'Cliente Teste' },
    items: [],
  };

  const mockPrismaService = {
    sales: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    sales_items: {
      deleteMany: jest.fn(),
    },
    customers: {
      findMany: jest.fn(),
    },
    products: {
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SalesService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<SalesService>(SalesService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('bulkCreate', () => {
    it('should create sale with resolved customer and products', async () => {
      const bulkDto: BulkCreateSaleDto = {
        company_id: mockCompanyId,
        user_id: mockUserId,
        sales: [
          {
            customer_name: 'Cliente Teste',
            payment_method: 'credit_card',
            items: [{ product_name: 'Produto Teste', quantity: 2, price: 50 }],
          },
        ],
      };

      mockPrismaService.customers.findMany.mockResolvedValue([
        { id: mockCustomerId, name: 'Cliente Teste' },
      ]);
      mockPrismaService.products.findMany.mockResolvedValue([
        { id: mockProductId, name: 'Produto Teste' },
      ]);
      mockPrismaService.sales.create.mockResolvedValue(mockCreatedSale);

      const result = await service.bulkCreate(bulkDto);

      expect(result.success).toBe(1);
      expect(result.failed).toBe(0);
      expect(prisma.customers.findMany).toHaveBeenCalled();
      expect(prisma.products.findMany).toHaveBeenCalled();
    });

    it('should fail when customer not found', async () => {
      const bulkDto: BulkCreateSaleDto = {
        company_id: mockCompanyId,
        user_id: mockUserId,
        sales: [
          {
            customer_name: 'Inexistente',
            payment_method: 'cash',
            items: [{ product_name: 'Produto', quantity: 1, price: 10 }],
          },
        ],
      };

      mockPrismaService.customers.findMany.mockResolvedValue([]);

      const result = await service.bulkCreate(bulkDto);

      expect(result.failed).toBe(1);
      expect(result.errors[0].error).toContain('não encontrado');
    });

    it('should fail when product not found', async () => {
      const bulkDto: BulkCreateSaleDto = {
        company_id: mockCompanyId,
        user_id: mockUserId,
        sales: [
          {
            customer_name: 'Cliente Teste',
            payment_method: 'cash',
            items: [{ product_name: 'Produto Inexistente', quantity: 1, price: 10 }],
          },
        ],
      };

      mockPrismaService.customers.findMany.mockResolvedValue([
        { id: mockCustomerId, name: 'Cliente Teste' },
      ]);
      mockPrismaService.products.findMany.mockResolvedValue([]);

      const result = await service.bulkCreate(bulkDto);

      expect(result.failed).toBe(1);
      expect(result.errors[0].error).toContain('Produto');
    });

    it('should fail when multiple customers with same name', async () => {
      const bulkDto: BulkCreateSaleDto = {
        company_id: mockCompanyId,
        user_id: mockUserId,
        sales: [
          {
            customer_name: 'Duplicado',
            payment_method: 'cash',
            items: [{ product_name: 'Produto', quantity: 1, price: 10 }],
          },
        ],
      };

      mockPrismaService.customers.findMany.mockResolvedValue([
        { id: 'id-1', name: 'Duplicado' },
        { id: 'id-2', name: 'Duplicado' },
      ]);

      const result = await service.bulkCreate(bulkDto);

      expect(result.failed).toBe(1);
      expect(result.errors[0].error).toContain('Múltiplos');
    });
  });
});
