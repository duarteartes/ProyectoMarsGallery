import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRoverComponent } from './detalle-rover.component';

describe('DetalleRoverComponent', () => {
  let component: DetalleRoverComponent;
  let fixture: ComponentFixture<DetalleRoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleRoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleRoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
