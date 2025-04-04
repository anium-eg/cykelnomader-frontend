import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/models/api/ApiService';
import { LoginRequest, LoginSuccessfulResponse } from 'src/app/shared/models/user/Auth';
import { enviornment } from 'src/enviornments/enviornment';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {
  protected override baseUrl: string = enviornment.apiDomain + "/auth"

  // Login:Function = (req:LoginRequest):LoginSuccessfulResponse =>{
  //   try{
  //     this.http.post(this.baseUrl + "/login",req).subscribe()
  //   }
  //   catch{

  //   }
  // }

  constructor() { 
    super();
  }
}
