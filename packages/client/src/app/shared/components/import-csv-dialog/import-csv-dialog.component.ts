import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  CsvParserService,
  CsvColumn,
  CsvImportRow,
} from '../../services/csv-parser.service';

export interface ImportCsvDialogConfig {
  title: string;
  entityName: string;
  columns: CsvColumn[];
  templateFilename: string;
}

export interface ImportCsvDialogResult<T> {
  confirmed: boolean;
  data: T[];
}

@Component({
  selector: 'app-import-csv-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './import-csv-dialog.component.html',
  styleUrls: ['./import-csv-dialog.component.scss'],
})
export class ImportCsvDialogComponent<T extends Record<string, unknown>>
  implements OnInit
{
  rows: CsvImportRow<T>[] = [];
  displayedColumns: string[] = [];
  loading = false;
  fileSelected = false;
  editingCell: { rowIndex: number; field: string } | null = null;

  constructor(
    private dialogRef: MatDialogRef<ImportCsvDialogComponent<T>>,
    @Inject(MAT_DIALOG_DATA) public config: ImportCsvDialogConfig,
    private csvParser: CsvParserService,
  ) {}

  ngOnInit(): void {
    // Setup displayed columns: checkbox + data columns + actions
    this.displayedColumns = [
      'select',
      ...this.config.columns.map((col) => col.key),
      'status',
      'actions',
    ];
  }

  /**
   * Handle file selection
   */
  async onFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    this.loading = true;

    try {
      const result = await this.csvParser.parseFile<Record<string, unknown>>(file);
      const transformedData = this.csvParser.transformData<T>(
        result.data,
        this.config.columns,
      );
      this.rows = this.csvParser.validateRows(
        transformedData,
        this.config.columns,
      );
      this.fileSelected = true;
    } catch (error) {
      console.error('Erro ao processar CSV:', error);
      alert('Erro ao processar o arquivo CSV. Verifique o formato do arquivo.');
    } finally {
      this.loading = false;
    }
  }

  /**
   * Download CSV template
   */
  downloadTemplate(): void {
    this.csvParser.downloadTemplate(
      this.config.columns,
      this.config.templateFilename,
    );
  }

  /**
   * Toggle row selection
   */
  toggleRowSelection(row: CsvImportRow<T>): void {
    row.isSelected = !row.isSelected;
  }

  /**
   * Toggle all rows selection
   */
  toggleAllSelection(): void {
    const allSelected = this.areAllSelected();
    this.rows.forEach((row) => (row.isSelected = !allSelected));
  }

  /**
   * Check if all rows are selected
   */
  areAllSelected(): boolean {
    return this.rows.length > 0 && this.rows.every((row) => row.isSelected);
  }

  /**
   * Check if some rows are selected
   */
  areSomeSelected(): boolean {
    return this.rows.some((row) => row.isSelected) && !this.areAllSelected();
  }

  /**
   * Remove a row from import
   */
  removeRow(rowIndex: number): void {
    this.rows = this.rows.filter((row) => row.rowIndex !== rowIndex);
    // Reindex rows
    this.rows.forEach((row, index) => (row.rowIndex = index));
  }

  /**
   * Start editing a cell
   */
  startEditing(rowIndex: number, field: string): void {
    this.editingCell = { rowIndex, field };
  }

  /**
   * Stop editing and validate
   */
  stopEditing(row: CsvImportRow<T>): void {
    this.editingCell = null;
    // Re-validate the row
    row.validation = this.csvParser.validateRow(row.data, this.config.columns);
  }

  /**
   * Check if cell is being edited
   */
  isEditing(rowIndex: number, field: string): boolean {
    return (
      this.editingCell?.rowIndex === rowIndex &&
      this.editingCell?.field === field
    );
  }

  /**
   * Get error message for a field
   */
  getFieldError(row: CsvImportRow<T>, field: string): string | null {
    const error = row.validation.errors.find((e) => e.field === field);
    return error ? error.message : null;
  }

  /**
   * Check if a row has errors
   */
  hasErrors(row: CsvImportRow<T>): boolean {
    return !row.validation.isValid;
  }

  /**
   * Get all errors for a row as a string
   */
  getRowErrors(row: CsvImportRow<T>): string {
    return row.validation.errors.map((e) => e.message).join('; ');
  }

  /**
   * Get valid selected rows
   */
  getValidSelectedRows(): CsvImportRow<T>[] {
    return this.rows.filter((row) => row.isSelected && row.validation.isValid);
  }

  /**
   * Check if can confirm import
   */
  canConfirm(): boolean {
    return this.getValidSelectedRows().length > 0;
  }

  /**
   * Get summary statistics
   */
  getSummary(): { total: number; valid: number; invalid: number; selected: number } {
    const total = this.rows.length;
    const valid = this.rows.filter((r) => r.validation.isValid).length;
    const invalid = total - valid;
    const selected = this.rows.filter((r) => r.isSelected).length;
    return { total, valid, invalid, selected };
  }

  /**
   * Cancel and close dialog
   */
  cancel(): void {
    this.dialogRef.close({ confirmed: false, data: [] });
  }

  /**
   * Confirm import
   */
  confirm(): void {
    const selectedData = this.getValidSelectedRows().map((row) => row.data);
    this.dialogRef.close({ confirmed: true, data: selectedData });
  }
}
