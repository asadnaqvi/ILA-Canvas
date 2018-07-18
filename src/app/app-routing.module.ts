import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { ObjectIdentificationComponent } from './components/object-identification/object-identification.component';
import { FindMissingCharacterComponent } from './components/find-missing-character/find-missing-character.component';
import { CountObjectsComponent } from './components/count-objects/count-objects.component';
import {CompleteTheNameComponent} from './components/complete-the-name/complete-the-name.component';
import { ErrorResultComponent } from './components/error-result/error-result.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import { ImageLibraryComponent } from './components/image-library/image-library.component';
const routes: Routes = [{
  path:'dashboard',
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
  component:CountObjectsComponent,
  data:{
    imagePath:''
  }
},
{
  path:'ctn',
  component:CompleteTheNameComponent
},
{
  path:'image-library/:id',
  component:ImageLibraryComponent
},
{
  path:'image-library',
  component:ImageLibraryComponent
},
{
  path:'error',
  component:ErrorResultComponent
},
{
  path:'',
  redirectTo : '/dashboard',
  pathMatch:'full'
},
{
  path:'**',
  component:PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
