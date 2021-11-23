import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ScooterService } from 'src/app/services/scooter.service';

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
    @Optional() @Inject(MAT_DIALOG_DATA) public scooter: any,
    public scooterService: ScooterService
    ) {}

  ngOnInit(): void {
    console.log("i dialog", this.scooter)
    this.checked = this.scooter.status == 'active' ? true  : false;
    this.disabled = this.scooter.customer_id != null ? true : false; //Toggle disabled if scooter is rented
  }

  setChecked() {
    this.checked = !this.checked;
    console.log(this.scooter.status)
    if (this.scooter.status == "active") {
      this.scooter.status = "inactive"
    } else if (this.scooter.status == "inactive") {
      this.scooter.status = "active"
    }
    console.log(this.scooter.status)
    this.scooterService.changeScooterStatus(this.scooter)
  }
}
