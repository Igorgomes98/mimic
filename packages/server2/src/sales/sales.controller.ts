import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import {
  BulkCreateSaleDto,
  BulkCreateSaleResultDto,
} from './dto/bulk-create-sale.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('sales')
@Controller('sales')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  @ApiOperation({ summary: 'Criar nova venda' })
  @ApiResponse({ status: 201, description: 'Venda criada com sucesso' })
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as vendas' })
  @ApiResponse({ status: 200, description: 'Lista de vendas' })
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar venda por ID' })
  @ApiResponse({ status: 200, description: 'Venda encontrada' })
  @ApiResponse({ status: 404, description: 'Venda não encontrada' })
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar venda' })
  @ApiResponse({ status: 200, description: 'Venda atualizada com sucesso' })
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.salesService.update(id, updateSaleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar venda' })
  @ApiResponse({ status: 200, description: 'Venda deletada com sucesso' })
  remove(@Param('id') id: string) {
    return this.salesService.remove(id);
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Importar vendas em lote (bulk insert)' })
  @ApiResponse({
    status: 201,
    description: 'Resultado da importação em lote',
    type: BulkCreateSaleResultDto,
  })
  bulkCreate(
    @Body() bulkCreateDto: BulkCreateSaleDto,
  ): Promise<BulkCreateSaleResultDto> {
    return this.salesService.bulkCreate(bulkCreateDto);
  }
}
