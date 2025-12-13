import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { SalesService } from './sales.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

describe('SalesService', () => {
  let service: SalesService;
  let prisma: PrismaService;

  const mockSale = {
    id: '550e8400-e29b-41d4-a716-446655440000',
    company_id: '550e8400-e29b-41d4-a716-446655440001',
    user_id: '550e8400-e29b-41d4-a716-446655440002',
    customer_id: '550e8400-e29b-41d4-a716-446655440003',
    payment_method: 'pix',
    sale_date: new Date('2024-11-14'),
    notes: 'Venda teste',
    created_at: new Date(),
    updated_at: new Date(),
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
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SalesService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<SalesService>(SalesService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a sale', async () => {
      const dto: CreateSaleDto = {
        company_id: '550e8400-e29b-41d4-a716-446655440001',
        user_id: '550e8400-e29b-41d4-a716-446655440002',
        customer_id: '550e8400-e29b-41d4-a716-446655440003',
        payment_method: 'pix',
        items: [{ product_id: 'prod-1', quantity: 2, price: 50 }],
      };

      mockPrismaService.sales.create.mockResolvedValue(mockSale);
      const result = await service.create(dto);

      expect(result).toEqual(mockSale);
      expect(prisma.sales.create).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('should return an array of sales', async () => {
      mockPrismaService.sales.findMany.mockResolvedValue([mockSale]);
      const result = await service.findAll();

      expect(result).toEqual([mockSale]);
      expect(prisma.sales.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a sale', async () => {
      mockPrismaService.sales.findUnique.mockResolvedValue(mockSale);
      const result = await service.findOne(mockSale.id);

      expect(result).toEqual(mockSale);
    });

    it('should throw NotFoundException if sale not found', async () => {
      mockPrismaService.sales.findUnique.mockResolvedValue(null);

      await expect(service.findOne('invalid-id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update a sale', async () => {
      const dto: UpdateSaleDto = { payment_method: 'credit_card' };
      mockPrismaService.sales.findUnique.mockResolvedValue(mockSale);
      mockPrismaService.sales.update.mockResolvedValue({ ...mockSale, ...dto });

      const result = await service.update(mockSale.id, dto);

      expect(result.payment_method).toBe('credit_card');
    });

    it('should throw NotFoundException if sale not found', async () => {
      mockPrismaService.sales.findUnique.mockResolvedValue(null);

      await expect(
        service.update('invalid-id', { payment_method: 'pix' }),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove a sale', async () => {
      mockPrismaService.sales.findUnique.mockResolvedValue(mockSale);
      mockPrismaService.sales_items.deleteMany.mockResolvedValue({ count: 1 });
      mockPrismaService.sales.delete.mockResolvedValue(mockSale);

      const result = await service.remove(mockSale.id);

      expect(result).toEqual(mockSale);
      expect(prisma.sales_items.deleteMany).toHaveBeenCalled();
      expect(prisma.sales.delete).toHaveBeenCalled();
    });

    it('should throw NotFoundException if sale not found', async () => {
      mockPrismaService.sales.findUnique.mockResolvedValue(null);

      await expect(service.remove('invalid-id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
