import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UmpiresState} from './umpire.reducer';
import * as fromUmpires from './umpire.reducer';

export const selectUmpiresState = createFeatureSelector<UmpiresState>('umpires');

export const selectAllUmpires = createSelector(
    selectUmpiresState,
    fromUmpires.selectAll
);

export const selectAllUmpiresLoaded = createSelector(
    selectUmpiresState,
    umpiresState => umpiresState.allUmpiresLoaded
);
