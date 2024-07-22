import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent  implements OnInit{
  forgotForm!: FormGroup
  ngOnInit(): void {
      this.forgotForm = new FormGroup({
        email:new FormControl('',[Validators.email,Validators.required])
      })
  }
  onSubmitHandler(){
    if(this.forgotForm.valid){
      
    }
  }
}
