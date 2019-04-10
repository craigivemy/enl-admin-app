import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AllTeamsLoaded, AllTeamsRequested, TeamsActionTypes} from './teams.actions';
import {filter, map, mergeMap, tap, withLatestFrom} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {TeamsService} from '../../shared/services/teams.service';
import {selectAllTeams, selectAllTeamsLoaded} from './teams.selectors';



@Injectable()
export class TeamsEffects {

    @Effect()
    loadAllTeams$ = this.actions$
        .pipe(
            ofType<AllTeamsRequested>(TeamsActionTypes.AllTeamsRequested),
            withLatestFrom(this.store.pipe(select(selectAllTeamsLoaded))),
            filter(([action, allTeamsLoaded]) => !allTeamsLoaded),
            mergeMap(() => this.teamsService.getAllTeams()),
            map(teams => new AllTeamsLoaded({ teams }))
        );

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private teamsService: TeamsService
    ) {}

}
