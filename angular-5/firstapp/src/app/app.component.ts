import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService) { }

  userList = ['Ajay', 'Balu', 'Kevin', 'David'];

  title = 'Angular';
  users: any;

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }
}
