import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlertifyService } from '../_service/alertify.service';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model:any = {};
  constructor(private authService: AuthService, private alertify:AlertifyService) { }

  ngOnInit() {
  }
  register()
  {
    this.authService.Register(this.model).subscribe(next =>{
     this.alertify.success('You\'re registered successfully!');
    },error=>{
      this.alertify.error(error);
    });
  }
  cancel()
  {
    this.cancelRegister.emit(false);  
    this.alertify.success('Registration Cancelled!');
  }

}
