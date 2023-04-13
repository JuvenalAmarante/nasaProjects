import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { ProjectsList } from '../projects-list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  loading = false;
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();

    console.log(this.projects);
  }

  getProjects() {
    this.projectService.getProjects().subscribe((list: ProjectsList) => {
      this.projects = list.projects;
    });
  }
}
