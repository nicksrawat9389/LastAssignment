import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  currentRoute: string='';
    name:string|null;
  constructor(private router: Router) 
  {
    const user = localStorage.getItem('name');
    if (user) {
      this.name = JSON.parse(user);
    } else {
      this.name = 'Guest'; // or handle it as appropriate
    }
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });

  }
  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('name');
    this.router.navigate(['/'])
  }
}
