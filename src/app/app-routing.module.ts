import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { ObjectIdentificationComponent } from './components/object-identification/object-identification.component';
import { FindMissingCharacterComponent } from './components/find-missing-character/find-missing-character.component';
import { CountObjectsComponent } from './components/count-objects/count-objects.component';

const routes: Routes = [{
  path:'',
  component:DashboardComponent
},
{
  path:'oic',
  component:ObjectIdentificationComponent
},
{
  path:'fmcc',
  component:FindMissingCharacterComponent
},
{
  path:'coc',
  component:CountObjectsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
