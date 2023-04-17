import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },
  { path: 'about', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
