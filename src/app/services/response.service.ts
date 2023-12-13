import { Injectable } from '@angular/core';
import User from '../model/User';
import Course from '../model/Course';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  user!: User;
  courses!: Array<Course>;
  constructor() { }
}
