import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRestComponent } from './navbar-rest.component';

describe('NavbarRestComponent', () => {
  let component: NavbarRestComponent;
  let fixture: ComponentFixture<NavbarRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
