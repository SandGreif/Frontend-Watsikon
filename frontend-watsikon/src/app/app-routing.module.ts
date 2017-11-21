import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from "@angular/router";
import { ImageUploadComponent } from './image-upload/image-upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/image-upload', pathMatch: 'full' },
  { path: 'image-upload', component: ImageUploadComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
