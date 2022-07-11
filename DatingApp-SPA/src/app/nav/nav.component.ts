import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_service/alertify.service';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any = {};
  constructor(public authService: AuthService, private alertify:AlertifyService) { }

  ngOnInit() {
  }

  login()
  {
    this.authService.login(this.model).subscribe(next =>{
      this.alertify.success("You're logged in successfully!");
    },error =>{
       this.alertify.error(error);
    });
  }
  loggedIn(){
    return this.authService.loggedIn();
  }
  logout()
  {
    localStorage.removeItem('token');
    this.alertify.success("You're logged out successfully!");
  }
}
