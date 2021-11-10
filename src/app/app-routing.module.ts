import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/routes/home/home.component';
import { CitiesComponent } from './components/routes/cities/cities.component';
import { CustomersComponent } from './components/routes/customers/customers.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'city', component: CitiesComponent },
  { path: 'customers', component: CustomersComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
