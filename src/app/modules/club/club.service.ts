import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Team} from '../../shared/models/team.model';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(http: HttpClient) { }

  getAllTeams() {
    return of([
      {
        id: 1,
        name: 'test'
      },
      {
        id: 2,
        name: 'test2'
      }
    ]);
  }


}
