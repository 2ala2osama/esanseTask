import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private userDataSubject: BehaviorSubject<User[]>;

  constructor() {
    this.userDataSubject = new BehaviorSubject<User[]>([
      { id: 1, name: 'جميع الهيئات', description: 'جميع الهيئات' },
      { id: 2, name: 'جميع الوزارات', description: 'جميع الوزارات' },
      { id: 3, name: ' الامانات', description: ' الامانات' },
    ]);
  }
  getUserDataObservable(){
    return this.userDataSubject.asObservable();
  }

  updateUserData(newData: User[]) {
    this.userDataSubject.next(newData);
  }
}
