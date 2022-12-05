import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNoticasComponent } from './lista-noticas.component';

describe('ListaNoticasComponent', () => {
  let component: ListaNoticasComponent;
  let fixture: ComponentFixture<ListaNoticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNoticasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaNoticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
