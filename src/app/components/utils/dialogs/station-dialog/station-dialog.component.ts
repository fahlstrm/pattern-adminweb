import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ScooterService } from 'src/app/services/scooter.service';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-station-dialog',
  templateUrl: './station-dialog.component.html',
  styleUrls: ['./station-dialog.component.css']
})
export class StationDialogComponent implements OnInit {
  fromPage!: string;
  fromDialog!: string;
  checked = true;
  disabled = false;
  stationScooters: any = [];

  constructor(
    public dialogRef: MatDialogRef<StationDialogComponent>,
    public scooterService: ScooterService,
    public stationService: StationService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      
    }

  ngOnInit(): void {
    this.stationService.setStation(this.data);
  }

}
