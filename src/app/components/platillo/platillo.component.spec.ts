import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloComponent } from './platillo.component';
import { NO_ERRORS_SCHEMA } from "@angular/core"
describe('PlatilloComponent', () => {
  let component: PlatilloComponent;
  let fixture: ComponentFixture<PlatilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatilloComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
