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

  constructor(private imageUpload: UploadService, private elem: ElementRef) {
    this.info = new TypeInfo;
    this.info.match = 'Match: -';
    this.info.name = 'Name: -';
    this.info.edible = "Edible: -";
  }

  public uploadImage(): void {
    let files = this.elem.nativeElement.querySelector('#file').files;
    let formData = new FormData();
    let file = files[0];
    formData.append('file', file, file.name);
    this.imageUpload.uploadImage(formData).subscribe(resp => {
      // Here, resp is of type JSON
      console.log(resp);
      this.info.match = 'Match: ' + resp['responseStatus'];
      if (resp['responseStatus']=='OK'){
        this.info.name = 'Name: ' + resp['name'];
        this.info.edible = 'Edible: ' + resp['edible'];
      } else {
        this.info.name = "Name: -";
        this.info.edible = "Edible: -";
      }
    });
  }

}
