import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiemensInternetComponent } from './siemens-internet.component';

describe('SiemensInternetComponent', () => {
  let component: SiemensInternetComponent;
  let fixture: ComponentFixture<SiemensInternetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiemensInternetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiemensInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
