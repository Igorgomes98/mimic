// src/products/products.resolver.ts
import { Resolver, Query, Mutation, Args, ID, ResolveField, Parent } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './models/product.model'; 
import { CreateProductInput } from './dto/create-product.input'; 
import { UpdateProductInput } from './dto/update-product.input'; 

@Resolver(() => Product) 
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [Product], { name: 'products' }) 
  async findAll() {
    return this.productsService.findAll();
  }

  @Query(() => Product, { name: 'product', nullable: true }) 
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return this.productsService.findOne(id);
  }

  @Mutation(() => Product, { name: 'createProduct' }) 
  async create(@Args('createProductInput') createProductInput: CreateProductInput) {
    return this.productsService.create(createProductInput);
  }

  @Mutation(() => Product, { name: 'updateProduct' })
  async update(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    return this.productsService.update(id, updateProductInput);
  }

  @Mutation(() => Product, { name: 'deleteProduct', nullable: true }) 
  async remove(@Args('id', { type: () => ID }) id: string) {
    const deletedProduct = await this.productsService.remove(id);
    return deletedProduct;
  }
  
  @ResolveField(() => Date)
  createdAt(@Parent() product: any) {
    return product.created_at;
  }
}