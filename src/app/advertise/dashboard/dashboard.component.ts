import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BroadcasterService } from 'ng-broadcaster';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private router: Router, private broadcaster: BroadcasterService) { }

  ngOnInit() {
  }

  createNewCampaign(evt: any) {
    this.broadcaster.broadcast('onCreateCampaign', true);
    this.router.navigateByUrl('advertise/createcampaign');
  }
}
