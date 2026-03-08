import { TestBed } from '@angular/core/testing';
import { CsvParserService, CsvColumn } from './csv-parser.service';

describe('CsvParserService', () => {
  let service: CsvParserService;

  const mockColumns: CsvColumn[] = [
    { key: 'name', header: 'Nome', required: true, type: 'string' },
    { key: 'email', header: 'Email', required: false, type: 'email' },
    { key: 'phone', header: 'Telefone', required: false, type: 'string' },
    { key: 'document', header: 'CPF/CNPJ', required: false, type: 'string' },
    { key: 'price', header: 'Preco', required: false, type: 'number' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CsvParserService],
    });
    service = TestBed.inject(CsvParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('validateRow', () => {
    it('should validate a valid row', () => {
      const row = {
        name: 'João Silva',
        email: 'joao@example.com',
        phone: '11999999999',
      };

      const result = service.validateRow(row, mockColumns);

      expect(result.isValid).toBe(true);
      expect(result.errors.length).toBe(0);
    });

    it('should fail validation for missing required field', () => {
      const row = {
        name: '',
        email: 'joao@example.com',
      };

      const result = service.validateRow(row, mockColumns);

      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBe(1);
      expect(result.errors[0].field).toBe('name');
      expect(result.errors[0].message).toContain('obrigatório');
    });

    it('should fail validation for invalid email', () => {
      const row = {
        name: 'João Silva',
        email: 'invalid-email',
      };

      const result = service.validateRow(row, mockColumns);

      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBe(1);
      expect(result.errors[0].field).toBe('email');
      expect(result.errors[0].message).toContain('email válido');
    });

    it('should fail validation for invalid number', () => {
      const row = {
        name: 'João Silva',
        price: 'not-a-number',
      };

      const result = service.validateRow(row, mockColumns);

      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBe(1);
      expect(result.errors[0].field).toBe('price');
      expect(result.errors[0].message).toContain('número');
    });

    it('should accept valid email format', () => {
      const row = {
        name: 'João Silva',
        email: 'valid.email+tag@subdomain.example.com',
      };

      const result = service.validateRow(row, mockColumns);

      expect(result.isValid).toBe(true);
    });

    it('should skip validation for empty optional fields', () => {
      const row = {
        name: 'João Silva',
        email: '',
        phone: null,
        document: undefined,
      };

      const result = service.validateRow(row, mockColumns);

      expect(result.isValid).toBe(true);
      expect(result.errors.length).toBe(0);
    });
  });

  describe('validateRows', () => {
    it('should validate multiple rows', () => {
      const rows = [
        { name: 'Cliente 1', email: 'cliente1@test.com' },
        { name: '', email: 'cliente2@test.com' },
        { name: 'Cliente 3', email: 'invalid' },
      ];

      const result = service.validateRows(rows, mockColumns);

      expect(result.length).toBe(3);
      expect(result[0].validation.isValid).toBe(true);
      expect(result[1].validation.isValid).toBe(false);
      expect(result[2].validation.isValid).toBe(false);
    });

    it('should set isSelected to true by default', () => {
      const rows = [{ name: 'Cliente 1' }];

      const result = service.validateRows(rows, mockColumns);

      expect(result[0].isSelected).toBe(true);
    });

    it('should include row index', () => {
      const rows = [
        { name: 'Cliente 1' },
        { name: 'Cliente 2' },
        { name: 'Cliente 3' },
      ];

      const result = service.validateRows(rows, mockColumns);

      expect(result[0].rowIndex).toBe(0);
      expect(result[1].rowIndex).toBe(1);
      expect(result[2].rowIndex).toBe(2);
    });
  });

  describe('generateTemplate', () => {
    it('should generate CSV with headers', () => {
      const result = service.generateTemplate(mockColumns);

      expect(result).toContain('Nome');
      expect(result).toContain('Email');
      expect(result).toContain('Telefone');
      expect(result).toContain('CPF/CNPJ');
      expect(result).toContain('Preco');
    });

    it('should generate comma-separated headers', () => {
      const simpleColumns: CsvColumn[] = [
        { key: 'a', header: 'Header A', required: true },
        { key: 'b', header: 'Header B', required: false },
      ];

      const result = service.generateTemplate(simpleColumns);

      expect(result).toBe('Header A,Header B');
    });
  });

  describe('mapHeaders', () => {
    it('should map CSV headers to entity fields', () => {
      const csvHeaders = ['Nome', 'Email', 'Telefone'];

      const result = service.mapHeaders(csvHeaders, mockColumns);

      expect(result.get('Nome')).toBe('name');
      expect(result.get('Email')).toBe('email');
      expect(result.get('Telefone')).toBe('phone');
    });

    it('should handle case insensitive matching', () => {
      const csvHeaders = ['NOME', 'email', 'TeLeFoNe'];

      const result = service.mapHeaders(csvHeaders, mockColumns);

      expect(result.get('NOME')).toBe('name');
      expect(result.get('email')).toBe('email');
      expect(result.get('TeLeFoNe')).toBe('phone');
    });

    it('should handle headers with extra whitespace', () => {
      const csvHeaders = ['  Nome  ', ' Email'];

      const result = service.mapHeaders(csvHeaders, mockColumns);

      expect(result.get('  Nome  ')).toBe('name');
      expect(result.get(' Email')).toBe('email');
    });

    it('should skip unrecognized headers', () => {
      const csvHeaders = ['Nome', 'UnknownColumn', 'Email'];

      const result = service.mapHeaders(csvHeaders, mockColumns);

      expect(result.size).toBe(2);
      expect(result.has('UnknownColumn')).toBe(false);
    });
  });

  describe('transformData', () => {
    it('should transform data using column definitions', () => {
      const data = [
        { nome: 'Cliente 1', email: 'c1@test.com' },
        { nome: 'Cliente 2', email: 'c2@test.com' },
      ];

      const result = service.transformData(data, mockColumns);

      expect(result[0]['name']).toBe('Cliente 1');
      expect(result[0]['email']).toBe('c1@test.com');
      expect(result[1]['name']).toBe('Cliente 2');
    });

    it('should handle missing fields', () => {
      const data = [{ nome: 'Cliente 1' }];

      const result = service.transformData(data, mockColumns);

      expect(result[0]['name']).toBe('Cliente 1');
      expect(result[0]['email']).toBeUndefined();
    });

    it('should handle case insensitive field matching', () => {
      const data = [{ NOME: 'Cliente 1', EMAIL: 'test@test.com' }];

      const result = service.transformData(data, mockColumns);

      expect(result[0]['name']).toBe('Cliente 1');
      expect(result[0]['email']).toBe('test@test.com');
    });
  });

  describe('parseFile', () => {
    it('should parse CSV file content', async () => {
      const csvContent = 'nome,email\nJoão,joao@test.com\nMaria,maria@test.com';
      const file = new File([csvContent], 'test.csv', { type: 'text/csv' });

      const result = await service.parseFile(file);

      expect(result.data.length).toBe(2);
      expect(result.errors.length).toBe(0);
    });

    it('should skip empty lines', async () => {
      const csvContent = 'nome,email\nJoão,joao@test.com\n\n\nMaria,maria@test.com\n';
      const file = new File([csvContent], 'test.csv', { type: 'text/csv' });

      const result = await service.parseFile(file);

      expect(result.data.length).toBe(2);
    });

    it('should handle files with different delimiters', async () => {
      const csvContent = 'nome;email\nJoão;joao@test.com';
      const file = new File([csvContent], 'test.csv', { type: 'text/csv' });

      const result = await service.parseFile(file);

      // PapaParse auto-detects delimiter
      expect(result.data.length).toBe(1);
    });
  });
});
