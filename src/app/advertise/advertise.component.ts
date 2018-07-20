import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BroadcasterService } from 'ng-broadcaster';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.css']
})
export class AdvertiseComponent implements OnInit, OnDestroy {
  routeLinks: any[];
  activeLinkIndex = 0;
  isAdvertiseMenuHidden = true;
  private subscription: Subscription;

  constructor(private router: Router, private broadcaster: BroadcasterService) {

  this.routeLinks = [];
  this.routeLinks = [
    {
        label: 'Dashboard',
        link: './dashboard',
        index: 0
    }, {
        label: 'Ad Library',
        link: './adlibrary',
        index: 1
    }];
  }

  public ngOnInit() {
    this.subscription = this.broadcaster.on<any>('onCreateCampaign').subscribe((obj) => {
      this.isAdvertiseMenuHidden = obj ? true : false;
    });
    this.subscription = this.broadcaster.on<any>('dashboard').subscribe((obj) => {
      this.isAdvertiseMenuHidden = obj ? true : false;
    });
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
    this.router.navigateByUrl('advertise/dashboard');
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
