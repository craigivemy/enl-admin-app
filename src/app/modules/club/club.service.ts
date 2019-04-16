import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Team} from '../../shared/models/team.model';
import {environment} from '../../../environments/environment';
import {ApiRoutes} from '../../data/api-routes';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  constructor(private http: HttpClient) { }
  teamsApiUrl = environment.baseApiUrl + ApiRoutes.Teams;

    getTeams(): Observable<Team[]> {
      return this.http.get<Team[]>(this.teamsApiUrl)
          .pipe(
              map(teams => teams["data"])
          );
  }


}
