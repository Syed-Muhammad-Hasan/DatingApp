import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  RegisterMode = false;
  constructor() { }

  ngOnInit() {
  }
  RegisterToggle()
  {
      this.RegisterMode = true;
  }
  cancelRegisterMode(registerMode:boolean)
  {
    this.RegisterMode = registerMode;
  }
}
