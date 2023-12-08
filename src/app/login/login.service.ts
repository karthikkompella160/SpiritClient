import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginSucess:boolean=false;
  constructor(private router:Router) { }

  validateLogin(login:any){
    
    if(login)
    {
      this.router.navigate(['dashboard', login ])
    }
    else{

      console.log("login failed")
    }

  }
  
}
