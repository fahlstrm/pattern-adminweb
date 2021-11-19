import { AfterViewInit, Component, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ScooterTableDataSource, ScooterTableItem } from './scooter-table-datasource';
import { MatTableDataSource } from '@angular/material/table';
import { ScooterService } from 'src/app/services/scooter.service'; 
import { ScooterDialogComponent } from '../../utils/dialogs/scooter-dialog/scooter-dialog.component';

@Component({
  selector: 'app-scooter-table',
  templateUrl: './scooter-table.component.html',
  styleUrls: ['./scooter-table.component.css']
})
export class ScooterTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  dataSource: ScooterTableDataSource;

  /** Columns displayed in the table. */
  displayedColumns = ['id', 'status', 'battery_level', 'station_id'];

  @Input() city: any;
  @Input() scooters: any;

    
    constructor(
      public scooterService: ScooterService, 
      public dialog: MatDialog
    ) {
    this.dataSource = new ScooterTableDataSource();
  }

  //Gets data from scooterService 
  refresh(): void{
    this.scooterService.getScooters().subscribe(resources => {
      this.dataSource.data = resources; 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }
  
  ngAfterViewInit(): void {
    this.refresh();
  }

  openDialog(row: any) {
    console.log(row)
    this.dialog.open(ScooterDialogComponent, {
      data: row,
      height: '400px',
      width: '600px',
    });
  }
}
