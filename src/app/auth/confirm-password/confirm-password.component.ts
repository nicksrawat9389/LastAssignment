import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {
  confirmPasswordForm!:FormGroup;
  constructor(private authService:AuthService,private activatedRoute:ActivatedRoute,private router:Router){

  }
  ngOnInit(): void {
    this.confirmPasswordForm=new FormGroup({
      newPassword:new FormControl('',[Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}'),Validators.required]),
      confirmPassword:new FormControl('',[Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}'),Validators.required])
    })
  }
  onSubmitHandler(){
    if(this.confirmPasswordForm.valid)
    {
      if(this.confirmPasswordForm.get('newPassword')?.value==this.confirmPasswordForm.get('confirmPassword')?.value){
        const email = this.activatedRoute.snapshot.params['email'];
        console.log("email",email);
        console.log("newPassword",this.confirmPasswordForm.get('newPassword')?.value);
        this.authService.resetPassword(email,this.confirmPasswordForm.get('newPassword')?.value).subscribe((response:any)=>{
          console.log(response);
          this.router.navigate(['/'])
        })
      }
    }
  }
}
