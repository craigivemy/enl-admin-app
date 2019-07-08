import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {AllTeamsBySeasonRequested, AllTeamsRequested} from '../../../../store/team/team.actions';
import {Observable} from 'rxjs';
import {Team} from '../../../../shared/models/team.model';
import {selectAllTeams, selectAllTeamsFromSeason} from '../../../../store/team/team.selectors';
import {selectCurrentlySelectedSeason} from '../../../../store/season/season.selectors';
import {AllFixturesBySeasonRequested} from '../../../../store/fixture/fixture.actions';
import {selectAllFixturesFromSeason} from '../../../../store/fixture/fixture.selectors';
import {tap} from 'rxjs/operators';

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
    this.store
        .pipe(
            select(selectCurrentlySelectedSeason),
            tap(selectedSeason => console.log(selectedSeason))
        ).subscribe(seasonId => {
      this.store.dispatch(new AllTeamsBySeasonRequested({seasonId}));
      this.teams$ = this.store
          .pipe(
              select(selectAllTeamsFromSeason(seasonId))
          );
    });
  }
}
