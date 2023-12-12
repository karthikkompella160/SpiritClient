import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }



  validateLogin(form: NgForm) {
    const loginCredentials={
      email:form.controls.email.value,
      pwd:form.controls.password.value
    }

    this.loginService.validateLogin(loginCredentials);
     
    }
    
}
