import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '../../../node_modules/@angular/material';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private snackBar:MatSnackBar,private route:Router) { }
   userName:string;
   passWord:string;
   
  ngOnInit() {
  }
  
  login()
  {
    if(this.userName=="user"&&this.passWord=="user")
    {
      this.route.navigate(['signup']); 
    }
    else
    {
      this.snackBar.open('invalid credentials', '', {
        duration: 5000,
      });
      
    }
   
  }

}
