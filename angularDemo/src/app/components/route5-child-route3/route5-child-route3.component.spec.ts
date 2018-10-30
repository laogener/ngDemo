import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route5ChildRoute3Component } from './route5-child-route3.component';

describe('Route5ChildRoute3Component', () => {
  let component: Route5ChildRoute3Component;
  let fixture: ComponentFixture<Route5ChildRoute3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route5ChildRoute3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route5ChildRoute3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
