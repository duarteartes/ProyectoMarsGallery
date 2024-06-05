import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFotosComponent } from './listado-fotos.component';

describe('ListadoFotosComponent', () => {
  let component: ListadoFotosComponent;
  let fixture: ComponentFixture<ListadoFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoFotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
