import { Component, OnInit, Input} from '@angular/core';
import { YummlyService } from ".././yummly.service";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-yummly',
  templateUrl: './yummly.component.html',
  styleUrls: ['./yummly.component.css']
})
export class YummlyComponent implements OnInit {

  safeUrl: SafeUrl;

  constructor(private yummly: YummlyService, private sanitizer: DomSanitizer) { 
  }

  ngOnInit() {
    this.yummly.currentMessage.subscribe(url => 
      this.updateUrl(url))
  }

  private updateUrl(url: string) {
    // check if url is safe
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
