import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './dashboard/content/content.component';
import { MycoursesComponent } from './dashboard/mycourses/mycourses.component';
import { NotesComponent } from './dashboard/notes/notes.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './gaurd/auth.guard';

const routes: Routes = [

  { path: "", component: LoginComponent },
  { path: "logout", redirectTo: "" },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: "dashboardcontent", component: ContentComponent,canActivate: [AuthGuard] },
      { path: "mycourses", component: MycoursesComponent ,canActivate: [AuthGuard]},
      { path: "notes", component: NotesComponent ,canActivate: [AuthGuard]},
      { path: "myprofile", component: ProfileComponent,canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
