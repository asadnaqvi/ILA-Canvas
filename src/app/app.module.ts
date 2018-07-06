import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatListModule,MatToolbarModule,MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/layout/app.component';// './layo/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ObjectIdentificationComponent } from './components/object-identification/object-identification.component';
import { FindMissingCharacterComponent } from './components/find-missing-character/find-missing-character.component';
import { CountObjectsComponent } from './components/count-objects/count-objects.component';
import { LoginComponent } from './components/login/login.component';
import { HeadComponent } from './layout/head/head.component';
import { LeftNavComponent } from './layout/left-nav/left-nav.component';
import { CompleteTheNameComponent } from './components/complete-the-name/complete-the-name.component';
import { ErrorResultComponent } from './components/error-result/error-result.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ObjectIdentificationComponent,
    FindMissingCharacterComponent,
    CountObjectsComponent,
    LoginComponent,
    HeadComponent,
    LeftNavComponent,
    CompleteTheNameComponent,
    ErrorResultComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
