import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { ScooterService } from 'src/app/services/scooter.service';
import { StationService } from 'src/app/services/station.service'; 
import { Subscription } from 'rxjs';

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
  stationSubscription: Subscription;
  stations: any = [];
  selectedStation: any;
  scooterOnCharge = false;
  

  constructor(
    public dialogRef: MatDialogRef<ScooterDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public scooter: any,
    public scooterService: ScooterService,
    public stationService: StationService,
    ) {
      this.stationSubscription = this.stationService.getStations().subscribe(resources => {
        this.stations = resources.filter((station: any) => station.type == 'charge');
        for (let station of this.stations) {
          if (station.id == this.scooter.station_id) {
            this.scooterOnCharge = true; 
          }
        }
      })
    }

  ngOnInit(): void {
    console.log("i dialog", this.scooter)
    this.checked = this.scooter.status == 'active' ? true  : false;
    this.disabled = this.scooter.customer_id != null ? true : false; //Toggle disabled if scooter is rented
  }

  moveScooterToStation() {
    console.log(this.selectedStation)
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
