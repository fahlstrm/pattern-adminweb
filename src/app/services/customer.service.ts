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
  private _user: any; 
  private user = new Subject<any>();


  constructor(private httpService: HttpService, private http: HttpClient) {
  }  

  getUsers(): Observable<any> {
    this.httpService.getUsers().subscribe((data:any) => {
      this.users.next(data);
    });
    return this.users.asObservable();
  }

  setUser(user: any): any {
    this._user = user;
    this.user.next(this._user); 
  }

  getUser(): any {
    return this._user.id;
  }

  getUserLog(): Observable<any> {
    console.log("hämtar kund", this._user.id)
    this.httpService.getUserLog(this._user.id).subscribe((data:any) => {
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
