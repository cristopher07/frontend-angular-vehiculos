import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoGasolinaFormComponent } from './tipo-gasolina-form.component';

describe('TipoGasolinaFormComponent', () => {
  let component: TipoGasolinaFormComponent;
  let fixture: ComponentFixture<TipoGasolinaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoGasolinaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoGasolinaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
