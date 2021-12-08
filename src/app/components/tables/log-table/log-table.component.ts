import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'src/app/services/customer.service';
import { Subscription } from 'rxjs';
import { CustomerDialogComponent } from '../../utils/dialogs/customer-dialog/customer-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-log-table',
  templateUrl: './log-table.component.html',
  styleUrls: ['./log-table.component.css']
})
export class LogTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  dataSource = new MatTableDataSource<any>();
  logSubscription: Subscription;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id', 
    'customer_id', 
    'scooter_id',  
    'start_time', 
    'end_time', 
    'start_cost', 
    'travel_cost', 
    'parking_cost', 
    'total_cost'];

  constructor(
    public customerService: CustomerService,
    public dialog: MatDialog
  ) {
    this.logSubscription = this.customerService.getLog().subscribe(resources => {
      this.dataSource.data = resources;
      this.dataSource.data.forEach(row => {
        row.start_time = Date.parse(row.start_time);
        row.end_time = Date.parse(row.end_time);
      })
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })
   }


  ngAfterViewInit(): void {}

  
  openDialog(log: any): void {
    console.log(log)
    this.customerService.setUser(log.customer_id);
    this.dialog.open(CustomerDialogComponent, {
      width: "80vw",
      data: log
    });
  }
}
