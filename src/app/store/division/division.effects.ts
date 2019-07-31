import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AllDivisionsLoaded, DivisionActions, DivisionActionTypes} from './division.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {AppState} from '../index';
import {selectAllDivisionsLoaded} from './division.selectors';
import {DivisionService} from '../../division-season/division.service';



@Injectable()
export class DivisionEffects {
  constructor(
      private actions$: Actions,
      private store: Store<AppState>,
      private divisionService: DivisionService) {}

  @Effect()
  loadDivisions$ = this.actions$
      .pipe(
          ofType<DivisionActions>(DivisionActionTypes.AllDivisionsRequested),
          withLatestFrom(this.store.pipe(select(selectAllDivisionsLoaded))),
          filter(([action, allDivisionsLoaded]) => !allDivisionsLoaded),
          mergeMap(() => this.divisionService.getAllDivisions()),
          map(divisions => new AllDivisionsLoaded({divisions}))
      );
}
