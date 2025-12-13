import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

describe('SuppliersService', () => {
  let service: SuppliersService;
  let prisma: PrismaService;

  const mockSupplier = {
    id: '550e8400-e29b-41d4-a716-446655440000',
    company_id: '550e8400-e29b-41d4-a716-446655440001',
    name: 'Fornecedor ABC',
    email: 'fornecedor@example.com',
    phone: '11999999999',
    address: 'Rua B, 456',
    created_at: new Date(),
    updated_at: new Date(),
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
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<SuppliersService>(SuppliersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a supplier', async () => {
      const dto: CreateSupplierDto = {
        company_id: '550e8400-e29b-41d4-a716-446655440001',
        name: 'Fornecedor ABC',
        email: 'fornecedor@example.com',
      };

      mockPrismaService.suppliers.create.mockResolvedValue(mockSupplier);
      const result = await service.create(dto);

      expect(result).toEqual(mockSupplier);
      expect(prisma.suppliers.create).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('should return an array of suppliers', async () => {
      mockPrismaService.suppliers.findMany.mockResolvedValue([mockSupplier]);
      const result = await service.findAll();

      expect(result).toEqual([mockSupplier]);
      expect(prisma.suppliers.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a supplier', async () => {
      mockPrismaService.suppliers.findUnique.mockResolvedValue(mockSupplier);
      const result = await service.findOne(mockSupplier.id);

      expect(result).toEqual(mockSupplier);
    });

    it('should throw NotFoundException if supplier not found', async () => {
      mockPrismaService.suppliers.findUnique.mockResolvedValue(null);

      await expect(service.findOne('invalid-id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update a supplier', async () => {
      const dto: UpdateSupplierDto = { phone: '11988888888' };
      mockPrismaService.suppliers.findUnique.mockResolvedValue(mockSupplier);
      mockPrismaService.suppliers.update.mockResolvedValue({
        ...mockSupplier,
        ...dto,
      });

      const result = await service.update(mockSupplier.id, dto);

      expect(result.phone).toBe('11988888888');
    });

    it('should throw NotFoundException if supplier not found', async () => {
      mockPrismaService.suppliers.findUnique.mockResolvedValue(null);

      await expect(
        service.update('invalid-id', { phone: '11988888888' }),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove a supplier', async () => {
      mockPrismaService.suppliers.findUnique.mockResolvedValue(mockSupplier);
      mockPrismaService.suppliers.delete.mockResolvedValue(mockSupplier);

      const result = await service.remove(mockSupplier.id);

      expect(result).toEqual(mockSupplier);
      expect(prisma.suppliers.delete).toHaveBeenCalled();
    });

    it('should throw NotFoundException if supplier not found', async () => {
      mockPrismaService.suppliers.findUnique.mockResolvedValue(null);

      await expect(service.remove('invalid-id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
