import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Angular material module from modules-folder
import { MaterialModule } from './modules/material/material.module';

//Leaflet
import { LeafletModule } from '@asymmetrik/ngx-leaflet'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/routes/home/home.component';
import { CityComponent } from './components/routes/city/city.component';
import { CitiesComponent } from './components/routes/cities/cities.component';
import { CustomersComponent } from './components/routes/customers/customers.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ScooterTableComponent } from './components/tables/scooter-table/scooter-table.component';
import { CustomerTableComponent } from './components/tables/customer-table/customer-table.component';
import { MapComponent } from './components/utils/map/map.component';
import { StationTableComponent } from './components/tables/station-table/station-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    CityComponent,
    CitiesComponent,
    CustomersComponent,
    ScooterTableComponent,
    CustomerTableComponent,
    MapComponent,
    StationTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LeafletModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
