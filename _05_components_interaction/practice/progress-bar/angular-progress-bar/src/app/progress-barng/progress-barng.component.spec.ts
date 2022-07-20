import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarngComponent } from './progress-barng.component';

describe('ProgressBarngComponent', () => {
  let component: ProgressBarngComponent;
  let fixture: ComponentFixture<ProgressBarngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
