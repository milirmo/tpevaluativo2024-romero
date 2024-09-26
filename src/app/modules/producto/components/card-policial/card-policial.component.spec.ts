import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPolicialComponent } from './card-policial.component';

describe('CardPolicialComponent', () => {
  let component: CardPolicialComponent;
  let fixture: ComponentFixture<CardPolicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPolicialComponent]
    });
    fixture = TestBed.createComponent(CardPolicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
