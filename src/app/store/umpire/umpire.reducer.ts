import { Action } from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Umpire} from '../../shared/models/umpire.model';
import {UmpireActions, UmpireActionTypes} from './umpire.actions';

export interface UmpiresState extends EntityState<Umpire> {
  allUmpiresLoaded: boolean;
}
export const adapter: EntityAdapter<Umpire> = createEntityAdapter<Umpire>();

export const initialUmpiresState: UmpiresState = adapter.getInitialState({
  allUmpiresLoaded: false
});

export function umpireReducer(state = initialUmpiresState, action: UmpireActions): UmpiresState {
  switch (action.type) {
    case UmpireActionTypes.AllUmpiresLoaded:
      return adapter.addAll(action.payload.umpires, {...state, allUmpiresLoaded: true});
    default:
      return state;
  }
}

export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
} = adapter.getSelectors();
