import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FixturesState} from './fixture.reducer';
import * as fromFixture from './fixture.reducer';

export const selectFixturesState = createFeatureSelector<FixturesState>('fixtures');

export const selectAllFixtures = createSelector(
    selectFixturesState,
    fromFixture.selectAll
);
// todo- think issue is loading all never happens, so below wont ever return anything
export const selectAllFixturesFromSeason = (seasonId: number) => createSelector(
    selectAllFixtures,
    fixtures => {
        return fixtures.
            filter(fixture => fixture.seasonId === seasonId);
    }
);

export const selectAllFixturesFromSeasonLoaded = createSelector(
    selectFixturesState,
    fixturesState => fixturesState.allFixturesFromSeasonLoaded
);
