import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UploadService {
  constructor(private http: HttpClient) {

  }

  public uploadImage(formdata: any ) {
    let _url: string = 'https://watsikontest.eu-de.mybluemix.net/watsikon/upload/picture';
    return this.http.post(_url, formdata)
      .catch(this._errorHandler) ;
  }

  private _errorHandler(error: Response) {
    console.error('Error Occured: ' + error);
    return Observable.throw(error || 'Some Error on Server Occured');

  }

}
