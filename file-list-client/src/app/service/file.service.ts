import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileTable } from './../models/fileTable.model';
import { Table } from '../models/table.model';

@Injectable()
export class FileService {
  constructor(private http: HttpClient) {}
  getFiles(): Observable<FileTable[]> {
    const url = 'http://localhost:5000/files';
    return this.http.get<FileTable[]>(url);
  }

  getTables(fileName: string): Observable<FileTable[]> {
    const url = 'http://localhost:5000/files';
    return this.http.get<FileTable[]>(url);
  }
}
