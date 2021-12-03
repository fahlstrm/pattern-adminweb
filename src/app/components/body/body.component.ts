import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() auth: any;

  constructor() {}

  ngOnInit(): void {
    console.log("body component")
  }



}
