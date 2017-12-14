import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { UploadService } from "./upload.service";
import { TypeInfo } from "./typeInfo";
import { HttpErrorResponse } from '@angular/common/http';
import { YummlyService } from "./yummly.service";
import { WikipediaService } from "./wikipedia.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WATSIKON';

  @Input() info: TypeInfo;
  @Input() errorMsg: string;
  
  UrlYummly : string;
  txtWiki : string;
  image: any;
  urlCache: any;
  url: any;

  constructor(private yummly: YummlyService, private wiki: WikipediaService, private imageUpload: UploadService, private elem: ElementRef) {
    this.info = new TypeInfo;
    this.info.match = 'Match: -';
    this.info.name = 'Name: -';
    this.info.edibility = "Edibility: -";
  }

  ngOnInit() {
    this.yummly.currentMessage.subscribe(url => this.UrlYummly = url)
    this.wiki.currentMessage.subscribe(message => this.txtWiki = message)
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.urlCache = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  public uploadImage(): void {
    let files = this.elem.nativeElement.querySelector('#file').files;
    let formData = new FormData();
    let file = files[0];
    formData.append('file', file, file.name);
    this.imageUpload.uploadImage(formData).subscribe((resp) => {
      // resp is of type JSON
      console.log(resp);
      this.errorMsg = "";
      if (resp['responseStatus'] == 'OK') {
        this.info.match = 'Match: ' + 'found';
        this.url = this.urlCache;
        this.image = formData;
        this.info.name = 'Name: ' + resp['name'];
        this.info.edibility = 'Edibility: ' + resp['edibility'];
        this.wiki.changeMessage(resp['wikitext']);
        if(resp['recipeHTML'] != ""){
          this.yummly.changeMessage(resp['recipeHTML']);        
        }
      } else {
        this.info.match = 'Match: ' + 'not found';
        this.url = "";    
        this.info.name = "Name: -";
        this.info.edibility = "Edibility: -";
        this.yummly.changeMessagedefault();
        this.wiki.changeMessagedefault();
      }},
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
          this.errorMsg = 'Error: ' + err.error;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error.message}`);

          switch(err.status) {
            case 400:
            this.errorMsg = 'Error 400: ' + 'The uploaded file must be an image of type JPG or PNG'; 
            break;
            case 401:
            this.errorMsg = 'Error: ' + 'No API key provided, or the API key provided was not valid'; 
            break;
            case 404:
            this.errorMsg = 'Error: ' + 'The requested item or parameter doesn\'t exist'; 
            break;
            case 413:
            this.errorMsg = 'Error 413: ' + 'Maximum image size is 1.5MB'; 
            break;
            case 500:
            this.errorMsg = 'Error: ' + 'Too many training requests or general server communication problems'; 
            break;
            default:
            this.errorMsg = 'Error ' + err.status + ': ' + err.error.message;
          }
        }
        this.url = "";        
        this.info.match = 'Match: -';
        this.info.name = 'Name: -';
        this.info.edibility = "Edibility: -";
        this.yummly.changeMessagedefault();
        this.wiki.changeMessagedefault();
       });
    }
}
