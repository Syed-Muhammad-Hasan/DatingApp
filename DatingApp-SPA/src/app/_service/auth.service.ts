import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl+"auth/";
  jwtHelper = new JwtHelperService();
  decodedToken:any;

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
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
        }
      })
    );
  }

  Register(model:any)
  {
    return this.http.post(this.baseUrl + "register",model)
  }
  loggedIn(){
    const token = localStorage.getItem('token');
    if(token!=null){
      return !this.jwtHelper.isTokenExpired(token);
    }else{
      return false;
    }
    
  }
}
