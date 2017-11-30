import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UploadService } from "./upload.service";
import { WikiComponent } from './wiki/wiki.component';
import { YummlyComponent } from './yummly/yummly.component';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [
    AppComponent,
    WikiComponent,
    YummlyComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [UploadService, ErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
