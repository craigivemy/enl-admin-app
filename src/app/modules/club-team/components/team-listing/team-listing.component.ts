import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {AllTeamsBySeasonRequested, AllTeamsRequested} from '../../../../store/team/team.actions';
import {Observable} from 'rxjs';
import {Team} from '../../../../shared/models/team.model';
import {selectAllTeamsFromSeason} from '../../../../store/team/team.selectors';
import {selectCurrentlySelectedSeason} from '../../../../store/season/season.selectors';
import {tap} from 'rxjs/operators';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {TeamDialogComponent} from '../team-dialog/team-dialog.component';

@Component({
  selector: 'app-teams',
  templateUrl: './team-listing.component.html',
  styleUrls: ['./team-listing.component.css']
})
export class TeamListingComponent implements OnInit {
  teams$: Observable<Team[]>;
  constructor(
      private store: Store<AppState>,
      private dialog: MatDialog
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
  editTeam(team: Team) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = team;

    const dialogRef = this.dialog.open(TeamDialogComponent, dialogConfig);

  }
}
