import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '../../../node_modules/@angular/material';
import { Router } from '../../../node_modules/@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private snackBar:MatSnackBar,private router:Router,private loginService:LoginService) { }
   userName:string;
   passWord:string;
   
  ngOnInit() {
  }
  
  login()
  {
    if(this.userName=="ad"&&this.passWord=="ad")
    {
      this.loginService.isSignIn =true;
      this.router.navigateByUrl('advertise/dashboard');
      this.loginService.isAdvertiser=true;
    }
    else if(this.userName=="agent"&&this.passWord=="agent")
    {
      this.loginService.isSignIn =true;
      this.router.navigateByUrl('advertise/dashboard');
      this.loginService.isAgency=true;
    }
    else
    {
      this.snackBar.open('invalid credentials', '', {
        duration: 5000,
      });
      
    }
   
  }

}
