import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatButtonModule, MatCheckboxModule,MatListModule,MatToolbarModule,MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LeftNavComponent } from './left-nav.component';

describe('LeftNavComponent', () => {
  let component: LeftNavComponent;
  let fixture: ComponentFixture<LeftNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule
      ],
      declarations: [ LeftNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
