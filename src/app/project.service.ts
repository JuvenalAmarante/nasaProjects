import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectsList } from './projects-list';
import { ApiNasaService } from './api-nasa.service';
import { ProjectDetails } from './project-details';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private route = `/techport/api/projects`;

  constructor(private apiNasaService: ApiNasaService) {}

  getProjects(): Observable<ProjectsList> {
    return this.apiNasaService.get(this.route);
  }

  getProject(id: number): Observable<{ project: ProjectDetails }> {
    return this.apiNasaService.get(`${this.route}/${id}`);
  }
}
