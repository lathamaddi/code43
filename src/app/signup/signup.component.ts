import { Component, OnInit } from '@angular/core';
import { MatStepper } from '../../../node_modules/@angular/material';
import { Router } from '../../../node_modules/@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit() {
  }
  signup()
  {
    if(this.loginService.isAdvertiser)
    {
      this.router.navigateByUrl('advertise/dashboard');
    }
    else if(this.loginService.isAgency)
    {
      this.router.navigate(['hosts']);
    }
  }
}
