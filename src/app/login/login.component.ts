import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IUser} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  country: string[] = [
    'vietnam',
    'chinna',
    'korean'
  ];
Users: IUser[] = [];
  constructor() {
  }

  ngOnInit() {
  }

  createUser() {
    let User = {
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      confirmPassword: this.userForm.value.confirmPassword,
      country: this.userForm.value.country,
      age: this.userForm.value.age,
      gender: this.userForm.value.gender,
      phone: this.userForm.value.phone
    };
    this.Users.push(User);
    console.log(User);
  }
  userForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/)]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
    country: new FormControl( '', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)])
  });

}
