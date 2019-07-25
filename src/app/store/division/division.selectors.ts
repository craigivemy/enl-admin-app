import {createFeatureSelector, createSelector} from '@ngrx/store';
import {DivisionState} from './division.reducer';
import * as fromDivisions from './division.reducer';

export const selectDivisionsState = createFeatureSelector<DivisionState>('divisions');

export const selectAllDivisions = createSelector(
    selectDivisionsState,
    fromDivisions.selectAll
);

export const selectAllDivisionsLoaded = createSelector(
    selectDivisionsState,
    divisionsState => divisionsState.allDivisionsLoaded
);

export const selectActiveDivisions = createSelector(
    selectAllDivisions,
    divisions => divisions
        .filter(
            division => division.current
        )
);
