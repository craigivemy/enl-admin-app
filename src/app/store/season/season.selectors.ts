import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Season} from '../../shared/models/season.model';
import {SeasonsState} from './season.reducer';
import * as fromSeasons from './season.reducer';
import {filter} from 'rxjs/operators';
import {pipe} from 'rxjs';

export const selectSeasonsState = createFeatureSelector<SeasonsState>('seasons');

export const selectAllSeasons = createSelector(
    selectSeasonsState,
    fromSeasons.selectAll
);

export const selectAllSeasonsLoaded = createSelector(
    selectSeasonsState,
    seasonsState => seasonsState.allSeasonsLoaded
);

// one for onInit initial value and one for when it changes and is needed?
export const selectCurrentSeasonId = createSelector(
    selectAllSeasons,
    allSeasons => {
            const currentSeason = allSeasons.filter(
                season => season.current === true
            );
            return currentSeason[0] ? currentSeason[0].id : 0;
    }
);

export const selectCurrentlySelectedSeason = createSelector(
    selectSeasonsState,
    seasonsState => seasonsState.currentlySelectedSeasonId
);
// necessary?
// export const selectCurrentlySelectedSeason
// use selectSeasonState rather than selectAllSeasons?
