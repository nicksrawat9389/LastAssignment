import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseUrl='https://localhost:7087/api';

  private userDetailsSubject = new BehaviorSubject<any>(null);
  currentUserDetails = this.userDetailsSubject.asObservable();

  changeUserDetails(userDetails:any){
    this.userDetailsSubject.next(userDetails);
  }

  constructor(private httpClient:HttpClient) { }   

  updateUseDetails(userDetails:any,id:any,userId:any):Observable<any>{
    console.log("userId",userId)
    return this.httpClient.put<any>(`${this.baseUrl}/User/update-user-details/${id}/${userId}`,userDetails);
  }
}
 