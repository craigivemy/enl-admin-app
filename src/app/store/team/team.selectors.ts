import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TeamsState} from './team.reducer';
import * as fromTeams from './team.reducer';

export const selectTeamsState = createFeatureSelector<TeamsState>('teams');

export const selectAllTeams = createSelector(
    selectTeamsState,
    fromTeams.selectAll
);

export const selectAllTeamsLoaded = createSelector(
    selectTeamsState,
    teamsState => teamsState.allTeamsLoaded
);
