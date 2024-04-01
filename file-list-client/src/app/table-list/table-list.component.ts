import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Table } from '../models/table.model';
import { FileService } from '../service/file.service';
import { FileTable } from '../models/fileTable.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.scss',
  providers: [FileService],
})
export class TableListComponent implements OnChanges {
  @Input() selectedFileName: string | null = null;
  @Output() tableSelected = new EventEmitter<Table>(); 
  fileTable: FileTable | undefined;
  tables: Table[] = [];
  tablesNew: any[] = [];

  constructor(private fileService: FileService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedFileName'] && this.selectedFileName) {
      this.fileService.getFiles().subscribe((files) => {
        this.tablesNew = files.filter(
          (tablesObject) => tablesObject.fileName === this.selectedFileName,
        );
      });
    } else {
      this.tables = [];
    }
  }
  onSelectTable(table: Table): void {
    this.tableSelected.emit(table); 
  }
}
