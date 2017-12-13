import { Component, OnInit, Input} from '@angular/core';
import { YummlyService } from ".././yummly.service";

@Component({
  selector: 'app-yummly',
  templateUrl: './yummly.component.html',
  styleUrls: ['./yummly.component.css']
})
export class YummlyComponent implements OnInit {

  message: string;

  constructor(private yummly: YummlyService) { }

  ngOnInit() {
    this.yummly.currentMessage.subscribe(message => this.message = message)
  }
}
