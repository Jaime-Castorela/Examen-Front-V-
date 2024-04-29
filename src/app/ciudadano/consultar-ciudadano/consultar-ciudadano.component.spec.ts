import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCiudadanoComponent } from './consultar-ciudadano.component';

describe('ConsultarCiudadanoComponent', () => {
  let component: ConsultarCiudadanoComponent;
  let fixture: ComponentFixture<ConsultarCiudadanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarCiudadanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarCiudadanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
