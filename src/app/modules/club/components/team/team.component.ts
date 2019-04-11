import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {AllTeamsRequested} from '../../../../store/club/club.actions';
import {Observable} from 'rxjs';
import {Team} from '../../../../shared/models/team.model';
import {selectAllTeams} from '../../../../store/club/club.selectors';

@Component({
  selector: 'app-teams',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
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
