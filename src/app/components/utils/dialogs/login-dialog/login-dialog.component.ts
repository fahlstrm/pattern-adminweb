import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  fromPage!: string;
  fromDialog!: string;


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
