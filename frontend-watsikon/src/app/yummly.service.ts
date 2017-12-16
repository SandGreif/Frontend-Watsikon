import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class YummlyService {

  private messagDefault = new BehaviorSubject<string>("");
  currentMessage = this.messagDefault.asObservable();

  constructor() { }

  changeMessage(url : string) {
    this.messagDefault.next(url)
  }

  changeMessagedefault(){
    this.messagDefault.next("https://www.yummly.com/")
  }
}
