import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SeasonsState} from './season.reducer';
import * as fromSeasons from './season.reducer';

export const selectSeasonsState = createFeatureSelector<SeasonsState>('seasons');

export const selectAllSeasons = createSelector(
    selectSeasonsState,
    fromSeasons.selectAll
);

export const selectAllSeasonsLoaded = createSelector(
    selectSeasonsState,
    seasonsState => seasonsState.allSeasonsLoaded
);

export const selectCurrentSeasonId = createSelector(
    selectAllSeasons,
    allSeasons => {
            const currentSeason = allSeasons.filter(
                season => season.current === 1
            );
            return currentSeason[0] ? currentSeason[0].id : 0;
    }
);

export const selectCurrentlySelectedSeason = createSelector(
    selectSeasonsState,
    seasonsState => seasonsState.currentlySelectedSeasonId
);

export const selectIfSelectedSeasonCurrentSeason = createSelector(
    selectCurrentlySelectedSeason,
    selectCurrentSeasonId,
    (currentlySelected, current) => currentlySelected === current
);


