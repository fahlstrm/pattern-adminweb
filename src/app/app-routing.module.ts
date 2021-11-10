import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/routes/home/home.component';
import { CitiesComponent } from './components/routes/cities/cities.component';
import { CityComponent } from './components/routes/city/city.component';
import { CustomersComponent } from './components/routes/customers/customers.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'city', component: CitiesComponent },            //Shows all cities
  { path: 'city/:name', component: CityComponent },        //Shows specific city
  { path: 'customers', component: CustomersComponent },
  { path: '**', component: HomeComponent },               // Wildcard / Fallback route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
