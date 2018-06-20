import { Component, OnInit } from '@angular/core';
import { MatStepper } from '../../../node_modules/@angular/material';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  signup()
  {
    this.router.navigate(['hosts']);
  }
}
