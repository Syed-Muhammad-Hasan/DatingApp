import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.css']
})
export class ProfileCardsComponent implements OnInit {
  @Input()
  user!: User;
  constructor() { }

  ngOnInit() {
  }

}
