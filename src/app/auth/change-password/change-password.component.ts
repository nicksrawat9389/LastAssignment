import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit{
  changePasswordForm!:FormGroup;
  constructor(private authService:AuthService,private activatedRoute:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.changePasswordForm=new FormGroup({
      currentPassword:new FormControl('',[Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}'),Validators.required]),
      newPassword:new FormControl('',[Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}'),Validators.required])
    })
  }
  onSubmitHandler(){
    if(this.changePasswordForm.valid)
      {
       
          const userId = this.activatedRoute.snapshot.params['id'];
          console.log("id",userId);
          console.log("newPassword",this.changePasswordForm.get('newPassword')?.value);
          this.authService.changePassword(userId,this.changePasswordForm.value).subscribe((response:any)=>{
            console.log(response);
            this.router.navigate(['/'])
          })
        
      }
  }
}
