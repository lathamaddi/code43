import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BroadcasterService } from 'ng-broadcaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sport TV';
  isDarkTheme = false;
  routeLinks: any[];
  activeLinkIndex = -1;
  isMainMenuHidden = false;
  @Input() formData;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(private router: Router,  private broadcaster: BroadcasterService) {
    this.routeLinks = [];
    this.routeLinks = [
      {
          label: 'Hosts',
          link: './hosts',
          index: 0
      }, {
          label: 'Advertisers',
          link: './advertise',
          index: 1
      }, {
          label: 'Agencies',
          link: './agencies',
          index: 2
      }, {
          label: 'Sign in',
          link: './signin',
          index: 3
      }
    ];
  }

  someMethod() {
    this.trigger.openMenu();
  }

  public ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
   });
  }

}
