import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model:any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  register()
  {
    this.authService.Register(this.model).subscribe(next =>{
      console.log('registration successful');
    },error=>{
      console.log(error);
    });
  }
  cancel()
  {
    this.cancelRegister.emit(false);  
    console.log('cancelled');
  }

}
