import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ScooterTableDataSource, ScooterTableItem } from './scooter-table-datasource';

@Component({
  selector: 'app-scooter-table',
  templateUrl: './scooter-table.component.html',
  styleUrls: ['./scooter-table.component.css']
})
export class ScooterTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ScooterTableItem>;
  dataSource: ScooterTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  @Input() curr_city: any;
  @Input() scooters: any;


  constructor() {
    this.dataSource = new ScooterTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
