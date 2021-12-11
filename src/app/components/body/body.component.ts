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
  // @Input() auth: any;
  auth: boolean = false;
  loggedIn: boolean = false;
  loggedInSubscription: Subscription;

  constructor(
    public authService: AuthService,
    public httpService: HttpService
  ) {
    this.loggedInSubscription = this.authService.onSetLoginEvent().subscribe(data => {
      console.log("loggin sub", data)
      this.auth = data;
    })
  }

  ngOnInit(): void {
    this.checkClick();
  }

  // Checks if user is authorized
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

  // Changes variable to show new screen when login has been initiated
  loginClick(): void {
    this.auth = !this.auth;
  }


}
