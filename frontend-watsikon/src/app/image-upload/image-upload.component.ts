import { Component, OnInit, ElementRef } from '@angular/core';
import { UploadService } from "../upload.service";

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  constructor(private imageUpload: UploadService, private elem: ElementRef ) { }

  ngOnInit() {
  }

public uploadImage(): void {
  let files = this.elem.nativeElement.querySelector('#selectFile').files;
  let formData = new FormData();
  let file = files[0];
  formData.append('selectFile', file, file.name);
  this.imageUpload.uploadImage(formData).subscribe(resp => {
    // Here, resp is of type HttpResponse<MyJsonData>.
    // You can inspect its headers:
  //  console.log(resp.headers.get('X-Custom-Header'));
    // And access the body directly, which is typed as MyJsonData as requested.
    console.log(resp.body.someField);
  });
}
}
