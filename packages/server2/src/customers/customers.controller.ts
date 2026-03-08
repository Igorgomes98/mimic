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
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import {
  BulkCreateCustomerDto,
  BulkCreateResultDto,
} from './dto/bulk-create-customer.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('customers')
@Controller('customers')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo cliente' })
  @ApiResponse({ status: 201, description: 'Cliente criado com sucesso' })
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os clientes' })
  @ApiResponse({ status: 200, description: 'Lista de clientes' })
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar cliente por ID' })
  @ApiResponse({ status: 200, description: 'Cliente encontrado' })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar cliente' })
  @ApiResponse({ status: 200, description: 'Cliente atualizado com sucesso' })
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar cliente' })
  @ApiResponse({ status: 200, description: 'Cliente deletado com sucesso' })
  remove(@Param('id') id: string) {
    return this.customersService.remove(id);
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Importar clientes em lote (bulk insert)' })
  @ApiResponse({
    status: 201,
    description: 'Resultado da importação em lote',
    type: BulkCreateResultDto,
  })
  bulkCreate(
    @Body() bulkCreateDto: BulkCreateCustomerDto,
  ): Promise<BulkCreateResultDto> {
    return this.customersService.bulkCreate(bulkCreateDto);
  }

  @Get('lookup')
  @ApiOperation({ summary: 'Buscar clientes por nome (para validação CSV)' })
  @ApiResponse({ status: 200, description: 'Lista de clientes encontrados' })
  findByName(
    @Query('name') name: string,
    @Query('company_id') companyId: string,
  ) {
    return this.customersService.findByName(name, companyId);
  }
}
