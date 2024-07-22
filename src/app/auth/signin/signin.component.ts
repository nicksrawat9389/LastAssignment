import { Component, NgZoneOptions, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm!: FormGroup;
  formSubmitted:Boolean=false;
  ngOnInit(): void {
      this.loginForm = new FormGroup({
        email:new FormControl('',[Validators.email,Validators.required]),
        password:new FormControl('',[Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}'),Validators.required])
      });
  }

  onSubmitHandler(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }
    else{
      this.formSubmitted=true;
      console.log("False");
    }
  }

}
