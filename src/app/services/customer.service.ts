import { Injectable } from '@angular/core';
import { Subject, Observable, of} from "rxjs";
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _users: any = [];
  private subject = new Subject<any>();

  constructor(private httpService: HttpService, private http: HttpClient) {
    this.loadUsers();
  }  

  get users() {
    return of(this._users);
  }

  loadUsers() {
    this.httpService.getUsers().subscribe((data:any) => {
      this._users = data;
    })
    return this._users;
  }

  getUsers(): Observable<any> {
    this.httpService.getUsers().subscribe((data:any) => {
      this.subject.next(data);
    });
    return this.subject.asObservable();
  }
}
