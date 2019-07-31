import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Umpire} from '../shared/models/umpire.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UmpireService {
  constructor(private http: HttpClient) { }
  umpiresApiUrl = `${environment.baseApiUrl}/umpires`;

  getUmpires(): Observable<Umpire[]> {
    return this.http.get<Umpire[]>(this.umpiresApiUrl)
        .pipe(
            map(umpires => umpires["data"])
        );
  }
}
