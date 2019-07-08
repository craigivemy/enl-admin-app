import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Team} from '../../shared/models/team.model';
import {environment} from '../../../environments/environment';
import {ApiRoutes} from '../../data/api-routes';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private http: HttpClient) { }
  teamsApiUrl = environment.baseApiUrl + ApiRoutes.Teams;

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsApiUrl)
        .pipe(
            map(teams => teams["data"])
        );
  }
  getTeamsBySeason(seasonId: number): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.teamsApiUrl}?seasonId=${seasonId}`)
        .pipe(
            tap(() => console.log(`${this.teamsApiUrl}?seasonId=${seasonId}`)),
            map(teams => teams["data"])
        );
  }



}
