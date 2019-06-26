import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AllFixturesBySeasonLoaded, AllFixturesBySeasonRequested, FixtureActions, FixtureActionTypes} from './fixture.actions';
import {filter, map, mergeMap, switchMap, take, withLatestFrom} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {AppState} from '../index';
import {selectAllFixtures, selectAllFixturesFromSeason, selectAllFixturesFromSeasonLoaded} from './fixture.selectors';
import {FixtureService} from '../../modules/match/fixture.service';
import {tap} from 'rxjs/internal/operators/tap';
import {forkJoin, of} from 'rxjs';



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
          switchMap(seasonId => {
              return this.store
                  .pipe(
                      select(selectAllFixturesFromSeason(seasonId.seasonId)),
                      take(1),
                      mergeMap(fixtures => {
                          if (fixtures.length) {
                              return [];
                          }
                          return this.fixtureService.getFixturesBySeason(seasonId.seasonId);
                      }),
                      map(fixtures => new AllFixturesBySeasonLoaded({fixtures}))
                  );
          })
      );
      // .pipe(
      //     ofType<AllFixturesBySeasonRequested>(FixtureActionTypes.AllFixturesBySeasonRequested),
      //     map(action => action.payload.seasonId),
      //     switchMap(seasonId => {
      //         return this.store
      //             .pipe(
      //                 tap(() => console.log(seasonId)),
      //                 select(selectAllFixturesFromSeason(seasonId)),
      //                 take(1),
      //                 mergeMap(fixtures => {
      //                     if (fixtures.length > 0) {
      //                         console.log(fixtures);
      //                         return [];
      //                     }
      //                     this.fixtureService.getFixturesBySeason(seasonId);
      //                 }),
      //                 map(fixtures => new AllFixturesBySeasonLoaded({fixtures}))
      //             );
      //     })
      // );
}
