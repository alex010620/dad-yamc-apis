import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiHospitalesRDComponent } from './api-hospitales-rd.component';

describe('ApiHospitalesRDComponent', () => {
  let component: ApiHospitalesRDComponent;
  let fixture: ComponentFixture<ApiHospitalesRDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiHospitalesRDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiHospitalesRDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
