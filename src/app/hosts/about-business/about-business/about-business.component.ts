import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import { HostServicesService } from '../../../services/host-services.service';

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
  constructor(private router:Router,private hostService:HostServicesService) { }

  ngOnInit() {
    this.isAddAgency=false;
    this.createClient=false;
    this.isUpdateProfile=true;
    this.isAddClient=false;
    this.createCampign=false;
    this.index=1;
  }
  signup()
  {
    this.isAddAgency=true;
    this.isUpdateProfile=false;
    this.isAddClient=false;
    this.index=2;
  }
  addAgency()
  {
    this.isAddAgency=false;
    this.isUpdateProfile=false;
    this.isAddClient=true;
    this.index=3;
  }
  addClient()
  {
    this.isAddAgency=false;
    this.isUpdateProfile=false;
    this.isAddClient=false;
    this.createClient=true;
    this.index=3;
  }
  addCampign()
  {
    this.isAddAgency=false;
    this.isUpdateProfile=false;
    this.isAddClient=false;
    this.createClient=false;
    this.createCampign=true;
    this.index=4;
  }
  crCampign()
  {
  
    this.router.navigateByUrl('advertise/createcampaign/definecriteria');
  }
}
