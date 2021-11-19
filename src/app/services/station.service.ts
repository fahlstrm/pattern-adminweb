import { Injectable } from '@angular/core';
import { Subject, Observable, of} from "rxjs";
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  private _stations: any = [];
  private subject = new Subject<any>();

  constructor(private httpService: HttpService, private http: HttpClient) {
    this.loadStations();
  }

  get stations() {
    return of(this._stations);
  }

  loadStations() {
    this.httpService.getStations().subscribe((data:any) => {
      this._stations = data;
    })
    return this._stations;
  }

  getStations(): Observable<any> {
    this.httpService.getStations().subscribe((data:any) => {
      this.subject.next(data);
    });
    return this.subject.asObservable();
  }

}
