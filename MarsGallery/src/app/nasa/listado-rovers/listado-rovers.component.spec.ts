import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRoversComponent } from './listado-rovers.component';

describe('ListadoRoversComponent', () => {
  let component: ListadoRoversComponent;
  let fixture: ComponentFixture<ListadoRoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoRoversComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoRoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
