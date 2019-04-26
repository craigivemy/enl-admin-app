import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FixturesState} from './fixture.reducer';

export const selectFixturesState = createFeatureSelector<FixturesState>('fixtures');

export const selectAllFixturesFromSeason = (seasonId: number) => createSelector(
    selectFixturesState,
    fixturesState => fixturesState.entities[seasonId]
);

export const selectAllFixturesFromSeasonLoaded = createSelector(
    selectFixturesState,
    fixturesState => fixturesState.allFixturesFromSeasonLoaded
);
