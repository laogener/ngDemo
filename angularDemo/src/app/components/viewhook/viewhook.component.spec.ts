import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhookComponent } from './viewhook.component';

describe('ViewhookComponent', () => {
  let component: ViewhookComponent;
  let fixture: ComponentFixture<ViewhookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewhookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
