import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';

describe('PurchasesService', () => {
  let service: PurchasesService;
  let prisma: PrismaService;

  const mockPurchase = {
    id: '550e8400-e29b-41d4-a716-446655440000',
    company_id: '550e8400-e29b-41d4-a716-446655440001',
    user_id: '550e8400-e29b-41d4-a716-446655440002',
    supplier_id: '550e8400-e29b-41d4-a716-446655440003',
    invoice_number: 'NF-12345',
    input_date: new Date('2024-11-14'),
    notes: 'Compra teste',
    created_at: new Date(),
    updated_at: new Date(),
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
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurchasesService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<PurchasesService>(PurchasesService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a purchase', async () => {
      const dto: CreatePurchaseDto = {
        company_id: '550e8400-e29b-41d4-a716-446655440001',
        user_id: '550e8400-e29b-41d4-a716-446655440002',
        supplier_id: '550e8400-e29b-41d4-a716-446655440003',
        invoice_number: 'NF-12345',
        items: [{ product_id: 'prod-1', quantity: 2, cost: 30 }],
      };

      mockPrismaService.purchases.create.mockResolvedValue(mockPurchase);
      const result = await service.create(dto);

      expect(result).toEqual(mockPurchase);
      expect(prisma.purchases.create).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('should return an array of purchases', async () => {
      mockPrismaService.purchases.findMany.mockResolvedValue([mockPurchase]);
      const result = await service.findAll();

      expect(result).toEqual([mockPurchase]);
      expect(prisma.purchases.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a purchase', async () => {
      mockPrismaService.purchases.findUnique.mockResolvedValue(mockPurchase);
      const result = await service.findOne(mockPurchase.id);

      expect(result).toEqual(mockPurchase);
    });

    it('should throw NotFoundException if purchase not found', async () => {
      mockPrismaService.purchases.findUnique.mockResolvedValue(null);

      await expect(service.findOne('invalid-id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update a purchase', async () => {
      const dto: UpdatePurchaseDto = { invoice_number: 'NF-99999' };
      mockPrismaService.purchases.findUnique.mockResolvedValue(mockPurchase);
      mockPrismaService.purchases.update.mockResolvedValue({
        ...mockPurchase,
        ...dto,
      });

      const result = await service.update(mockPurchase.id, dto);

      expect(result.invoice_number).toBe('NF-99999');
    });

    it('should throw NotFoundException if purchase not found', async () => {
      mockPrismaService.purchases.findUnique.mockResolvedValue(null);

      await expect(
        service.update('invalid-id', { invoice_number: 'NF-00000' }),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove a purchase', async () => {
      mockPrismaService.purchases.findUnique.mockResolvedValue(mockPurchase);
      mockPrismaService.purchases_items.deleteMany.mockResolvedValue({
        count: 1,
      });
      mockPrismaService.purchases.delete.mockResolvedValue(mockPurchase);

      const result = await service.remove(mockPurchase.id);

      expect(result).toEqual(mockPurchase);
      expect(prisma.purchases_items.deleteMany).toHaveBeenCalled();
      expect(prisma.purchases.delete).toHaveBeenCalled();
    });

    it('should throw NotFoundException if purchase not found', async () => {
      mockPrismaService.purchases.findUnique.mockResolvedValue(null);

      await expect(service.remove('invalid-id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
