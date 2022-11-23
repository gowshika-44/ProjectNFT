import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { ValidationService } from '../validation.service';
import { HttpClient } from '@angular/common/http';
import {FormGroup,FormBuilder, Validators} from '@angular/forms'

import { UserModel } from '../shared/model/user.model';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public loginForm !: FormGroup;
  public loginObj = new UserModel();
  constructor(public dialog:MatDialog,
              private route:Router,
              public signValidate:ValidationService,
              private fb :FormBuilder, private http : HttpClient,private router : Router,) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email:["",Validators.compose([Validators.required,Validators.email])],
      Password:["",Validators.required]
    });
   localStorage.clear();
  }
  login(){
      this.http.get<any>("http://localhost:3000/signupUser")
      .subscribe(res=>{
        const user = res.find((a:any)=>{
          return a.Email === this.loginForm.value.Email && a.Password === this.loginForm.value.Password
        })
        if(user){
         // alert("Login Success!!");
          this.router.navigate(['main']);
            this.loginForm.reset();
        }
      },err=>{
        alert("Something went wrong!!")
      })
    // this.loginObj.UserName = this.loginForm.value.email;
    // this.loginObj.Password = this.loginForm.value.password;
    // this.api.login(this.loginObj)
    // .subscribe(res=>{
    //   alert(res.message);
    //   this.router.navigate(['dashboard']);
    //   localStorage.setItem('token',res.token);
    //   localStorage.setItem('userType',res.userType);
    // },err=>{
    //   alert("soomething went wrong")
    // })
      }
  
  openRegister(){
    const configdia=new MatDialogConfig();
    configdia.width='80%';
    configdia.autoFocus=true;
    configdia.disableClose=true;
    this.dialog.open(RegisterComponent,configdia)
  }
  homepage(){
    this.route.navigateByUrl('/'+'main')
  }
}
