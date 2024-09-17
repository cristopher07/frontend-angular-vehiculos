import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPlacaFormComponent } from './tipo-placa-form.component';

describe('TipoPlacaFormComponent', () => {
  let component: TipoPlacaFormComponent;
  let fixture: ComponentFixture<TipoPlacaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoPlacaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoPlacaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
