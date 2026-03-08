import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { PrismaService } from '../prisma/prisma.service';
import { BulkCreateProductDto } from './dto/bulk-create-product.dto';

describe('ProductsService - Bulk Operations', () => {
  let service: ProductsService;
  let prisma: PrismaService;

  const mockCompanyId = '550e8400-e29b-41d4-a716-446655440001';
  const mockSupplierId = '550e8400-e29b-41d4-a716-446655440002';

  const mockCreatedProduct = {
    id: '550e8400-e29b-41d4-a716-446655440000',
    company_id: mockCompanyId,
    supplier_id: mockSupplierId,
    name: 'Produto Teste',
    description: 'Descrição do produto',
    sku: 'SKU001',
    price: 99.9,
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
    company: { id: mockCompanyId, name: 'Test Company' },
    supplier: { id: mockSupplierId, name: 'Fornecedor Teste' },
  };

  const mockPrismaService = {
    products: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    suppliers: {
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('bulkCreate', () => {
    it('should create multiple products successfully', async () => {
      const bulkDto: BulkCreateProductDto = {
        company_id: mockCompanyId,
        products: [
          { name: 'Produto 1', price: 10 },
          { name: 'Produto 2', price: 20 },
          { name: 'Produto 3', price: 30 },
        ],
      };

      mockPrismaService.products.create.mockResolvedValue(mockCreatedProduct);

      const result = await service.bulkCreate(bulkDto);

      expect(result.total).toBe(3);
      expect(result.success).toBe(3);
      expect(result.failed).toBe(0);
      expect(prisma.products.create).toHaveBeenCalledTimes(3);
    });

    it('should resolve supplier_name to supplier_id', async () => {
      const bulkDto: BulkCreateProductDto = {
        company_id: mockCompanyId,
        products: [{ name: 'Produto 1', price: 10, supplier_name: 'Fornecedor Teste' }],
      };

      mockPrismaService.suppliers.findMany.mockResolvedValue([
        { id: mockSupplierId, name: 'Fornecedor Teste' },
      ]);
      mockPrismaService.products.create.mockResolvedValue(mockCreatedProduct);

      const result = await service.bulkCreate(bulkDto);

      expect(result.success).toBe(1);
      expect(prisma.suppliers.findMany).toHaveBeenCalled();
    });

    it('should fail when supplier not found', async () => {
      const bulkDto: BulkCreateProductDto = {
        company_id: mockCompanyId,
        products: [{ name: 'Produto 1', price: 10, supplier_name: 'Inexistente' }],
      };

      mockPrismaService.suppliers.findMany.mockResolvedValue([]);

      const result = await service.bulkCreate(bulkDto);

      expect(result.failed).toBe(1);
      expect(result.errors[0].error).toContain('não encontrado');
    });

    it('should fail when multiple suppliers with same name', async () => {
      const bulkDto: BulkCreateProductDto = {
        company_id: mockCompanyId,
        products: [{ name: 'Produto 1', price: 10, supplier_name: 'Duplicado' }],
      };

      mockPrismaService.suppliers.findMany.mockResolvedValue([
        { id: 'id-1', name: 'Duplicado' },
        { id: 'id-2', name: 'Duplicado' },
      ]);

      const result = await service.bulkCreate(bulkDto);

      expect(result.failed).toBe(1);
      expect(result.errors[0].error).toContain('Múltiplos');
    });
  });

  describe('findByName', () => {
    it('should find products by name', async () => {
      mockPrismaService.products.findMany.mockResolvedValue([mockCreatedProduct]);

      const result = await service.findByName('Produto Teste', mockCompanyId);

      expect(result).toHaveLength(1);
      expect(prisma.products.findMany).toHaveBeenCalledWith({
        where: {
          name: { equals: 'Produto Teste', mode: 'insensitive' },
          company_id: mockCompanyId,
        },
      });
    });
  });
});
