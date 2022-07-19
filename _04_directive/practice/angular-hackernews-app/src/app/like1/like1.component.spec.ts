import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Like1Component } from './like1.component';

describe('Like1Component', () => {
  let component: Like1Component;
  let fixture: ComponentFixture<Like1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Like1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Like1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
