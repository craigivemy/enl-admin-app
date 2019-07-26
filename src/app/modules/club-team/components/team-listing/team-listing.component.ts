import {Component, Inject, OnInit, Optional} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {AllTeamsBySeasonRequested} from '../../../../store/team/team.actions';
import {Observable} from 'rxjs';
import {Team} from '../../../../shared/models/team.model';
import {selectAllTeamsFromSeason} from '../../../../store/team/team.selectors';
import {selectCurrentlySelectedSeason} from '../../../../store/season/season.selectors';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {EditTeamDialogComponent} from '../edit-team-dialog/edit-team-dialog.component';
import {AddTeamDialogComponent} from '../add-team-dialog/add-team-dialog.component';

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
    ) {
    }

    ngOnInit() {
        this.store
            .pipe(
                select(selectCurrentlySelectedSeason),
            )
            .subscribe(seasonId => {
                this.store.dispatch(new AllTeamsBySeasonRequested({seasonId}));
                this.teams$ = this.store
                    .pipe(
                        select(selectAllTeamsFromSeason(seasonId))
                    );
            });


    }

    editTeam(team: Team) {
        const editTeamDialogConfig = new MatDialogConfig();
        editTeamDialogConfig.data = team;

        const editDialogRef = this.dialog.open(EditTeamDialogComponent, editTeamDialogConfig);

    }

    addTeam() {
        const addDialogRef = this.dialog.open(AddTeamDialogComponent, new MatDialogConfig());
    }
}
