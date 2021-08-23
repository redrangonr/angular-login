import { Component, OnInit } from '@angular/core';
import {ILogin} from '../login';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  iLogins : ILogin[] = []

  constructor() {}


  ngOnInit() {

  }
Create(){
let Login = {
  email: this.loginForm.value.Email,
  password: this.loginForm.value.Password
};
this.iLogins.push(Login)
}
loginForm : FormGroup = new FormGroup({
  email1: new FormControl('' ,[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/)]),
  password1: new FormControl('', [Validators.required,Validators.minLength(6)])
});
}
