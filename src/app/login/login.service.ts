import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { AppConstants } from '../app-constants';
import { ResponseService } from '../services/response.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginSucess:boolean=false;
  constructor(private router:Router,private httpService:HttpService,private responseService:ResponseService) { }

  validateLogin(login:any){
    
    this.httpService.doPost(AppConstants.APIS.getUser,login).subscribe((data)=>{
      if(data)
      {
        this.loginSucess=true;
        this.responseService.user= data.response.user;

        this.responseService.courses=data.response.courses;
        console.log( this.responseService.courses)

        console.log(  this.responseService.user)
        this.router.navigate(['dashboard', 'dashboardcontent'],)
      }
    } )

  

  }
  
}
