import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

describe('ProductsService', () => {
  let service: ProductsService;
  let prisma: PrismaService;

  const mockProduct = {
    id: '550e8400-e29b-41d4-a716-446655440000',
    company_id: '550e8400-e29b-41d4-a716-446655440001',
    name: 'Mouse USB',
    sku: 'MOUSE-001',
    description: 'Mouse óptico USB',
    price: 50.0,
    created_at: new Date(),
    updated_at: new Date(),
  };

  const mockPrismaService = {
    products: {
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
        ProductsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a product', async () => {
      const dto: CreateProductDto = {
        company_id: '550e8400-e29b-41d4-a716-446655440001',
        name: 'Mouse USB',
        sku: 'MOUSE-001',
        price: 50.0,
      };

      mockPrismaService.products.create.mockResolvedValue(mockProduct);
      const result = await service.create(dto);

      expect(result).toEqual(mockProduct);
      expect(prisma.products.create).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      mockPrismaService.products.findMany.mockResolvedValue([mockProduct]);
      const result = await service.findAll();

      expect(result).toEqual([mockProduct]);
      expect(prisma.products.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a product', async () => {
      mockPrismaService.products.findUnique.mockResolvedValue(mockProduct);
      const result = await service.findOne(mockProduct.id);

      expect(result).toEqual(mockProduct);
    });

    it('should throw NotFoundException if product not found', async () => {
      mockPrismaService.products.findUnique.mockResolvedValue(null);

      await expect(service.findOne('invalid-id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update a product', async () => {
      const dto: UpdateProductDto = { price: 45.0 };
      mockPrismaService.products.findUnique.mockResolvedValue(mockProduct);
      mockPrismaService.products.update.mockResolvedValue({
        ...mockProduct,
        ...dto,
      });

      const result = await service.update(mockProduct.id, dto);

      expect(result.price).toBe(45.0);
    });

    it('should throw NotFoundException if product not found', async () => {
      mockPrismaService.products.findUnique.mockResolvedValue(null);

      await expect(
        service.update('invalid-id', { price: 45.0 }),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove a product', async () => {
      mockPrismaService.products.findUnique.mockResolvedValue(mockProduct);
      mockPrismaService.products.delete.mockResolvedValue(mockProduct);

      const result = await service.remove(mockProduct.id);

      expect(result).toEqual(mockProduct);
      expect(prisma.products.delete).toHaveBeenCalled();
    });

    it('should throw NotFoundException if product not found', async () => {
      mockPrismaService.products.findUnique.mockResolvedValue(null);

      await expect(service.remove('invalid-id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
