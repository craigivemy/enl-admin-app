import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {UmpireService} from '../../umpire/umpire.service';
import {select, Store} from '@ngrx/store';
import {AppState} from '../index';
import {AllUmpiresLoaded, AllUmpiresRequested, UmpireActionTypes} from './umpire.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {selectAllUmpiresLoaded} from './umpire.selectors';

@Injectable()
export class UmpireEffects {
  constructor(
      private actions$: Actions,
      private store: Store<AppState>,
      private umpireService: UmpireService
  ) {}
  @Effect()
      loadUmpires$ = this.actions$
          .pipe(
              ofType<AllUmpiresRequested>(UmpireActionTypes.AllUmpiresRequested),
              withLatestFrom(this.store.pipe(select(selectAllUmpiresLoaded))),
              filter(([action, allUmpiresLoaded]) => !allUmpiresLoaded),
              mergeMap(() => this.umpireService.getUmpires()),
              map(umpires => new AllUmpiresLoaded({umpires}))
          );
}
