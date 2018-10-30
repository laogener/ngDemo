import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route5ChildRoute2Component } from './route5-child-route2.component';

describe('Route5ChildRoute2Component', () => {
  let component: Route5ChildRoute2Component;
  let fixture: ComponentFixture<Route5ChildRoute2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route5ChildRoute2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route5ChildRoute2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
