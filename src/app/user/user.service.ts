import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Julia Doe' },
  ];

  getUsers(): Observable<Array<Object>>{
    return of(this.users);
  }
}
