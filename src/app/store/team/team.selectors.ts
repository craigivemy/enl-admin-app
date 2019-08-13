import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TeamsState} from './team.reducer';
import * as fromTeams from './team.reducer';

export const selectTeamsState = createFeatureSelector<TeamsState>('teams');

export const selectAllTeams = createSelector(
    selectTeamsState,
    fromTeams.selectAll
);

export const selectAllTeamsFromSeason = (seasonId: number) => createSelector(
    selectAllTeams,
    teams => {
        const filtered = [];
        teams.map(team => {
            if (team.seasons) {
                team.seasons.map(season => {
                    if (season.season_id === seasonId) {
                        filtered.push(team);
                    }
                });
            }
        });
        return filtered;
    }
);

export const selectAllTeamsLoaded = createSelector(
    selectTeamsState,
    teamsState => teamsState.allTeamsLoaded
);
