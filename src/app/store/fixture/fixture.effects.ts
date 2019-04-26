import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AllFixturesBySeasonLoaded, AllFixturesBySeasonRequested, FixtureActions, FixtureActionTypes} from './fixture.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {AppState} from '../index';
import {selectAllFixturesFromSeason, selectAllFixturesFromSeasonLoaded} from './fixture.selectors';
import {FixtureService} from '../../modules/match/fixture.service';



@Injectable()
export class FixtureEffects {

  constructor(
      private actions$: Actions,
      private store: Store<AppState>,
      private fixtureService: FixtureService) {}

  loadFixturesBySeason$ = this.actions$
      .pipe(
          ofType<AllFixturesBySeasonRequested>(FixtureActionTypes.AllFixturesBySeasonRequested),
          // todo make below work
          //withLatestFrom(this.store.pipe(select(selectAllFixturesFromSeasonLoaded))),
          //filter(([action, allFixturesLoaded]) => !allFixturesLoaded),
          mergeMap(({payload}) => this.fixtureService.getFixturesBySeason(payload.seasonId)),
          map((fixtures) => new AllFixturesBySeasonLoaded({fixtures}))
      );

}