import { Component, OnInit, ViewContainerRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HostServicesService } from '../services/host-services.service';

@Component({
  selector: 'app-hosts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {

  primarycolor:string;
  index:number;
  public isAddAgency:boolean;
  constructor(private ref: ChangeDetectorRef,private hostService:HostServicesService,private viewRef:ViewContainerRef) {this.isAddAgency=false;
   }

 
  ngOnInit() {
    this.primarycolor="primary";
    this.index=1;
    
    
  }
  
}
