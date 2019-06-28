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

export const selectAllTeamsFromSeason = (seasonId: number) => createSelector(
    selectAllTeams,
    teams => {
        /* todo - there is no seasonId on teams,
        need to work out how to manage this as do need history
        of teams for each season
         */
        return teams
            .filter(
                param => 1 === 1
            );
    }
);
