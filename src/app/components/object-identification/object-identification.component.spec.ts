import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectIdentificationComponent } from './object-identification.component';

describe('ObjectIdentificationComponent', () => {
  let component: ObjectIdentificationComponent;
  let fixture: ComponentFixture<ObjectIdentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectIdentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
