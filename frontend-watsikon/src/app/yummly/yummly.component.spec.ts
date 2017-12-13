import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YummlyComponent } from './yummly.component';
import {YummlyService} from '.././yummly.service';

describe('YummlyComponent', () => {
  let component: YummlyComponent;
  let fixture: ComponentFixture<YummlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YummlyComponent ],
      providers: [ YummlyService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YummlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
