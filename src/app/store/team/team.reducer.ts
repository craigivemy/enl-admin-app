import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Team} from '../../shared/models/team.model';
import {TeamActions, TeamsActionTypes} from './team.actions';

export interface TeamsState extends EntityState<Team> {
    allTeamsFromSeasonLoaded: boolean;
}

export const adapter: EntityAdapter<Team> = createEntityAdapter<Team>();

export const initialTeamsState: TeamsState = adapter.getInitialState({
    allTeamsFromSeasonLoaded: false
});

export function teamReducer(state = initialTeamsState, action: TeamActions): TeamsState {
    switch (action.type) {
        case TeamsActionTypes.AllTeamsLoaded:
            return adapter.addAll(action.payload.teams, {...state, allTeamsLoaded: true });
        case TeamsActionTypes.AllTeamsBySeasonLoaded:
            return adapter.addMany(action.payload.teams, {
                ...state,
                allTeamsFromSeasonLoaded: true
            });
        case TeamsActionTypes.TeamUpdated:
            return adapter.updateOne(action.payload.team, state);
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
