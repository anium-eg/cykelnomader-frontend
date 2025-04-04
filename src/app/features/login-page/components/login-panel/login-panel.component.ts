import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, RequiredValidator, Validators } from '@angular/forms';
import { UserRole } from 'src/app/shared/models/user/UserRoles';
import { LoginRequest, LoginSuccessfulResponse } from 'src/app/shared/models/user/Auth';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent {

  constructor(private http:HttpClient){}

  formData = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })


  persona:UserRole = "Cashier";
  credentialError:boolean = false;
  

  handlePersonaChange(newPersona:UserRole):void{
    this.persona = newPersona;
  }

  handleLogin:Function = async ():Promise<void> => {
    var postBody:LoginRequest = {
      loginId:this.formData.value.username ?? '',
      plainTextPassword:this.formData.value.password ?? '',
      roleClaim:this.persona
    }

    try {
      await this.http.post('https://localhost:7221/api/auth/login',postBody).subscribe(response =>{
        localStorage.setItem('jwtToken', (response as LoginSuccessfulResponse).token )
        console.log(response);
      })
    }
    catch {

    }

  }

  login:Function = ():void =>{
    console.log(this.formData.controls.password.value)
  }
}
