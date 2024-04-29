import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCiudadanoComponent } from './agregar-ciudadano.component';

describe('AgregarCiudadanoComponent', () => {
  let component: AgregarCiudadanoComponent;
  let fixture: ComponentFixture<AgregarCiudadanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCiudadanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCiudadanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
