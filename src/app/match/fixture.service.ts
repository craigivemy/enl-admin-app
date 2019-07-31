import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ApiRoutes} from '../data/api-routes';
import {Observable} from 'rxjs';
import {Fixture} from '../shared/models/fixture.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor(
      private http: HttpClient
  ) { }
  fixturesApiUrl = environment.baseApiUrl + ApiRoutes.Fixtures;

  getFixturesBySeason(seasonId: number): Observable<Fixture[]> {
    return this.http.get<Fixture[]>(`${this.fixturesApiUrl}?seasonId=${seasonId}`)
        .pipe(
            map(fixtures => fixtures["data"])
        );
  }

}
