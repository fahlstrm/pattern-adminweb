import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
        for (const station of this.stations) {
          if (station.id == this.scooter.station_id) {
            this.scooterOnCharge = true; 
          }
        }
      })
    }

  ngOnInit(): void {
    this.checked = this.scooter.status == 'active' ? true  : false;
    this.disabled = this.scooter.customer_id != null ? true : false; //Toggle disabled if scooter is rented
  }

  moveScooterToStation(): void {
    this.scooter.station_id = this.selectedStation.id;
    this.scooter.lat_pos = this.selectedStation.lat_center;
    this.scooter.lon_pos = this.selectedStation.lon_center;
    this.scooter.status = "maintenance";
    this.scooterOnCharge = !this.scooterOnCharge;
    this.scooterService.moveScooterToPark(this.scooter);
  }

  setChecked(): void {
    this.checked = !this.checked;
    if (this.scooter.status == "active") {
      this.scooter.status = "inactive"
      this.scooterService.changeScooterStatus(this.scooter)

    } else if (this.scooter.status == "inactive") {
      this.scooter.status = "active"
      this.scooterService.changeScooterStatus(this.scooter)

    } else if (this.scooter.status == "maintenance") {
      this.scooter.status = "active",
      this.scooter.battery_level = 100;
      this.scooterService.removeScooterFromLoading(this.scooter)
    }
    console.log(this.scooter.status)
  }
}
