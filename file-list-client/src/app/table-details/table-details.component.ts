import { Component, Input } from '@angular/core';
import { Table } from '../models/table.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-details.component.html',
  styleUrl: './table-details.component.scss',
})
export class TableDetailsComponent {
  @Input() selectedTable: Table | null = null;

}
