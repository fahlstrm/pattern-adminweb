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

  constructor(private httpService: HttpService, private http: HttpClient) {
  }  

  getUsers(): Observable<any> {
    this.httpService.getUsers().subscribe((data:any) => {
      this.users.next(data);
    });
    return this.users.asObservable();
  }

  getLog(): Observable<any> {
    this.httpService.getLog().subscribe((data:any) => {
      this.logs.next(data);
    })
    return this.logs.asObservable();

  }
}
