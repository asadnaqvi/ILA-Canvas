import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Location,LocationStrategy,PathLocationStrategy,APP_BASE_HREF} from '@angular/common';
import { ErrorResultComponent } from './error-result.component';

describe('ErrorResultComponent', () => {
  let component: ErrorResultComponent;
  let fixture: ComponentFixture<ErrorResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorResultComponent ],
      providers:[Location,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: ''}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
