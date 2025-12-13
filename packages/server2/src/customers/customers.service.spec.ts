import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

describe('CustomersService', () => {
  let service: CustomersService;
  let prisma: PrismaService;

  const mockCustomer = {
    id: '550e8400-e29b-41d4-a716-446655440000',
    company_id: '550e8400-e29b-41d4-a716-446655440001',
    name: 'João Silva',
    email: 'joao@example.com',
    phone: '11999999999',
    address: 'Rua A, 123',
    created_at: new Date(),
    updated_at: new Date(),
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

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a customer', async () => {
      const dto: CreateCustomerDto = {
        company_id: '550e8400-e29b-41d4-a716-446655440001',
        name: 'João Silva',
        email: 'joao@example.com',
      };

      mockPrismaService.customers.create.mockResolvedValue(mockCustomer);
      const result = await service.create(dto);

      expect(result).toEqual(mockCustomer);
      expect(prisma.customers.create).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('should return an array of customers', async () => {
      mockPrismaService.customers.findMany.mockResolvedValue([mockCustomer]);
      const result = await service.findAll();

      expect(result).toEqual([mockCustomer]);
      expect(prisma.customers.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a customer', async () => {
      mockPrismaService.customers.findUnique.mockResolvedValue(mockCustomer);
      const result = await service.findOne(mockCustomer.id);

      expect(result).toEqual(mockCustomer);
    });

    it('should throw NotFoundException if customer not found', async () => {
      mockPrismaService.customers.findUnique.mockResolvedValue(null);

      await expect(service.findOne('invalid-id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update a customer', async () => {
      const dto: UpdateCustomerDto = { phone: '11988888888' };
      mockPrismaService.customers.findUnique.mockResolvedValue(mockCustomer);
      mockPrismaService.customers.update.mockResolvedValue({
        ...mockCustomer,
        ...dto,
      });

      const result = await service.update(mockCustomer.id, dto);

      expect(result.phone).toBe('11988888888');
    });

    it('should throw NotFoundException if customer not found', async () => {
      mockPrismaService.customers.findUnique.mockResolvedValue(null);

      await expect(
        service.update('invalid-id', { phone: '11988888888' }),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove a customer', async () => {
      mockPrismaService.customers.findUnique.mockResolvedValue(mockCustomer);
      mockPrismaService.customers.delete.mockResolvedValue(mockCustomer);

      const result = await service.remove(mockCustomer.id);

      expect(result).toEqual(mockCustomer);
      expect(prisma.customers.delete).toHaveBeenCalled();
    });

    it('should throw NotFoundException if customer not found', async () => {
      mockPrismaService.customers.findUnique.mockResolvedValue(null);

      await expect(service.remove('invalid-id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
