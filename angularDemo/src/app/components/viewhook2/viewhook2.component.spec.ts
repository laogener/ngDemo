import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewhook2Component } from './viewhook2.component';

describe('Viewhook2Component', () => {
  let component: Viewhook2Component;
  let fixture: ComponentFixture<Viewhook2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewhook2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewhook2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
