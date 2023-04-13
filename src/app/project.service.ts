import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectsList } from './projects-list';
import { ApiNasaService } from './api-nasa.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private route = `/techport/api/projects`;

  constructor(private apiNasaService: ApiNasaService) {}

  getProjects(): Observable<ProjectsList> {
    // return this.apiNasaService.get(this.route);

    return new Observable((subscriber) => {
      this.apiNasaService.get(this.route).subscribe((list) => {
        subscriber.next(list);
        subscriber.complete();
      });

      // subscriber.next({
      //   projects: [
      //     {
      //       acronym: '',
      //       projectId: 96897,
      //       title: '',
      //       website: '',
      //       lastUpdated: '2023-4-11',
      //     },
      //     {
      //       acronym: '',
      //       projectId: 118498,
      //       title: '',
      //       website: '',
      //       lastUpdated: '2023-4-5',
      //     },
      //     {
      //       acronym: '',
      //       projectId: 116332,
      //       title: '',
      //       website: '',
      //       lastUpdated: '2023-3-31',
      //     },
      //   ],
      // });
    });
  }
}
