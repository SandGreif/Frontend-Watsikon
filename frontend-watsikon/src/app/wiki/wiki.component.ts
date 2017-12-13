import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '.././wikipedia.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  message: string;
  
  constructor(private wiki: WikipediaService) { }

  ngOnInit() {
    this.wiki.currentMessage.subscribe(message => this.message = message)
  }

}
