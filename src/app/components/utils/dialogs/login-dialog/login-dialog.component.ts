import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service'; 

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  fromPage!: string;
  fromDialog!: string;

  btnText = "GitHub";

  loggedIn: boolean = false;
  loggedInSubscription: Subscription;

  loginEvent: any;
  loginEventSubscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public mydata: any,
    public authService: AuthService
    ) {
      this.loggedInSubscription = this.authService.onSetLoggedIn().subscribe(loggedIn => {
        console.log("loggin sub", loggedIn)
        this.loggedIn = loggedIn;
      })
  
      this.loginEventSubscription = this.authService.onSetLoginEvent().subscribe(loginEvent => {
        console.log("event", loginEvent)
        this.loginEvent = loginEvent;
      })
    }


  ngOnInit(): void {
    this.fromDialog = "I am from dialog land...";
  }

  closeDialog() {
    this.dialogRef.close({ 
      event: 'close', data: this.fromDialog });
  }

  loginClick() {
    console.log("test")
    this.authService.loginCustomer();
  }

  checkClick() {
    this.authService.checkClick();
  }
}
