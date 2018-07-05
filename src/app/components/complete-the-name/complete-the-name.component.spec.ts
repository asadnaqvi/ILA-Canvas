import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTheNameComponent } from './complete-the-name.component';

describe('CompleteTheNameComponent', () => {
  let component: CompleteTheNameComponent;
  let fixture: ComponentFixture<CompleteTheNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteTheNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteTheNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
