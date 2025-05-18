import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PurchasesService } from './purchases.service';
import { Purchase } from './entities/purchase.entity';
import { CreatePurchaseInput } from './dto/create-purchase.input';
import { UpdatePurchaseInput } from './dto/update-purchase.input';

@Resolver(() => Purchase)
export class PurchasesResolver {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Mutation(() => Purchase)
  createPurchase(@Args('createPurchaseInput') createPurchaseInput: CreatePurchaseInput) {
    return this.purchasesService.create(createPurchaseInput);
  }

  @Query(() => [Purchase], { name: 'purchases' })
  findAll() {
    return this.purchasesService.findAll();
  }

  @Query(() => Purchase, { name: 'purchase' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.purchasesService.findOne(id);
  }

  @Mutation(() => Purchase)
  updatePurchase(@Args('updatePurchaseInput') updatePurchaseInput: UpdatePurchaseInput) {
    return this.purchasesService.update(updatePurchaseInput.id, updatePurchaseInput);
  }

  @Mutation(() => Purchase)
  removePurchase(@Args('id', { type: () => Int }) id: number) {
    return this.purchasesService.remove(id);
  }
}
