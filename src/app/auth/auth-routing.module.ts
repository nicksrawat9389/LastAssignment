import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetMailComponent } from './reset-mail/reset-mail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddUserComponent } from './add-user/add-user.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:SigninComponent
  },
  {
    path:'forgot-password',
    component:ForgotPasswordComponent
  },
  {
    path:'reset-mail',
    component:ResetMailComponent
  },
  {
    path:'reset-password/:email',
    component:ConfirmPasswordComponent
  },
  {
    path:'wrapper',
    component:WrapperComponent,
    children:[
      {
        path:'dashboard/:id',
        component:DashboardComponent
      },
      {
        path:'add-user/:id',
        component:AddUserComponent
      },{
        path:'change-password/:id',
        component:ChangePasswordComponent
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
