import { NgModule } from '@angular/core';
//Angular Material Modules 
import {MatDialogModule} from '@angular/material/dialog';
import { MatPaginatorModule} from '@angular/material/paginator'; // for paginator in table (ability to switch pages)
import { MatSortModule} from '@angular/material/sort'; //sorting table
import { MatTableModule} from '@angular/material/table'; //table 
import {MatButtonModule} from '@angular/material/button'; //button 
import {MatIconModule} from '@angular/material/icon'; // icon 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; // toggle
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialComponents = [
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatFormFieldModule
  ]
  
  @NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents]
  })
  export class MaterialModule {}
  