import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertifyService } from '../_service/alertify.service';
import { AuthService } from '../_service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router:Router, private alertify: AlertifyService){}
  canActivate(): boolean {
    if(!this.authService.loggedIn()){
      this.alertify.error("You're not authorized to access this page.");
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
  
}
