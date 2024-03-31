import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Table } from './models/table.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
