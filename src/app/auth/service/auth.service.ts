import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppComponent } from '../../app.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl='https://localhost:7087/api';
  constructor(private httpClient: HttpClient)
  {
  }

  

  getAllUsers():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + '/User/all-user')
    

    // console.log("BehAVOOUR",this._users$.value);
  }

  onLogin(loginDetails:any):Observable<any>{
    return this.httpClient.post<any>(this.baseUrl + '/Auth/login',loginDetails)
  }

  addUser(userDetails:any,id:any):Observable<any>{
    console.log('Id is ',id);
    return this.httpClient.post<any>(this.baseUrl+`/User/create-user/${id}`,userDetails);
  }

  forgotPassword(email:any):Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+'/Auth/forgot-password-email/'+email,email);
  }

  resetPassword(email:any,newPassword:any):Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Jwt' });
    return this.httpClient.post<any>(`${this.baseUrl}/Auth/reset-password/${email}/${newPassword}`,{headers:headers});
  }

  changePassword(userId:number,value:any):Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Jwt' });
    return this.httpClient.post<any>(`${this.baseUrl}/Auth/change-password/${userId}`,value,{headers:headers})
  }
}
