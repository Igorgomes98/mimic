import { Injectable } from '@angular/core';
import * as Papa from 'papaparse';

export interface CsvParseResult<T> {
  data: T[];
  errors: Papa.ParseError[];
  meta: Papa.ParseMeta;
}

export interface CsvColumn {
  key: string;
  header: string;
  required: boolean;
  type?: 'string' | 'number' | 'date' | 'email';
  lookup?: {
    service: string;
    displayField: string;
    valueField: string;
  };
}

export interface CsvRowValidation {
  isValid: boolean;
  errors: { field: string; message: string }[];
}

export interface CsvImportRow<T = Record<string, unknown>> {
  data: T;
  rowIndex: number;
  validation: CsvRowValidation;
  isSelected: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CsvParserService {
  /**
   * Parse CSV file to array of objects
   */
  parseFile<T>(file: File): Promise<CsvParseResult<T>> {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header: string) => header.trim().toLowerCase(),
        complete: (results) => {
          resolve({
            data: results.data as T[],
            errors: results.errors,
            meta: results.meta,
          });
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }

  /**
   * Generate CSV template with headers
   */
  generateTemplate(columns: CsvColumn[]): string {
    const headers = columns.map((col) => col.header);
    return Papa.unparse([headers]);
  }

  /**
   * Download CSV template
   */
  downloadTemplate(columns: CsvColumn[], filename: string): void {
    const csv = this.generateTemplate(columns);
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Validate a single row against column definitions
   */
  validateRow<T extends Record<string, unknown>>(
    row: T,
    columns: CsvColumn[],
  ): CsvRowValidation {
    const errors: { field: string; message: string }[] = [];

    for (const column of columns) {
      const value = row[column.key];

      // Check required fields
      if (column.required && (value === undefined || value === null || value === '')) {
        errors.push({
          field: column.key,
          message: `${column.header} é obrigatório`,
        });
        continue;
      }

      // Skip validation if empty and not required
      if (value === undefined || value === null || value === '') {
        continue;
      }

      // Type validation
      if (column.type === 'email' && typeof value === 'string') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errors.push({
            field: column.key,
            message: `${column.header} deve ser um email válido`,
          });
        }
      }

      if (column.type === 'number' && isNaN(Number(value))) {
        errors.push({
          field: column.key,
          message: `${column.header} deve ser um número`,
        });
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  /**
   * Validate all rows
   */
  validateRows<T extends Record<string, unknown>>(
    rows: T[],
    columns: CsvColumn[],
  ): CsvImportRow<T>[] {
    return rows.map((data, rowIndex) => ({
      data,
      rowIndex,
      validation: this.validateRow(data, columns),
      isSelected: true,
    }));
  }

  /**
   * Map CSV headers to entity fields
   */
  mapHeaders(
    csvHeaders: string[],
    columns: CsvColumn[],
  ): Map<string, string> {
    const mapping = new Map<string, string>();

    for (const csvHeader of csvHeaders) {
      const normalizedCsvHeader = csvHeader.trim().toLowerCase();

      for (const column of columns) {
        const normalizedColumnHeader = column.header.trim().toLowerCase();
        const normalizedColumnKey = column.key.trim().toLowerCase();

        if (
          normalizedCsvHeader === normalizedColumnHeader ||
          normalizedCsvHeader === normalizedColumnKey
        ) {
          mapping.set(csvHeader, column.key);
          break;
        }
      }
    }

    return mapping;
  }

  /**
   * Transform parsed data using header mapping
   */
  transformData<T extends Record<string, unknown>>(
    data: Record<string, unknown>[],
    columns: CsvColumn[],
  ): T[] {
    return data.map((row) => {
      const transformed: Record<string, unknown> = {};

      for (const column of columns) {
        // Try to find value by key or header (case insensitive)
        const key = column.key.toLowerCase();
        const header = column.header.toLowerCase();

        for (const [rowKey, value] of Object.entries(row)) {
          const normalizedRowKey = rowKey.toLowerCase();
          if (normalizedRowKey === key || normalizedRowKey === header) {
            transformed[column.key] = value;
            break;
          }
        }
      }

      return transformed as T;
    });
  }
}
