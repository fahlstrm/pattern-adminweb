import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { StationTableDataSource, StationTableItem } from './station-table-datasource';
import { StationService } from 'src/app/services/station.service'; 


@Component({
  selector: 'app-station-table',
  templateUrl: './station-table.component.html',
  styleUrls: ['./station-table.component.css']
})
export class StationTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  dataSource: StationTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'location', 'type'];


  @Input() scooters: any;


  constructor(public stationService: StationService,) {
    this.dataSource = new StationTableDataSource();

  }

  
  //Gets data from stationsService 
  refresh(): void{
    this.stationService.getStations().subscribe(data => {
      this.dataSource.data = data; 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }
  

  ngAfterViewInit(): void {
    this.refresh();
  }

  onClick(row: any) {
    console.log(row)
  }
}
