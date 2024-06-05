import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCamarasComponent } from './listado-camaras.component';

describe('ListadoCamarasComponent', () => {
  let component: ListadoCamarasComponent;
  let fixture: ComponentFixture<ListadoCamarasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoCamarasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoCamarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
