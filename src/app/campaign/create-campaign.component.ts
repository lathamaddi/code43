import { Component, OnInit, ChangeDetectorRef, ViewContainerRef } from '@angular/core';
import { HostServicesService } from '../services/host-services.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {

  primarycolor:string;
  index:number;
  public isAddAgency:boolean;
  constructor(private ref: ChangeDetectorRef,private hostService:HostServicesService,private viewRef:ViewContainerRef)
   {this.isAddAgency=false;
   }

 
  ngOnInit() {
    this.primarycolor="primary";
    this.index=1;
    
    
  }

}
