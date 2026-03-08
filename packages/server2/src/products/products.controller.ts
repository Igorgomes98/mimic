import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  BulkCreateProductDto,
  BulkCreateProductResultDto,
} from './dto/bulk-create-product.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('products')
@Controller('products')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo produto' })
  @ApiResponse({ status: 201, description: 'Produto criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os produtos' })
  @ApiResponse({ status: 200, description: 'Lista de produtos' })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar produto por ID' })
  @ApiResponse({ status: 200, description: 'Produto encontrado' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar produto' })
  @ApiResponse({ status: 200, description: 'Produto atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar produto' })
  @ApiResponse({ status: 200, description: 'Produto deletado com sucesso' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Importar produtos em lote (bulk insert)' })
  @ApiResponse({
    status: 201,
    description: 'Resultado da importação em lote',
    type: BulkCreateProductResultDto,
  })
  bulkCreate(
    @Body() bulkCreateDto: BulkCreateProductDto,
  ): Promise<BulkCreateProductResultDto> {
    return this.productsService.bulkCreate(bulkCreateDto);
  }

  @Get('lookup')
  @ApiOperation({ summary: 'Buscar produtos por nome (para validação CSV)' })
  @ApiResponse({ status: 200, description: 'Lista de produtos encontrados' })
  findByName(
    @Query('name') name: string,
    @Query('company_id') companyId: string,
  ) {
    return this.productsService.findByName(name, companyId);
  }
}
