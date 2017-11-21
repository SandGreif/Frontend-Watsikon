import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from "@angular/router";
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { UploadService } from "./upload.service";
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: '/image-upload', pathMatch: 'full' },
  { path: 'image-upload', component: ImageUploadComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
    ],
  exports: [
    RouterModule
  ],
  providers: [ UploadService ]
})
export class AppRoutingModule { }
