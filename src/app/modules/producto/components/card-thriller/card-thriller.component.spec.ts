import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardThrillerComponent } from './card-thriller.component';

describe('CardThrillerComponent', () => {
  let component: CardThrillerComponent;
  let fixture: ComponentFixture<CardThrillerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardThrillerComponent]
    });
    fixture = TestBed.createComponent(CardThrillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
