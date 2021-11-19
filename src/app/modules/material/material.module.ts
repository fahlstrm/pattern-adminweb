import { NgModule } from '@angular/core';
//Angular Material Modules 
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator'; // for paginator in table (ability to switch pages)
import {MatSort, MatSortModule} from '@angular/material/sort'; //sorting table
import {MatTableDataSource, MatTableModule} from '@angular/material/table'; //table 
import {MatButtonModule} from '@angular/material/button'; //button 
import {MatIconModule} from '@angular/material/icon'; // icon 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; // toggle


const MaterialComponents = [
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatSlideToggleModule
  ]
  
  @NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents]
  })
  export class MaterialModule {};
  