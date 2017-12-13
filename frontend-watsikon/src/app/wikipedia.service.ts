import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class WikipediaService {
  
     
    private messagDefault = new BehaviorSubject<string>("Upload an image of a mushroom. If it has been recognized successfully, you will find here more information about this fungus from Wikipedia.");
    currentMessage = this.messagDefault.asObservable();
  
    constructor() { }
  
    changeMessage(message : string) {
      this.messagDefault.next(message)
    }
    
    changeMessagedefault(){
      this.messagDefault.next("Upload an image of a mushroom. If it has been recognized successfully, you will find here more information about this fungus from Wikipedia."
    )
    }
  }
  
