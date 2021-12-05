import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminweb';
  auth = true; //Adjusts commercial view or logged in view with nav in body-component
}
