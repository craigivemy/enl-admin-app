import { Action } from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Team} from '../../shared/models/team.model';
import {AppState} from '../../reducers';
import {TeamsActions, TeamsActionTypes} from './teams.actions';

export interface TeamsState extends EntityState<Team> {
    allTeamsLoaded: boolean;
}

export const adapter: EntityAdapter<Team> = createEntityAdapter<Team>();

export const initialTeamsState: TeamsState = adapter.getInitialState({
    allTeamsLoaded: false
});

export function teamsReducer(state = initialTeamsState, action: TeamsActions): TeamsState {
    switch (action.type) {
        case TeamsActionTypes.AllTeamsLoaded:
            return adapter.addAll(action.payload.teams, {...state, allTeamsLoaded: true });
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
