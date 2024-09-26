import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFiccionComponent } from './card-ficcion.component';

describe('CardFiccionComponent', () => {
  let component: CardFiccionComponent;
  let fixture: ComponentFixture<CardFiccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFiccionComponent]
    });
    fixture = TestBed.createComponent(CardFiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
