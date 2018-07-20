import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import { HostServicesService } from '../../../services/host-services.service';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-about-business',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './about-business.component.html',
  styleUrls: ['./about-business.component.css']
})
export class AboutBusinessComponent implements OnInit {

 public isAddAgency:boolean;
 public isUpdateProfile:boolean;
 public isAddClient:boolean;
 public createClient:boolean;
 public index:number;
 public createCampign:boolean;
 public header:string;

  constructor(private router:Router,private hostService:HostServicesService,public loginService:LoginService) { }

  ngOnInit() {
    this.isAddAgency=this.loginService.isAgency;
    this.createClient=false;
    this.isUpdateProfile=this.loginService.isAdvertiser;
    this.isAddClient=false;
    this.createCampign=false;
    this.index=1;
    this.header='Tell us about your agency';
    if(this.isUpdateProfile)
    {
      this.header = 'Tell us about your business';
    }
  }
  signup()
  {
    if(this.loginService.isAdvertiser)
    {
      this.router.navigateByUrl('advertise/dashboard');
    }
    else
    {
        this.isAddAgency=true;
        this.isUpdateProfile=false;
        this.isAddClient=false;
        this.index=2;
    }
  }
  addAgency()
  {
    this.isAddAgency=false;
    this.isUpdateProfile=false;
    this.isAddClient=true;
    this.index=3;
    this.header="Thank you for signing up!";
  }
  addClient()
  {
    this.isAddAgency=false;
    this.isUpdateProfile=false;
    this.isAddClient=false;
    this.createClient=true;
    this.index=3;
    this.header="Let’s add a new client";
  }
  addCampign()
  {
    this.router.navigateByUrl('advertise/dashboard');
  }
  crCampign()
  {
  
    this.router.navigateByUrl('advertise/dashboard');
  }
}
