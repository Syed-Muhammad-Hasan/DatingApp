import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = "http://localhost:33631/api/auth/";
  constructor(private http: HttpClient) { }
  login(model:any)
  {
    return this.http.post(this.baseUrl + "login",model)
    .pipe(
      map((response: any) =>{
        const user = response;
        if(user)
        {
          localStorage.setItem("token",user.token);
        }
      })
    );
  }

  Register(model:any)
  {
    return this.http.post(this.baseUrl + "register",model)
  }
}
