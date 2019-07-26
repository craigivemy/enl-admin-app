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

  getAllTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsApiUrl)
        .pipe(
            map(teams => teams["data"])
        );
  }
  getTeamsBySeason(seasonId: number): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.teamsApiUrl}?seasonId=${seasonId}`)
        .pipe(
            map(teams => teams["data"])
        );
  }

  updateTeam(teamId: number, changes: Partial<Team>) {
    return this.http.put<Team>(`${this.teamsApiUrl}/${teamId}`, changes);
  }

  addTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(`${this.teamsApiUrl}`, team);
  }



}
