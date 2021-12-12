import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers = new Subject<any>();
  private logs = new Subject<any>();
  private userLog = new Subject<any>();
  private _customerId: any; 
  // private user = new Subject<any>();
  private customer = new Subject<any>();

  constructor(private httpService: HttpService, private http: HttpClient) {
  }  

  // Get users
  getCustomers(): Observable<any> {
    this.httpService.getCustomers().subscribe((data:any) => {
      this.customers.next(data);
    });
    return this.customers.asObservable();
  }

  getCustomer() {
    this.httpService.getCustomer(this._customerId).subscribe((data:any) => {
      this.customer.next(data);
    })
    return this.customer.asObservable();
  }

  // Set choosen customer
  setCustomer(customerId: any): any {
    this._customerId = customerId;
    this.customer.next(this._customerId); 
  }

  // Get current customer
  getCustomerId(): any {
    return this._customerId;
  }

  // Get log for current user
  getCustomerLog(): Observable<any> {
    this.httpService.getCustomerLog(this._customerId).subscribe((data:any) => {
      this.userLog.next(data);
    })
    return this.userLog.asObservable();
  }


  getLog(): Observable<any> {
    this.httpService.getLog().subscribe((data:any) => {
      this.logs.next(data);
    })
    return this.logs.asObservable();
  }

}
