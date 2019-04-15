import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Season} from '../../store/season/season.model';
import {environment} from '../../../environments/environment';
import {ApiRoutes} from '../../data/api-routes';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  constructor(private http: HttpClient) { }
  // seasonsApiUrl = environment.baseApiUrl + ApiRoutes.Seasons;
  // getSeasons(): Observable<Season[]> {
  //   return this.http.get<Season[]>(this.seasonsApiUrl);
  // }
}
