import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {AppState} from '../index';
import {AllSeasonsLoaded, SeasonActionTypes} from './season.actions';
import {AllTeamsRequested} from '../club/club.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {selectAllSeasons} from './season.selectors';
import {select} from '@ngrx/store';
import {SeasonService} from '../../modules/season/season.service';



@Injectable()
export class SeasonEffects {

  @Effect()
  loadAllSeasons$ = this.store
      .pipe(
          ofType<AllTeamsRequested>(SeasonActionTypes.AllSeasonsRequested),
          withLatestFrom(this.store.pipe(select(selectAllSeasons))),
          filter(([action, allSeasonsLoaded]) => !allSeasonsLoaded),
          mergeMap(() => this.seasonService.getSeasons()),
          map((seasons) => this.store.dispatch(new AllSeasonsLoaded({seasons})))
      );

  constructor(
      private actions$: Actions,
      private store: Store<AppState>, // todo - should this be slice?
      private seasonService: SeasonService
) {}

}
