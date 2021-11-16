import { NgModule } from '@angular/core';
//Angular Material Modules 
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator'; // for paginator in table (ability to switch pages)
import {MatSort, MatSortModule} from '@angular/material/sort'; //sorting table
import {MatTableDataSource, MatTableModule} from '@angular/material/table'; //table module
import {MatButtonModule} from '@angular/material/button'; //button module
import {MatIconModule} from '@angular/material/icon'; // icon module

const MaterialComponents = [
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
  ]
  
  @NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents]
  })
  export class MaterialModule {};
  