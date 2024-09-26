import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRomanceComponent } from './card-romance.component';

describe('CardRomanceComponent', () => {
  let component: CardRomanceComponent;
  let fixture: ComponentFixture<CardRomanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRomanceComponent]
    });
    fixture = TestBed.createComponent(CardRomanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
