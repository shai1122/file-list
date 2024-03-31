import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Table } from '../models/table.model';
import { FileService } from '../service/file.service';
import { FileTable } from '../models/fileTable.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.scss',
})
export class TableListComponent implements OnChanges{

  @Input() selectedFileName: string | null = null;
  @Output() tableSelected = new EventEmitter<Table>(); // Emitting the selected table
  fileTable: FileTable | undefined;
  tables: Table[] = [];

  constructor(private fileService: FileService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["selectedFileName"] && this.selectedFileName) {
      this.fileService.getTables(this.selectedFileName).subscribe(tables => {
        this.tables = tables;
      });
    } else {
      this.tables = [];
    }
  }
  onSelectTable(table: Table): void {
    this.tableSelected.emit(table); // Emit the selected table when a table is clicked
  }

}
