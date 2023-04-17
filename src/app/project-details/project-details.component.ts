import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectDetails } from '../project-details';
import { ProjectContributor } from '../project-manager';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  projectDetails: ProjectDetails | undefined;
  managers: ProjectContributor[] = [];

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.projectService.getProject(id).subscribe((data) => {
      this.projectDetails = {
        ...data.project,
        description:
          data.project.description
            .replace(/<p>/gi, '').replace(/<\/p>/gi, '')
            .trim() ||
          'Has not been described.',
        benefits:
          data.project.benefits.replace(/<p>/gi, '').replace(/<\/p>/gi, '').trim() ||
          'Has not been described.',
      };

      this.managers = Array.prototype.concat(
        data.project.programManagers || [],
        data.project.projectManagers || []
      );
    });
  }
}
