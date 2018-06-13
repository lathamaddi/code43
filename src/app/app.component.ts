import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sport TV';
  isDarkTheme = false;

  @Input() formData;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor() {
  }

  someMethod() {
    this.trigger.openMenu();
  }

  public ngOnInit() {
  }

}
