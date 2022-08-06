import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl= environment.apiUrl;
constructor(private http:HttpClient) { }

getProfiles():Observable<User[]>{
  return this.http.get<User[]>(this.baseUrl+'users');

}

getProfile(id:any):Observable<User>{
  return this.http.get<User>(this.baseUrl+'users/'+id);
}
}
