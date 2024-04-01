import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Table } from './models/table.model';
import { FileListComponent } from './file-list/file-list.component';
import { TableDetailsComponent } from './table-details/table-details.component';
import { TableListComponent } from './table-list/table-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FileListComponent,
    TableDetailsComponent,
    TableListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'file-list-client';

  selectedFileName: string | null = null;
  selectedTable: Table | null = null;

  onFileSelected(fileName: string): void {
    this.selectedFileName = fileName;
    this.selectedTable = null;
  }

  onTableSelected(table: Table): void {
    this.selectedTable = table;
  }
}
