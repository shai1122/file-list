import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileTable } from '../models/fileTable.model';
import { FileService } from '../service/file.service';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';

@Component({
  selector: 'app-file-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './file-list.component.html',
  styleUrl: './file-list.component.scss',
  providers: [FileService],
})
export class FileListComponent {
  @Output() fileSelected = new EventEmitter<string>();
  files: FileTable[] = [];

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.fileService.getFiles().subscribe((files) => {
      this.files = files;
    });
  }

  onSelectFile(fileName: string): void {
    this.fileSelected.emit(fileName);
  }
}
