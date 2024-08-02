import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent  implements OnInit{
  forgotForm!: FormGroup; 

  
  constructor(private authService:AuthService,private router:Router) {
    
  }

  ngOnInit(): void {
      this.forgotForm = new FormGroup({
        email:new FormControl('',[Validators.email,Validators.required])
      })
  }
  onSubmitHandler(){
    if(this.forgotForm.valid){
      console.log(this.forgotForm.get('email')?.value)
      this.authService.forgotPassword(this.forgotForm.get('email')?.value).subscribe((response:any)=>{
        console.log("response of forgot",response);
      })
      this.router.navigate([`/reset-mail`]);
    }
  }
}
