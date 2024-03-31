import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileTable } from '../models/fileTable.model';
import { FileService } from '../service/file.service';

@Component({
  selector: 'app-file-list',
  standalone: true,
  imports: [],
  templateUrl: './file-list.component.html',
  styleUrl: './file-list.component.scss',
})
export class FileListComponent {
  @Output() fileSelected = new EventEmitter<string>();
  files: FileTable[] = [];

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.fileService.getFiles().subscribe(files => this.files = files);
  }

  selectFile(fileName: string): void {
    this.fileSelected.emit(fileName);
  }
}
