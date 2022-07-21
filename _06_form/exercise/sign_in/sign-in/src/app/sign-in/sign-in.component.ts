import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormGroup({
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
      }, this.checkConfirmPassword),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [this.check18Age, Validators.required]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.pattern('^\\+84\\d{9,10}$')),
    })
  }

  private checkConfirmPassword(abstractControl: AbstractControl): any {
    let password = abstractControl.value.password;
    let confirmPassword = abstractControl.value.confirmPassword;
    return (password === confirmPassword)? null: {notSame: true};
  }

  getPassword(){
    return this.signInForm.get('password').get('password');
  }

  getConfirmPassword(){
    return this.signInForm.get('password').get('confirmPassword');
  }

  private check18Age(abstractControl: AbstractControl): any {
    let today = new Date();
    let birthDate = new Date(abstractControl.value);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18? null: {not18: true};
  }

  onSubmit() {
    console.log(this.signInForm.value)
  }
}
