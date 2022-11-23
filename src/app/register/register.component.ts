import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../validation.service';
import { NotificationService } from '../notification.service';
import { Router } from '@angular/router';

import { UserModel } from '../shared/model/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public signUpForm !: FormGroup;
  public signupObj = new UserModel();
  constructor(public validate:ValidationService,
              public notification:NotificationService,
              private route:Router,
              private fb :FormBuilder, private http : HttpClient,private router : Router,) { }
  ngOnInit(): void { 
    this.signUpForm = this.fb.group({
      UserName:["", Validators.required],
      PhoneNumber:["",Validators.required],
        Email:["",Validators.compose([Validators.required,Validators.email])],
      Password:["",Validators.required],
      ConfirmPassword:["",Validators.required],
     
     
    })
  }
  signUp(){
      this.http.post<any>("http://localhost:3000/signupUser", this.signUpForm.value)
      .subscribe(res=>{
        alert("Signup Successfull");
        this.signUpForm.reset();
        this.router.navigate(['login'])
      },err=>{
        alert("Something went wrong");
      })
    }
  //   this.signupObj.UserName = this.signUpForm.value.UserName;
  //   this.signupObj.Password= this.signUpForm.value.Password;
  //   this.signupObj.ConfirmPassword = this.signUpForm.value.ConfirmPassword;
  //   this.signupObj.Email = this.signUpForm.value.Email;
  //   this.signupObj.PhoneNumber = this.signUpForm.value.PhoneNumber
  //   this.api.signUp(this.signupObj)
  //   .subscribe(res=>{
  //     alert(res.message);
  //     this.signUpForm.reset();
  //     this.router.navigate(['login'])
  //   })
  // }
  ClearValue()
{
  this.signUpForm.reset();
  this.validate.initializeForms();
}
submitData(){
  this.notification.successfullyCreated("Registeration Done Successfully");
}
bact_to_sign(){
  this.route.navigateByUrl('/'+'sign');
}
}
