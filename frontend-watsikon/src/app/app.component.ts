import { Component, ElementRef, Input } from '@angular/core';
import { UploadService } from "./upload.service";
import { TypeInfo } from "./typeInfo";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WATSIKON';

  @Input() info: TypeInfo;
  @Input() errorMsg: string;

  constructor(private imageUpload: UploadService, private elem: ElementRef) {
    this.info = new TypeInfo;
    this.info.match = 'Match: -';
    this.info.name = 'Name: -';
    this.info.edibility = "Edibility: -";
    this.info.wiki = "";
  }

  public uploadImage(): void {
    let files = this.elem.nativeElement.querySelector('#file').files;
    let formData = new FormData();
    let file = files[0];
    formData.append('file', file, file.name);
    this.imageUpload.uploadImage(formData).subscribe((resp) => {
      // resp is of type JSON
      console.log(resp);
      this.info.match = 'Match: ' + resp['responseStatus'];
      this.errorMsg = "";
      if (resp['responseStatus'] == 'OK') {
        this.info.name = 'Name: ' + resp['name'];
        this.info.edibility = 'Edibility: ' + resp['edibility'];
        this.info.wiki = resp['wiki'];
      } else {
        this.info.name = "Name: -";
        this.info.edibility = "Edibility: -";
      }},
      (error) => {
        console.log(error);
        this.errorMsg = 'Error: ' + error['error'];
        this.info.match = 'Match: -';
        this.info.name = 'Name: -';
        this.info.edibility = "Edibility: -";
        this.info.wiki = "";
        }
    );
  }

}
