import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>([
    'Initial goal',
    'second goal',
    'third goal'
  ]);

  goal = this.goals.asObservable();

  constructor() { }

  changeGoals(goal){
    this.goals.next(goal);
  }
}
