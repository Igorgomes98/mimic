import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CompaniesService } from './companies.service';
import { Company } from './entities/company.entity';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';

@Resolver(() => Company)
export class CompaniesResolver {
  constructor(private readonly companiesService: CompaniesService) {}

  @Mutation(() => Company)
  createCompany(@Args('createCompanyInput') createCompanyInput: CreateCompanyInput) {
    return this.companiesService.create(createCompanyInput);
  }

  @Query(() => [Company], { name: 'companies' })
  findAll() {
    return this.companiesService.findAll();
  }

  @Query(() => Company, { name: 'company' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.companiesService.findOne(id);
  }

  @Mutation(() => Company)
  updateCompany(@Args('updateCompanyInput') updateCompanyInput: UpdateCompanyInput) {
    return this.companiesService.update(updateCompanyInput);
  }

  @Mutation(() => Company)
  removeCompany(@Args('id', { type: () => String }) id: string) {
    return this.companiesService.remove(id);
  }
}
