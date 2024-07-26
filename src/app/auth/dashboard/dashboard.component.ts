import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  users: any = [];
  constructor(private authService:AuthService) {
    this.authService.getAllUsers().subscribe(
      (user:any)=>{
        console.log(user)
        this.users=user;
      },(error)=>{
        console.log(error)
      }
    )
    console.log("Hello",this.users);
  }
}
