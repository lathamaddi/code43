import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatVerticalStepper } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-definecriteria',
  templateUrl: './defineCriteria.component.html',
  styleUrls: ['./defineCriteria.component.css']
})
export class DefineCriteriaComponent implements OnInit {

  @ViewChild('stepper')
  private stepper: MatVerticalStepper;
  cities = new FormControl();
  venues = new FormControl();
  citiesList: any[];
  venuesList: any[];
  public value : number;
  public adValue:number;
  constructor(private router: Router) {
    this.citiesList = ['All', 'Bellevue', 'Seattle', 'Kirkland'];
    this.venuesList = ['All', 'Dining - Upscale', 'Dining - Casual', 'Bar - Upscale', 'Bar - Casual'];
   }

  ngOnInit() {
    this.stepper.selectedIndex = 0;
    this.value=4;
    this.adValue=20;
  }

  onWhereSubmit() {
    this.stepper.selectedIndex = 1;
  }

  onBackSubmit(idx: any) {
    this.stepper.selectedIndex = idx - 1;
  }

  onWhenSubmit(idx: any) {
    this.stepper.selectedIndex = idx + 1;
  }

  onSelectPlacement() {
    this.router.navigateByUrl('advertise/createcampaign/placements');
  }
}
