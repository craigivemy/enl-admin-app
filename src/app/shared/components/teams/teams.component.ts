import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../reducers';
import {AllTeamsRequested} from '../../../store/teams/teams.actions';
import {Observable} from 'rxjs';
import {Team} from '../../models/team.model';
import {selectAllTeams} from '../../../store/teams/teams.selectors';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams$: Observable<Team[]>;
  constructor(
      private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new AllTeamsRequested());
    this.teams$ = this.store
        .pipe(
            select(selectAllTeams)
        );
  }

}
