import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BroadcasterService } from 'ng-broadcaster';

@Component({
  selector: 'app-adcreative',
  templateUrl: './adCreative.component.html',
  styleUrls: ['./adCreative.component.css']
})
export class AdCreativeComponent implements OnInit {

  isSubmitted = false;
  constructor(private router: Router, private broadcaster: BroadcasterService) { }

  ngOnInit() {
  }

  onSubmit(evt: any) {
    this.isSubmitted = true;
  }

  onDashboard(evt?: any) {
    this.broadcaster.broadcast('onCreateCampaign', false);
    this.router.navigateByUrl('advertise/dashboard');
  }

}
