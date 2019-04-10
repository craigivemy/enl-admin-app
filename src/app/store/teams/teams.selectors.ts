import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TeamsState} from './teams.reducer';
import * as fromTeams from './teams.reducer';

export const selectTeamsState = createFeatureSelector<TeamsState>('teams');

export const selectAllTeams = createSelector(
    selectTeamsState,
    fromTeams.selectAll
);

export const selectAllTeamsLoaded = createSelector(
    selectTeamsState,
    teamsState => teamsState.allTeamsLoaded
);
