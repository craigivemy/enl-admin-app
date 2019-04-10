import { Action } from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Team} from '../../shared/models/team.model';
import {AppState} from '../../reducers';
import {TeamsActions, TeamsActionTypes} from './teams.actions';

export interface TeamsState extends EntityState<Team> {
  loading: boolean;
}

export const adapter: EntityAdapter<Team> = createEntityAdapter<Team>();

export const initialTeamsState: TeamsState = adapter.getInitialState({
  loading: false
});

export function reducer(state = initialTeamsState, action: TeamsActions): TeamsState {
  switch (action.type) {
    case TeamsActionTypes.AllTeamsRequested:
      break;
    case TeamsActionTypes.AllTeamsLoaded:
      return adapter.addAll(action.payload.teams, {...state, loading: false });
    default:
      return state;
  }
}
