import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarRespuestasComponent } from './consultar-respuestas.component';

describe('ConsultarRespuestasComponent', () => {
  let component: ConsultarRespuestasComponent;
  let fixture: ComponentFixture<ConsultarRespuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarRespuestasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarRespuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
