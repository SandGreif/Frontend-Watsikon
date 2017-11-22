import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadComponent } from './image-upload.component';
import { HttpClientModule } from "@angular/common/http";
import { UploadService } from "../upload.service";

describe('ImageUploadComponent', () => {
  let component: ImageUploadComponent;
  let fixture: ComponentFixture<ImageUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ ImageUploadComponent ],
      providers: [ UploadService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
