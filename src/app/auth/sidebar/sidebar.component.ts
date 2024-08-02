import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    
    constructor(private router:Router) {}
    userId:any = localStorage.getItem('userId');

    navigateTo(route: string) {
      this.router.navigate([route,this.userId]);
    }
    

    

    
}
