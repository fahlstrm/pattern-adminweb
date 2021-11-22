import { AfterViewInit, Component, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ScooterTableDataSource, ScooterTableItem } from './scooter-table-datasource';
import { MatTableDataSource } from '@angular/material/table';
import { ScooterService } from 'src/app/services/scooter.service'; 
import { ScooterDialogComponent } from '../../utils/dialogs/scooter-dialog/scooter-dialog.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-scooter-table',
  templateUrl: './scooter-table.component.html',
  styleUrls: ['./scooter-table.component.css']
})
export class ScooterTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  // dataSource: ScooterTableDataSource;
  dataSource = new MatTableDataSource<any>();
  scooterSubscription: Subscription;


  /** Columns displayed in the table. */
  displayedColumns = ['id', 'status', 'battery_level', 'station_id'];
  scooters: any = [];

  constructor(
      public scooterService: ScooterService, 
      public dialog: MatDialog
    ) {
    // this.dataSource = new ScooterTableDataSource();
    this.scooterSubscription = this.scooterService.getScooters().subscribe(resources => {
      this.dataSource.data = resources; 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })
  }

  ngAfterViewInit(): void {
  }

  openDialog(scooter: any) {
    this.dialog.open(ScooterDialogComponent, {
      data: scooter,
      height: '300px',
      width: '600px',
    });
  }
}
