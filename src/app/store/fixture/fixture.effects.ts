import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AllFixturesBySeasonLoaded, AllFixturesBySeasonRequested, FixtureActions, FixtureActionTypes} from './fixture.actions';
import {filter, map, mergeMap, switchMap, take, withLatestFrom} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {AppState} from '../index';
import {selectAllFixturesFromSeason} from './fixture.selectors';
import {FixtureService} from '../../modules/match/fixture.service';



@Injectable()
export class FixtureEffects {

  constructor(
      private actions$: Actions,
      private store: Store<AppState>,
      private fixtureService: FixtureService) {}
  @Effect()
  loadFixturesBySeason$ = this.actions$
      .pipe(
          ofType<AllFixturesBySeasonRequested>(FixtureActionTypes.AllFixturesBySeasonRequested),
          map(action => action.payload),
          switchMap(payload => {
              return this.store
                  .pipe(
                      select(selectAllFixturesFromSeason(payload.seasonId)),
                      take(1),
                      mergeMap(fixtures => {
                          if (fixtures.length) {
                              return [];
                          }
                          return this.fixtureService.getFixturesBySeason(payload.seasonId);
                      }),
                      map(fixtures => new AllFixturesBySeasonLoaded({fixtures}))
                  );
          })
      );
}
