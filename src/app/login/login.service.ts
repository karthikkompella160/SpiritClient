import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { AppConstants } from '../app-constants';
import { ResponseService } from '../services/response.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginSucess: boolean = false;
  constructor(private router: Router, private httpService: HttpService, private responseService: ResponseService, private message: NzMessageService,private authService:AuthService) { }

  validateLogin(login: any) {
     var msg="";

    this.httpService.doPost(AppConstants.APIS.getUser, login).subscribe((data) => {

      console.log(data)
      if (data.status === 'OK') {
        this.authService.login();
        this.loginSucess = true;
        this.responseService.user = data.response.user;
        this.responseService.courses = data.response.courses;
        this.router.navigate(['dashboard', 'dashboardcontent'],)
        const currentTime = new Date();
        const currentHour =currentTime.getHours();
        if (currentHour >= 5 && currentHour < 12) {
          msg= 'Good Morning!!';
        } else if (currentHour >= 12 && currentHour < 18) {
          msg= 'Good Afternoon!!';
        } else {
          msg= 'Good Evening!!';
        }
        this.message.success(msg,);


      }

      else {
        this.message.error("Email or password is incorrect")
      }
    })



  }

}
