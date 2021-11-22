import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { StationScooterTableDataSource, StationScooterTableItem } from './station-scooter-table-datasource';
import { Subscription } from 'rxjs';
import { ScooterService } from 'src/app/services/scooter.service';

@Component({
  selector: 'app-station-scooter-table',
  templateUrl: './station-scooter-table.component.html',
  styleUrls: ['./station-scooter-table.component.css']
})
export class StationScooterTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<StationScooterTableItem>;
  dataSource = new MatTableDataSource<any>();
  stationScooterSubscription: Subscription;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'status', 'battery_level', 'station_id'];


  constructor(
    public scooterService: ScooterService,
  ) {
    this.stationScooterSubscription = this.scooterService.getStationScooters().subscribe(resources => {
      this.dataSource.data = resources; 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })
  }

  ngAfterViewInit(): void {
  }
}
