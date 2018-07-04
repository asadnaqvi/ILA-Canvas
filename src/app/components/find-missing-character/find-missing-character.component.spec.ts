import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMissingCharacterComponent } from './find-missing-character.component';

describe('FindMissingCharacterComponent', () => {
  let component: FindMissingCharacterComponent;
  let fixture: ComponentFixture<FindMissingCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMissingCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMissingCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
