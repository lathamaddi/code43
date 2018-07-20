import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isSignIn : boolean;
  public isAdvertiser : boolean;
  public isAgency : boolean;
  public isHost : boolean;
  constructor() { }
}
