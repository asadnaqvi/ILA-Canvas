import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { ObjectIdentificationComponent } from './components/object-identification/object-identification.component';
import { FindMissingCharacterComponent } from './components/find-missing-character/find-missing-character.component';
import { CountObjectsComponent } from './components/count-objects/count-objects.component';
import {CompleteTheNameComponent} from './components/complete-the-name/complete-the-name.component';
import { ErrorResultComponent } from './components/error-result/error-result.component';
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
},
{
  path:'ctn',
  component:CompleteTheNameComponent
},
{
  path:'error',
  component:ErrorResultComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
