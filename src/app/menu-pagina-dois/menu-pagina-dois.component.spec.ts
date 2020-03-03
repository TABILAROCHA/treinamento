import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPaginaDoisComponent } from './menu-pagina-dois.component';

describe('MenuPaginaDoisComponent', () => {
  let component: MenuPaginaDoisComponent;
  let fixture: ComponentFixture<MenuPaginaDoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPaginaDoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPaginaDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
