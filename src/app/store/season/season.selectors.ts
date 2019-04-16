import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Season} from '../../shared/models/season.model';
import {SeasonsState} from './season.reducer';
import * as fromSeasons from './season.reducer';

export const selectSeasonsState = createFeatureSelector<SeasonsState>('seasons');

export const selectAllSeasons = createSelector(
    selectSeasonsState,
    fromSeasons.selectAll
);
