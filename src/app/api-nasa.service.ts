import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectsList } from './projects-list';

import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class ApiNasaService {
  constructor(
    private http: HttpClient,
    private notification: NzNotificationService
  ) {}

  get(route: string, params: { [param: string]: any } = {}): Observable<any> {
    return this.http
      .get<ProjectsList>(`${environment.apiUrl}${route}`, {
        params: { ...params, api_key: environment.apiKey },
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      this.notification.create(
        'error',
        'An error occurred',
        'An error occurred when requesting data from our servers:' + error.error
      );
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      this.notification.create(
        'error',
        `Error ${error.status}`,
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
