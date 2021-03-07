import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JalonListComponent } from './jalon-list/jalon-list.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {
    path:"projectList",
    component: ProjectListComponent
  },
  {
    path:"JalonList",
    component: JalonListComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"projectList"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
