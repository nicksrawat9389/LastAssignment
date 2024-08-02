import { Component, Output ,EventEmitter, ViewChild} from '@angular/core';
import { AuthService } from '../service/auth.service';
import { enableDebugTools } from '@angular/platform-browser';
import { first } from 'rxjs';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Output() loginUserId:EventEmitter<number> =new EventEmitter<number>();
  users: any = [];
  p1:any;
  activeUsers:number=0;
  inActiveUsers:number=0;


  
  
  
  
  
  constructor(private authService:AuthService,private crudServices:CrudService,private router:Router) {
    this.authService.getAllUsers().subscribe(
      (user:any)=>{
        console.log(user)
        this.users=user;
        let active = this.users.filter((user:any)=>user.isActive);
        let inActive = this.users.filter((user:any)=>!user.isActive);
        this.activeUsers = active.length;
        this.inActiveUsers = inActive.length;
      },(error)=>{
        console.log(error)
      }
    )
    console.log("Hello",this.users);
  }

  editForm(user:any){
    this.crudServices.changeUserDetails(user);
    this.router.navigate(['/wrapper/add-user',`${localStorage.getItem('userId')}`]);
  }
}
