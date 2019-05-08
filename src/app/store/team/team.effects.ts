import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AllTeamsLoaded, AllTeamsRequested, TeamsActionTypes} from './team.actions';
import {filter, map, mergeMap, tap, withLatestFrom} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {AppState} from '../index';
import {TeamService} from '../../modules/club-team/team.service';
import {selectAllTeams, selectAllTeamsLoaded} from './team.selectors';



@Injectable()
export class TeamEffects {

    @Effect()
    loadAllTeams$ = this.actions$
        .pipe(
            ofType<AllTeamsRequested>(TeamsActionTypes.AllTeamsRequested),
            withLatestFrom(this.store.pipe(select(selectAllTeamsLoaded))),
            filter(([action, allTeamsLoaded]) => !allTeamsLoaded),
            mergeMap(() => this.teamsService.getTeams()),
            map(teams => new AllTeamsLoaded({ teams }))
        );

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private teamsService: TeamService
    ) {}

}
