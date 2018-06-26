import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {

  constructor() {
    console.log('Agencies constructor called.');
  }

  ngOnInit() {
    console.log('Agencies intialized.');
  }

}
