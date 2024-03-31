import { Observable, of } from "rxjs";
import {FileTable} from "./../models/fileTable.model";
import { Table } from "../models/table.model";
export class FileService{
    private fileTables: FileTable[] = [
        {
          fileName: 'File1',
          tables: [
            { title: "Table 1", rows: 5, columns: 2, notes: "Notes for table 1" },
            { title: "Table 2", rows: 7, columns: 3, notes: "Notes for table 2" }
          ]
        },
      ];
      constructor() { }
      getFiles(): Observable<FileTable[]> {
        return of(this.fileTables);
      }
    
      getTables(fileName: string): Observable<Table[]> {
        const file = this.fileTables.find(f => f.fileName === fileName);
        return of(file ? file.tables : []);
      }

}