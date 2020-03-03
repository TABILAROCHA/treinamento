import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioDeDocumentoComponent } from './envio-de-documento.component';

describe('EnvioDeDocumentoComponent', () => {
  let component: EnvioDeDocumentoComponent;
  let fixture: ComponentFixture<EnvioDeDocumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvioDeDocumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioDeDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
