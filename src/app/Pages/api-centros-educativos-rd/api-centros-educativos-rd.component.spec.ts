import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCentrosEducativosRDComponent } from './api-centros-educativos-rd.component';

describe('ApiCentrosEducativosRDComponent', () => {
  let component: ApiCentrosEducativosRDComponent;
  let fixture: ComponentFixture<ApiCentrosEducativosRDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCentrosEducativosRDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCentrosEducativosRDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
