import { Test, TestingModule } from '@nestjs/testing';
import { PurchasesService } from './purchases.service';
import { PrismaService } from '../prisma/prisma.service';
import { BulkCreatePurchaseDto } from './dto/bulk-create-purchase.dto';

describe('PurchasesService - Bulk Operations', () => {
  let service: PurchasesService;
  let prisma: PrismaService;

  const mockCompanyId = '550e8400-e29b-41d4-a716-446655440001';
  const mockUserId = '550e8400-e29b-41d4-a716-446655440002';
  const mockSupplierId = '550e8400-e29b-41d4-a716-446655440003';
  const mockProductId = '550e8400-e29b-41d4-a716-446655440004';

  const mockCreatedPurchase = {
    id: '550e8400-e29b-41d4-a716-446655440000',
    company_id: mockCompanyId,
    user_id: mockUserId,
    supplier_id: mockSupplierId,
    invoice_number: 'NF-001',
    notes: 'Test purchase',
    input_date: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
    company: { id: mockCompanyId, name: 'Test Company' },
    user: { id: mockUserId, name: 'Test User' },
    supplier: { id: mockSupplierId, name: 'Fornecedor Teste' },
    items: [],
  };

  const mockPrismaService = {
    purchases: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    purchases_items: {
      deleteMany: jest.fn(),
    },
    suppliers: {
      findMany: jest.fn(),
    },
    products: {
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurchasesService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<PurchasesService>(PurchasesService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('bulkCreate', () => {
    it('should create purchase with resolved supplier and products', async () => {
      const bulkDto: BulkCreatePurchaseDto = {
        company_id: mockCompanyId,
        user_id: mockUserId,
        purchases: [
          {
            supplier_name: 'Fornecedor Teste',
            invoice_number: 'NF-001',
            items: [{ product_name: 'Produto Teste', quantity: 10, cost: 25 }],
          },
        ],
      };

      mockPrismaService.suppliers.findMany.mockResolvedValue([
        { id: mockSupplierId, name: 'Fornecedor Teste' },
      ]);
      mockPrismaService.products.findMany.mockResolvedValue([
        { id: mockProductId, name: 'Produto Teste' },
      ]);
      mockPrismaService.purchases.create.mockResolvedValue(mockCreatedPurchase);

      const result = await service.bulkCreate(bulkDto);

      expect(result.success).toBe(1);
      expect(result.failed).toBe(0);
      expect(prisma.suppliers.findMany).toHaveBeenCalled();
      expect(prisma.products.findMany).toHaveBeenCalled();
    });

    it('should create purchase without supplier', async () => {
      const bulkDto: BulkCreatePurchaseDto = {
        company_id: mockCompanyId,
        user_id: mockUserId,
        purchases: [
          {
            items: [{ product_name: 'Produto Teste', quantity: 5, cost: 15 }],
          },
        ],
      };

      mockPrismaService.products.findMany.mockResolvedValue([
        { id: mockProductId, name: 'Produto Teste' },
      ]);
      mockPrismaService.purchases.create.mockResolvedValue(mockCreatedPurchase);

      const result = await service.bulkCreate(bulkDto);

      expect(result.success).toBe(1);
      expect(prisma.suppliers.findMany).not.toHaveBeenCalled();
    });

    it('should fail when supplier not found', async () => {
      const bulkDto: BulkCreatePurchaseDto = {
        company_id: mockCompanyId,
        user_id: mockUserId,
        purchases: [
          {
            supplier_name: 'Inexistente',
            items: [{ product_name: 'Produto', quantity: 1, cost: 10 }],
          },
        ],
      };

      mockPrismaService.suppliers.findMany.mockResolvedValue([]);

      const result = await service.bulkCreate(bulkDto);

      expect(result.failed).toBe(1);
      expect(result.errors[0].error).toContain('não encontrado');
    });

    it('should fail when product not found', async () => {
      const bulkDto: BulkCreatePurchaseDto = {
        company_id: mockCompanyId,
        user_id: mockUserId,
        purchases: [
          {
            items: [{ product_name: 'Produto Inexistente', quantity: 1, cost: 10 }],
          },
        ],
      };

      mockPrismaService.products.findMany.mockResolvedValue([]);

      const result = await service.bulkCreate(bulkDto);

      expect(result.failed).toBe(1);
      expect(result.errors[0].error).toContain('Produto');
    });
  });
});
