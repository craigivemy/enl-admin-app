import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AllTeamsBySeasonLoaded, AllTeamsBySeasonRequested, AllTeamsLoaded, AllTeamsRequested, TeamActionTypes} from './team.actions';
import {filter, map, mergeMap, switchMap, take, withLatestFrom} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {AppState} from '../index';
import {TeamService} from '../../club-team/team.service';
import {selectAllTeamsFromSeason, selectAllTeamsLoaded} from './team.selectors';

@Injectable()
export class TeamEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private teamsService: TeamService
    ) {}

    @Effect()
    loadTeamsBySeason$ = this.actions$
        .pipe(
            ofType<AllTeamsBySeasonRequested>(TeamActionTypes.AllTeamsBySeasonRequested),
            map (action => action.payload),
            switchMap(payload => {
                return this.store
                    .pipe(
                        // once page loads, it has one in the store, this will always return a result
                        select(selectAllTeamsFromSeason(payload.seasonId)),
                        take(1),
                        // todo - make this conditional so it doesn't call api every time
                        mergeMap(teams => {
                            return this.teamsService.getTeamsBySeason(payload.seasonId);
                        }),
                        map(teams => new AllTeamsBySeasonLoaded({teams}))
                    );
            })
        );
    @Effect()
    loadAllSeasons$ = this.actions$
        .pipe(
            ofType<AllTeamsRequested>(TeamActionTypes.AllTeamsRequested),
            withLatestFrom(this.store.pipe(select(selectAllTeamsLoaded))),
            filter(([action, allSeasonLoaded]) => !allSeasonLoaded),
            mergeMap(() => this.teamsService.getAllTeams()),
            map(teams => new AllTeamsLoaded({teams}))
        );
}
