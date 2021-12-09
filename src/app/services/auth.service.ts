import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject, Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _adminId: any = [];
  private _loggedIn: any = false;
  private _loginEvent: any = [];
  private admin = new Subject<any>(); 
  private adminId = new Subject<any>(); 
  private adminLog = new Subject<any>(); 
  private loggedIn = new Subject<any>(); 
  private loginEvent = new Subject<any>(); 

  constructor(
    private httpService: HttpService
  ) { }

  
  // Get redirected to GitHub to log in
  loginCustomer(): any {
    this.httpService.githubRedirect()
    .subscribe((res) => {
      this.setLoggedin(!this._loggedIn)
      window.open(res.login_url);
    })
  }

  // Continue to the app after logging in
  checkClick(): void {
    console.log("i checkClick")
    this.httpService.checkAdminAuth()
    .subscribe((res) => {
      if (res.user_type == "customer" || res.user_type == "admin") {
        console.log("häntar admin", res)
        this.setAdminId(res.id);
        this.setLoginEvent("clicked")
      }
    })
  }

  onSetLoginEvent(): Observable<any> {
    return this.loginEvent.asObservable();
  }

  onSetLoggedIn(): Observable<any> {
    return this.loggedIn.asObservable();
  }

    
  // Set admin
  setAdminId(customerId: any): any  {
    this._adminId = customerId;
    this.adminId.next(this._adminId)
  }
  
  setLoggedin(loggedIn: any): any  {
    this._loggedIn = loggedIn;
    this.loggedIn.next(this._loggedIn)
  }

  setLoginEvent(loginEvent: any): any  {
    this._loginEvent = loginEvent;
    this.loginEvent.next(this._loginEvent)
  }
}
