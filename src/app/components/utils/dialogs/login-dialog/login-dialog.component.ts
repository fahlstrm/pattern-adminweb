import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

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
  // loggedInSubscription: Subscription;

  loginEvent: any;
  // loginEventSubscription: Subscription;
  

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public mydata: any
    ) {}


  ngOnInit(): void {
    this.fromDialog = "I am from dialog land...";
  }

  closeDialog() {
    this.dialogRef.close({ 
      event: 'close', data: this.fromDialog });
    }
}
