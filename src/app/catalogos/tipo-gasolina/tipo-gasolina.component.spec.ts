import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoGasolinaComponent } from './tipo-gasolina.component';

describe('TipoGasolinaComponent', () => {
  let component: TipoGasolinaComponent;
  let fixture: ComponentFixture<TipoGasolinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoGasolinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoGasolinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
