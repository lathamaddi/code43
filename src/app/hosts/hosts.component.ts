import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {

  primarycolor:string;
  index:number;
  constructor() { }

  ngOnInit() {
    this.primarycolor="primary";
    this.index=1;
  }

}
