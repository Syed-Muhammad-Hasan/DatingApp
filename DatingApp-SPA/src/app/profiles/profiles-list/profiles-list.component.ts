import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../_models/user';
import { AlertifyService } from '../../_service/alertify.service';
import { UserService } from '../../_service/user.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data=>{
      this.users = data['users'];
    });
   // this.loadProfiles();
  }

  // loadProfiles(){
  //   this.userService.getProfiles().subscribe((users:User[])=>{
  //     this.users = users;
  //   },error=>{
  //     this.alertify.error(error);
  //   })
  // }
}
