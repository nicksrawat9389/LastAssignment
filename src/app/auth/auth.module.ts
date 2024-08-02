import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { PersonWorkingComponent } from './person-working/person-working.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetMailComponent } from './reset-mail/reset-mail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {MatIconModule} from '@angular/material/icon';
import { WrapperComponent } from './wrapper/wrapper.component'
import {MatSortModule} from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    SigninComponent,
    PersonWorkingComponent,
    ForgotPasswordComponent,
    ResetMailComponent,
    DashboardComponent,
    SidebarComponent,
    AddUserComponent,
    ConfirmPasswordComponent,
    ChangePasswordComponent,
    WrapperComponent
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatSortModule,
    MatTableModule
    
  ]
})
export class AuthModule { }
