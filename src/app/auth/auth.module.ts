import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { PersonWorkingComponent } from './person-working/person-working.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetMailComponent } from './reset-mail/reset-mail.component';


@NgModule({
  declarations: [
    SigninComponent,
    PersonWorkingComponent,
    ForgotPasswordComponent,
    ResetMailComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
