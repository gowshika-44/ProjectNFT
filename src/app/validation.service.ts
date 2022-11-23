import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ValidationService {
MatchValidator(source:string,target:string):ValidatorFn{
  return(control:AbstractControl):ValidationErrors | null =>{
    const sourceCtrl=control.get(source);
    const targetCtrl=control.get(target);

    return sourceCtrl && targetCtrl && sourceCtrl.value!==targetCtrl.value?{mismatch:true}:null;
  };  
}
  constructor() { }
  signinValidation:FormGroup=new FormGroup({
    Email:new FormControl('',Validators.required),
    Password:new FormControl('',[Validators.required,Validators.minLength(8)])
  });
  SignInitialize(){
    this.signinValidation.setValue({
      Email:'',
      Password:''
    })
  }

  validation:FormGroup=new FormGroup({
    Username:new FormControl('',Validators.required),
    Email:new FormControl('',Validators.required),
    Password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    ConfirmPassword:new FormControl('',[Validators.required,Validators.minLength(8)]),
    PhoneNumber:new FormControl('',[Validators.required,Validators.minLength(10)])
  },
  [this.MatchValidator('Password', 'ConfirmPassword')]
  );
  get passwordMatchError(){
    return(
      this.validation.getError('mismatch')&&
      this.validation.get('ConfirmPassword')?.touched
    );
  }
  initializeForms()
  {
    this.validation.setValue({
      Username:'',
      Email:'',
      Password:'',
      ConfirmPassword:'',
      PhoneNumber:''
    })
  }
}
