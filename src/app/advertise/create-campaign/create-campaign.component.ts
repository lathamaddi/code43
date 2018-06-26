import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcampaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {

  routeLinks: any[];
  activeLinkIndex = 0;

  constructor(private router: Router) {

  this.routeLinks = [];
  this.routeLinks = [
    {
        label: 'Define Criteria',
        link: './definecriteria',
        index: 0
    }, {
        label: 'Select Placements',
        link: './placements',
        index: 1
    }, {
      label: 'Ad Creative',
      link: './adcreative',
      index: 2
    }];
  }

  public ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
    this.router.navigateByUrl('advertise/createcampaign/definecriteria');
  }


}
