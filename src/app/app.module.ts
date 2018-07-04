import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ObjectIdentificationComponent } from './components/object-identification/object-identification.component';
import { FindMissingCharacterComponent } from './components/find-missing-character/find-missing-character.component';
import { CountObjectsComponent } from './components/count-objects/count-objects.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ObjectIdentificationComponent,
    FindMissingCharacterComponent,
    CountObjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
