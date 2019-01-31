import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getUsers() {
    return ['Ajay', 'Balu', 'Satya'];
  }

}
