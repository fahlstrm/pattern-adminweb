import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../../utils/dialogs/login-dialog/login-dialog.component';
@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {
  @HostBinding('class') classes = 'grid grid-wrap align-items';

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openLoginDialog(): void {
    this.dialog.open(LoginDialogComponent, {});
  }

}
