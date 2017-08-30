import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarloggedinComponent } from './navbarloggedin.component';

describe('NavbarloggedinComponent', () => {
  let component: NavbarloggedinComponent;
  let fixture: ComponentFixture<NavbarloggedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarloggedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarloggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
