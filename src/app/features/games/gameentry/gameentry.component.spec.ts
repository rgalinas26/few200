import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameentryComponent } from './gameentry.component';

describe('GameentryComponent', () => {
  let component: GameentryComponent;
  let fixture: ComponentFixture<GameentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
