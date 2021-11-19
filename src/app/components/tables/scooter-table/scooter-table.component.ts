import { AfterViewInit, Component, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ScooterTableDataSource, ScooterTableItem } from './scooter-table-datasource';
import { MatTableDataSource } from '@angular/material/table';
import { ScooterService } from 'src/app/services/scooter.service'; 


@Component({
  selector: 'app-scooter-table',
  templateUrl: './scooter-table.component.html',
  styleUrls: ['./scooter-table.component.css']
})
export class ScooterTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // @ViewChild(MatTable) table!: MatTable<ScooterTableItem>;
  @ViewChild(MatTable) table!: MatTable<any>;
  dataSource: ScooterTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'status', 'battery_level', 'station_id'];

  @Input() city: any;
  @Input() scooters: any;

  constructor(
    public scooterService: ScooterService,
    private changeDetectorRefs: ChangeDetectorRef) {
    this.dataSource = new ScooterTableDataSource();
  }


  //Gets data from scooterService 
  refresh(): void{
    this.scooterService.getScooters().subscribe(resources => {
      this.dataSource.data = resources; 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.table.renderRows();
  }
  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.refresh();
    console.log(this.dataSource)
  }
}
