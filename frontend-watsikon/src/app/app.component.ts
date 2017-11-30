import { Component, ElementRef } from '@angular/core';
import { UploadService } from "./upload.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WATSIKON';

  constructor(private imageUpload: UploadService, private elem: ElementRef) {
  }

  public uploadImage(): void {
    let files = this.elem.nativeElement.querySelector('#file').files;
    let formData = new FormData();
    let file = files[0];
    formData.append('file', file, file.name);
    this.imageUpload.uploadImage(formData).subscribe(resp => {
      // Here, resp is of type HttpResponse<MyJsonData>.
      console.log(resp);
    });
  }
}
