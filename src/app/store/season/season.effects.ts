import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {AppState} from '../index';
import {AllSeasonsLoaded, AllSeasonsRequested, SeasonActionTypes} from './season.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {selectAllSeasonsLoaded} from './season.selectors';
import {select} from '@ngrx/store';
import {SeasonService} from '../../division-season/season.service';



@Injectable()
export class SeasonEffects {
  @Effect()
  loadAllSeasons$ = this.actions$
      .pipe(
          ofType<AllSeasonsRequested>(SeasonActionTypes.AllSeasonsRequested),
          withLatestFrom(this.store.pipe(select(selectAllSeasonsLoaded))),
          filter(([action, allSeasonsLoaded]) => !allSeasonsLoaded),
          mergeMap(() => this.seasonService.getSeasons()),
          map(seasons => new AllSeasonsLoaded({seasons}))
      );

  constructor(
      private actions$: Actions,
      private store: Store<AppState>, // todo - should this be slice?
      private seasonService: SeasonService
) {}

}
