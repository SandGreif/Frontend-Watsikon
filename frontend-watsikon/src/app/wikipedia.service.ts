import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class WikipediaService {
  
    private messagDefault = new BehaviorSubject<string>("default message");
    currentMessage = this.messagDefault.asObservable();
  
    constructor() { }
  
    changeMessage(message : string) {
      this.messagDefault.next(message)
    }
  }
  
