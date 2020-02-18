import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeEventoComponent } from './tipo-de-evento.component';

describe('TipoDeEventoComponent', () => {
  let component: TipoDeEventoComponent;
  let fixture: ComponentFixture<TipoDeEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDeEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDeEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
