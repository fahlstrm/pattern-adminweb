import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-scooter-dialog',
  templateUrl: './scooter-dialog.component.html',
  styleUrls: ['./scooter-dialog.component.css']
})
export class ScooterDialogComponent implements OnInit {
  fromPage!: string;
  fromDialog!: string;
  checked = true;
  disabled = false;

  constructor(
    public dialogRef: MatDialogRef<ScooterDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  ngOnInit(): void {
    console.log(this.data)
  }

  
  // closeDialog() {
  //   this.dialogRef.close({ 
  //     event: 'close', data: this.fromDialog });
  //   }


}
