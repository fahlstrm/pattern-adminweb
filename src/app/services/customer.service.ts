import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private subject = new Subject<any>();

  constructor(private httpService: HttpService, private http: HttpClient) {
  }  

  getUsers(): Observable<any> {
    this.httpService.getUsers().subscribe((data:any) => {
      this.subject.next(data);
    });
    return this.subject.asObservable();
  }
}
