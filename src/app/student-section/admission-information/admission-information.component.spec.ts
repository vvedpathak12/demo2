import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionInformationComponent } from './admission-information.component';

describe('AdmissionInformationComponent', () => {
  let component: AdmissionInformationComponent;
  let fixture: ComponentFixture<AdmissionInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
