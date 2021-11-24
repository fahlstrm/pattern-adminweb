import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { StationTableDataSource, StationTableItem } from './station-table-datasource';
import { StationService } from 'src/app/services/station.service'; 
import { Subscription } from 'rxjs';
import { StationDialogComponent } from '../../utils/dialogs/station-dialog/station-dialog.component';

@Component({
  selector: 'app-station-table',
  templateUrl: './station-table.component.html',
  styleUrls: ['./station-table.component.css']
})
export class StationTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  dataSource = new MatTableDataSource<any>();
  stationSubscription: Subscription;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'location', 'type'];
  stations: any = [];

  @Input() scooters: any;


  constructor(
    public stationService: StationService,
    public dialog: MatDialog

    ) {
    // this.dataSource = new StationTableDataSource();
    this.stationSubscription = this.stationService.getStations().subscribe(resources => {
      this.dataSource.data = resources; 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })
  }

  ngAfterViewInit(): void {
  }

  openDialog(scooter: any) {
    this.dialog.open(StationDialogComponent, {
      data: scooter,
      height: '70vh',
      width: '800px',
    });
  }
}
