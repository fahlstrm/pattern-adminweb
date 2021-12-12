import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'; 
import { HttpService } from 'src/app/services/http.service'; 
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  auth: boolean = false;
  authSubscription: Subscription;

  constructor(
    public authService: AuthService,
    public httpService: HttpService
  ) {
    this.authSubscription = this.authService.onSetLoginEvent().subscribe(data => {
      this.auth = data;
    })
  }

  ngOnInit(): void {
    this.checkClick();
  }

  // Checks if admin is authorized
  checkClick(): void {
    this.httpService.checkAdminAuth()
    .subscribe((res: any) => {
      console.log("res", res)
      if (res.user_type == "admin") {
        this.authService.setAdminId(res.id);
        this.auth = true;
      }
    });
  }


  //Not sure to be used in body
  // Changes variable to show new screen when login has been initiated
    // loginClick(): void {
    //   this.auth = !this.auth;
    // }


}
