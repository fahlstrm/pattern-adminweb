import { Component, OnInit, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.css']
})
export class CustomerDialogComponent implements OnInit {
  fromPage!: string;
  fromDialog!: string;
  customer: any = [{username: "test"}]; 
  customerSubscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<CustomerDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public customerService: CustomerService
  ) {
    
    this.customerSubscription = this.customerService.getCustomer().subscribe(
      (data :any ) => {
        this.customer = data;
        console.log(this.customer)
      }
    );
  }

  ngOnInit(): void {
  }

}
