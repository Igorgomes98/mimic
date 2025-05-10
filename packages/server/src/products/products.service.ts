// src/products/products.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './models/product.model';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
// Importe seu modelo de banco de dados (ex: Repositório TypeORM ou Modelo Mongoose)

@Injectable()
export class ProductsService {
  // Exemplo com um array em memória para começar:
  private products: Product[] = [
    { id: '1', name: 'Produto Teste 1', sku: 'SKU001', quantity: 10, price: 99.90 },
    { id: '2', name: 'Produto Teste 2', sku: 'SKU002', quantity: 5, price: 49.50, description: 'Desc teste'},
  ];
  private nextId = 3;

  async create(createProductInput: CreateProductInput): Promise<Product> {
    const newProduct = {
      id: (this.nextId++).toString(),
      created_at: new Date(),
      ...createProductInput,
    };
    this.products.push(newProduct);
    return newProduct;
    // Com banco de dados:
    // const newProduct = this.productRepository.create(createProductInput);
    // return this.productRepository.save(newProduct);
  }

  async findAll(): Promise<Product[]> {
    return this.products;
    // Com banco de dados: return this.productRepository.find();
  }

  async findOne(id: string): Promise<Product | null> {
    const product = this.products.find(p => p.id === id);
    // Com banco de dados:
    // const product = await this.productRepository.findOneBy({ id });
    // if (!product) {
    //   throw new NotFoundException(`Product with ID "${id}" not found`);
    // }
    return product || null;
  }

  async update(id: string, updateProductInput: UpdateProductInput): Promise<Product> {
    const productIndex = this.products.findIndex(p => p.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
    this.products[productIndex] = { ...this.products[productIndex], ...updateProductInput };
    return this.products[productIndex];
    // Com banco de dados:
    // await this.productRepository.update(id, updateProductInput);
    // return this.findOne(id);
  }

  async remove(id: string): Promise<Product | null> {
    const productIndex = this.products.findIndex(p => p.id === id);
    if (productIndex === -1) {
      // throw new NotFoundException(`Product with ID "${id}" not found`);
      return null; // ou lance um erro
    }
    const [deletedProduct] = this.products.splice(productIndex, 1);
    return deletedProduct;
    // Com banco de dados:
    // const product = await this.findOne(id);
    // if (product) {
    //   await this.productRepository.remove(product);
    //   return product; // Retorna o produto deletado
    // }
    // return null;
  }
}