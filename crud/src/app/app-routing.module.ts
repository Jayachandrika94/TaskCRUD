import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './product/add/add.component';
import { EditComponent } from './product/edit/edit.component';
import { ViewComponent } from './product/view/view.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:'view',component:ViewComponent},
  {path:'add',component:AddComponent},
  {path:'edit/:i',component:EditComponent},
  {path:'reg', component:RegistrationComponent},
  {path:'log', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
