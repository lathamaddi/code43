import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-campaign',
  templateUrl: './place-campaign.component.html',
  styleUrls: ['./place-campaign.component.css']
})
export class PlaceCampaignComponent implements OnInit {

  public when:boolean;
  public where:boolean;
  public how:boolean;
   public index:number;
  constructor() {
    this.where=true;
    this.when=false;
    this.index=0;
   }
   formatLabel(value: number | null) {
   

    return value;
  }
  ngOnInit() {
  }
  next()
  {
    this.when=true;
    this.where=false;
    this.how=false;
    this.index=1;
  }
  back()
  {
    this.where=true;
    this.index=0;
    this.when=false;
    this.how=false;
  }
  run()
  {
    this.where=false;
    this.when=false;
    this.how=true;
    this.index=2;
  }
  select()
  {
    
  }
}
