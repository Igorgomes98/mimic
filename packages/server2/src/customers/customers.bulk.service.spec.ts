import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from './customers.service';
import { PrismaService } from '../prisma/prisma.service';
import { BulkCreateCustomerDto } from './dto/bulk-create-customer.dto';

describe('CustomersService - Bulk Operations', () => {
  let service: CustomersService;
  let prisma: PrismaService;

  const mockCompanyId = '550e8400-e29b-41d4-a716-446655440001';

  const mockCreatedCustomer = {
    id: '550e8400-e29b-41d4-a716-446655440000',
    company_id: mockCompanyId,
    name: 'João Silva',
    email: 'joao@example.com',
    phone: '11999999999',
    document: '123.456.789-00',
    address: 'Rua A, 123',
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
    company: { id: mockCompanyId, name: 'Test Company' },
  };

  const mockPrismaService = {
    customers: {
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
        CustomersService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('bulkCreate', () => {
    it('should create multiple customers successfully', async () => {
      const bulkDto: BulkCreateCustomerDto = {
        company_id: mockCompanyId,
        customers: [
          { name: 'Cliente 1', email: 'cliente1@test.com' },
          { name: 'Cliente 2', email: 'cliente2@test.com' },
          { name: 'Cliente 3', email: 'cliente3@test.com' },
        ],
      };

      mockPrismaService.customers.create.mockResolvedValue(mockCreatedCustomer);

      const result = await service.bulkCreate(bulkDto);

      expect(result.total).toBe(3);
      expect(result.success).toBe(3);
      expect(result.failed).toBe(0);
      expect(result.created).toHaveLength(3);
      expect(result.errors).toHaveLength(0);
      expect(prisma.customers.create).toHaveBeenCalledTimes(3);
    });

    it('should handle partial failures', async () => {
      const bulkDto: BulkCreateCustomerDto = {
        company_id: mockCompanyId,
        customers: [
          { name: 'Cliente 1', email: 'cliente1@test.com' },
          { name: 'Cliente 2', email: 'cliente2@test.com' },
          { name: 'Cliente 3', email: 'cliente3@test.com' },
        ],
      };

      // First and third succeed, second fails
      mockPrismaService.customers.create
        .mockResolvedValueOnce(mockCreatedCustomer)
        .mockRejectedValueOnce(new Error('Duplicate email'))
        .mockResolvedValueOnce(mockCreatedCustomer);

      const result = await service.bulkCreate(bulkDto);

      expect(result.total).toBe(3);
      expect(result.success).toBe(2);
      expect(result.failed).toBe(1);
      expect(result.created).toHaveLength(2);
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0].index).toBe(1);
      expect(result.errors[0].error).toBe('Duplicate email');
    });

    it('should handle all failures', async () => {
      const bulkDto: BulkCreateCustomerDto = {
        company_id: mockCompanyId,
        customers: [
          { name: 'Cliente 1', email: 'cliente1@test.com' },
          { name: 'Cliente 2', email: 'cliente2@test.com' },
        ],
      };

      mockPrismaService.customers.create.mockRejectedValue(
        new Error('Database error'),
      );

      const result = await service.bulkCreate(bulkDto);

      expect(result.total).toBe(2);
      expect(result.success).toBe(0);
      expect(result.failed).toBe(2);
      expect(result.created).toHaveLength(0);
      expect(result.errors).toHaveLength(2);
    });

    it('should handle empty customers array', async () => {
      const bulkDto: BulkCreateCustomerDto = {
        company_id: mockCompanyId,
        customers: [],
      };

      const result = await service.bulkCreate(bulkDto);

      expect(result.total).toBe(0);
      expect(result.success).toBe(0);
      expect(result.failed).toBe(0);
      expect(result.created).toHaveLength(0);
      expect(result.errors).toHaveLength(0);
      expect(prisma.customers.create).not.toHaveBeenCalled();
    });

    it('should include customer data in error response', async () => {
      const customerData = { name: 'Failing Customer', email: 'fail@test.com' };
      const bulkDto: BulkCreateCustomerDto = {
        company_id: mockCompanyId,
        customers: [customerData],
      };

      mockPrismaService.customers.create.mockRejectedValue(
        new Error('Validation error'),
      );

      const result = await service.bulkCreate(bulkDto);

      expect(result.errors[0].data).toEqual(customerData);
    });
  });

  describe('findByName', () => {
    it('should find customers by name (case insensitive)', async () => {
      mockPrismaService.customers.findMany.mockResolvedValue([
        mockCreatedCustomer,
      ]);

      const result = await service.findByName('João Silva', mockCompanyId);

      expect(result).toHaveLength(1);
      expect(prisma.customers.findMany).toHaveBeenCalledWith({
        where: {
          name: {
            equals: 'João Silva',
            mode: 'insensitive',
          },
          company_id: mockCompanyId,
        },
      });
    });

    it('should return empty array when no customers found', async () => {
      mockPrismaService.customers.findMany.mockResolvedValue([]);

      const result = await service.findByName('Non Existent', mockCompanyId);

      expect(result).toHaveLength(0);
    });

    it('should return multiple customers with same name', async () => {
      mockPrismaService.customers.findMany.mockResolvedValue([
        { ...mockCreatedCustomer, id: 'id-1' },
        { ...mockCreatedCustomer, id: 'id-2' },
      ]);

      const result = await service.findByName('João Silva', mockCompanyId);

      expect(result).toHaveLength(2);
    });
  });
});
