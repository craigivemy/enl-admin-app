import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ApiRoutes} from '../../data/api-routes';
import {Observable} from 'rxjs';
import {Division} from '../../shared/models/division.model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DivisionService {
    divisionsApiUrl = environment.baseApiUrl + ApiRoutes.Divisions;

    constructor(private http: HttpClient) {
    }

    getActiveDivisions(): Observable<Division[]> {
        return this.http.get(`${this.divisionsApiUrl}`)
            .pipe(
                map(divisions => divisions['data'])
            );
    }
}
