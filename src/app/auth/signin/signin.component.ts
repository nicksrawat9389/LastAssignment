import { Component, NgZoneOptions, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm!: FormGroup;
  formSubmitted:Boolean=false;
  isLogin:boolean=false;
  /**
   *
   */
  constructor(private authService:AuthService,private router:Router) {}
  ngOnInit(): void {
      this.loginForm = new FormGroup({
        email:new FormControl('',[Validators.email,Validators.required]),
        password:new FormControl('',[Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}'),Validators.required])
      });
  }

  onSubmitHandler(){
    if(this.loginForm.valid){
      this.authService.onLogin(this.loginForm.value).subscribe((response:any)=>
        {
          console.log('response',response)
          localStorage.setItem('token',response.token);
          localStorage.setItem('isLogin',JSON.stringify(!this.isLogin));
          localStorage.setItem('userId',JSON.stringify(response.id));
          localStorage.setItem('name',JSON.stringify(response.firstName+' '+response.lastName));
          this.router.navigate(['/wrapper/dashboard',`${response.id}`]);
        })
    }
    else{
      this.formSubmitted=true;
      console.log("False");
    }
  }

}
