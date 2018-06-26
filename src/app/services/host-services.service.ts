import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostServicesService {
  public IsAddAgency:boolean;
  public IsAddProfile:boolean;
  public IsAddClient:boolean;
  
  constructor() { }
}
