import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl='https://localhost:7087/api/User';
  constructor(private httpClient: HttpClient)
  {
  }

  

  getAllUsers():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + '/all-user')
    

    // console.log("BehAVOOUR",this._users$.value);
  }


}
