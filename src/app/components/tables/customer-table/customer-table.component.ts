import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CustomerTableDataSource, CustomerTableItem } from './customer-table-datasource';
import { CustomerService } from 'src/app/services/customer.service'; 
import { CustomerDialogComponent } from '../../utils/dialogs/customer-dialog/customer-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CustomerTableItem>;
  dataSource: CustomerTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'username', 'funds', 'payment_terms'];

  constructor(
    public customerService: CustomerService,
    public dialog: MatDialog
    ) {
    this.dataSource = new CustomerTableDataSource();
  }

  //Gets data from scooterService 
  refresh(): void{
    this.customerService.getUsers().subscribe(resources => {
      this.dataSource.data = resources; 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
    this.table.renderRows();
  }

  ngAfterViewInit(): void {
    // Had to set timeout to avoid error NG100 when testing -- double check that it does not interfer with functionality
    setTimeout(() => {
      this.refresh();
    });
  }

  openDialog(customer: any): void {
    this.customerService.setUser(customer.id);
    this.dialog.open(CustomerDialogComponent, {
      width: "80vw",
      data: customer
    });
  }
}
