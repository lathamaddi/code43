import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BroadcasterService } from 'ng-broadcaster';
import { LoginService } from './services/login.service';

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
  selected = 'option1';
  isMainMenuHidden = false;
  isSignIn=false;
  @Input() formData;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(private router: Router,  private broadcaster: BroadcasterService,public loginService:LoginService) {
   
    this.routeLinks = [];
    this.routeLinks = [
      {
          label: 'Hosts',
          link: './main',
          index: 0
      }, {
          label: 'Advertisers',
          link: './signup',
          index: 1
      }, {
          label: 'Agencies',
          link: './signup',
          index: 2
      }, {
          label: 'Sign in',
          link: './signin',
          index: 3
      }
    ];
  }
  changeSelect(e)
  {
    if(e === 'option2')
    {
      this.router.navigate(['main']);
      this.isMainMenuHidden=false;
      this.loginService.isSignIn=false;
    }
 
  }
  selectMainMenu(i)
  {
    this.isMainMenuHidden =true;
    this.activeLinkIndex = i;
    this.loginService.isHost=false;
    this.loginService.isAdvertiser=false;
    this.loginService.isAgency=false;
    switch (i) {
      case 0:
        this.loginService.isHost=true;
        break;
        case 1:
        this.loginService.isAdvertiser=true;
        break;
        case 2:
        this.loginService.isAgency=true;
        break;
      default:
        break;
    }
    
  }
  home()
  {
    if(this.loginService.isSignIn)
    {
      this.router.navigateByUrl('advertise/dashboard');
    }
    else
    {
      this.isMainMenuHidden=false;
      this.router.navigate(['']);
    }
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
