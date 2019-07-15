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
        let thisManyTeams = 0;
        let thisManySeasons = 0;

        teams.map(team => {
            thisManyTeams++;
            team.seasons.map(season => {
                console.log(season);
                thisManySeasons++;
                if (season.season_id === seasonId) {
                    filtered.push(team);
                }
            });
        });
        // console.log({teams: thisManyTeams, seasons: thisManySeasons, teamsSelected: filtered});
        return filtered;
    }
);
