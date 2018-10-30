import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route5ChildRoute1Component } from './route5-child-route1.component';

describe('Route5ChildRoute1Component', () => {
  let component: Route5ChildRoute1Component;
  let fixture: ComponentFixture<Route5ChildRoute1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route5ChildRoute1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route5ChildRoute1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
