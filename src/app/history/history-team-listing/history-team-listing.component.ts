import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {AllTeamsBySeasonRequested} from '../../store/team/team.actions';
import {Observable} from 'rxjs';
import {Team} from '../../shared/models/team.model';
import {selectAllTeamsFromSeason} from '../../store/team/team.selectors';
import {selectCurrentlySelectedSeason} from '../../store/season/season.selectors';

@Component({
    selector: 'app-teams',
    templateUrl: './history-team-listing.component.html',
    styleUrls: ['./history-team-listing.component.css']
})
export class HistoryTeamListingComponent implements OnInit {
    teams$: Observable<Team[]>;

    constructor(
        private store: Store<AppState>,
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
}
