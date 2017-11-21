import { TestBed, inject } from '@angular/core/testing';
import {HttpClientModule} from "@angular/common/http";

import { UploadService } from './upload.service';

describe('UploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UploadService]
    });
  });

  it('should be created', inject([UploadService], (service: UploadService) => {
    expect(service).toBeTruthy();
  }));
});
