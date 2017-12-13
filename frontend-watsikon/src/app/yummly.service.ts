import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class YummlyService {

  private messagDefault = new BehaviorSubject<string>("Not yet implemented");
  currentMessage = this.messagDefault.asObservable();

  constructor() { }

  changeMessage(message : string) {
    this.messagDefault.next(message)
  }

  changeMessagedefault(){
    this.messagDefault.next("Not yet implemented")
  }
}
