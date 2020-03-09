import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaSinistroComponent } from './busca-sinistro.component';

describe('BuscaSinistroComponent', () => {
  let component: BuscaSinistroComponent;
  let fixture: ComponentFixture<BuscaSinistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaSinistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaSinistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
