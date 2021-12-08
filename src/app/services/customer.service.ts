import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private users = new Subject<any>();
  private logs = new Subject<any>();
  private userLog = new Subject<any>();
  private _userId: any; 
  private user = new Subject<any>();
  private customer = new Subject<any>();

  constructor(private httpService: HttpService, private http: HttpClient) {
  }  

  getUsers(): Observable<any> {
    this.httpService.getUsers().subscribe((data:any) => {
      this.users.next(data);
    });
    return this.users.asObservable();
  }

  getCustomer() {
    console.log(this._userId)
    this.httpService.getUser(this._userId).subscribe((data:any) => {
      console.log(data)
      this.customer.next(data);
    })
    return this.customer.asObservable();
    
  }

  setUser(userId: any): any {
    this._userId = userId;
    this.user.next(this._userId); 
  }

  getUserId(): any {
    return this._userId;
  }

  getUserLog(): Observable<any> {
    this.httpService.getUserLog(this._userId).subscribe((data:any) => {
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
