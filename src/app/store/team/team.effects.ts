import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AllTeamsBySeasonLoaded, AllTeamsBySeasonRequested, TeamsActionTypes} from './team.actions';
import {map, mergeMap, switchMap, take} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {AppState} from '../index';
import {TeamService} from '../../modules/club-team/team.service';
import {selectAllTeamsFromSeason} from './team.selectors';

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
            ofType<AllTeamsBySeasonRequested>(TeamsActionTypes.AllTeamsBySeasonRequested),
            map (action => action.payload),
            switchMap(payload => {
                return this.store
                    .pipe(
                        select(selectAllTeamsFromSeason(payload.seasonId)),
                        take(1),
                        mergeMap(teams => {
                            if (teams.length) {
                                return [];
                            }
                            return this.teamsService.getTeamsBySeason(payload.seasonId);
                        }),
                        map(teams => new AllTeamsBySeasonLoaded({teams}))
                    );
            })
        );
}
