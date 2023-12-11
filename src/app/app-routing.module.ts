import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './dashboard/content/content.component';
import { MycoursesComponent } from './dashboard/mycourses/mycourses.component';

const routes: Routes = [

  {path:"",component:LoginComponent},
  {path:"dashboard/:user",component:DashboardComponent,
  children:[
    {path:"dashboardcontent",component:ContentComponent},
    {path:"mycourses",component:MycoursesComponent}

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
