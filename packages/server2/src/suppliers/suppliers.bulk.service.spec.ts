import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersService } from './suppliers.service';
import { PrismaService } from '../prisma/prisma.service';
import { BulkCreateSupplierDto } from './dto/bulk-create-supplier.dto';

describe('SuppliersService - Bulk Operations', () => {
  let service: SuppliersService;
  let prisma: PrismaService;

  const mockCompanyId = '550e8400-e29b-41d4-a716-446655440001';

  const mockCreatedSupplier = {
    id: '550e8400-e29b-41d4-a716-446655440000',
    company_id: mockCompanyId,
    name: 'Fornecedor Teste',
    email: 'fornecedor@test.com',
    phone: '11999999999',
    address: 'Rua A, 123',
    contact_name: 'João',
    website: 'https://fornecedor.com',
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
    company: { id: mockCompanyId, name: 'Test Company' },
  };

  const mockPrismaService = {
    suppliers: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SuppliersService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<SuppliersService>(SuppliersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('bulkCreate', () => {
    it('should create multiple suppliers successfully', async () => {
      const bulkDto: BulkCreateSupplierDto = {
        company_id: mockCompanyId,
        suppliers: [
          { name: 'Fornecedor 1', email: 'f1@test.com' },
          { name: 'Fornecedor 2', email: 'f2@test.com' },
          { name: 'Fornecedor 3', email: 'f3@test.com' },
        ],
      };

      mockPrismaService.suppliers.create.mockResolvedValue(mockCreatedSupplier);

      const result = await service.bulkCreate(bulkDto);

      expect(result.total).toBe(3);
      expect(result.success).toBe(3);
      expect(result.failed).toBe(0);
      expect(prisma.suppliers.create).toHaveBeenCalledTimes(3);
    });

    it('should handle partial failures', async () => {
      const bulkDto: BulkCreateSupplierDto = {
        company_id: mockCompanyId,
        suppliers: [
          { name: 'Fornecedor 1' },
          { name: 'Fornecedor 2' },
        ],
      };

      mockPrismaService.suppliers.create
        .mockResolvedValueOnce(mockCreatedSupplier)
        .mockRejectedValueOnce(new Error('Duplicate'));

      const result = await service.bulkCreate(bulkDto);

      expect(result.success).toBe(1);
      expect(result.failed).toBe(1);
    });

    it('should handle empty suppliers array', async () => {
      const bulkDto: BulkCreateSupplierDto = {
        company_id: mockCompanyId,
        suppliers: [],
      };

      const result = await service.bulkCreate(bulkDto);

      expect(result.total).toBe(0);
      expect(result.success).toBe(0);
      expect(prisma.suppliers.create).not.toHaveBeenCalled();
    });
  });

  describe('findByName', () => {
    it('should find suppliers by name', async () => {
      mockPrismaService.suppliers.findMany.mockResolvedValue([mockCreatedSupplier]);

      const result = await service.findByName('Fornecedor Teste', mockCompanyId);

      expect(result).toHaveLength(1);
    });
  });
});
