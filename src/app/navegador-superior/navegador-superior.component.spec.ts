import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegadorSuperiorComponent } from './navegador-superior.component';

describe('NavegadorSuperiorComponent', () => {
  let component: NavegadorSuperiorComponent;
  let fixture: ComponentFixture<NavegadorSuperiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegadorSuperiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegadorSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
