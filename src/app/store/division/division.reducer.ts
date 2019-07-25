import {Action} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Division} from '../../shared/models/division.model';
import {DivisionActions, DivisionActionTypes} from './division.actions';

// todo - change others to singular
export interface DivisionState extends EntityState<Division> {
    allDivisionsLoaded: boolean;
}

export const adapter: EntityAdapter<Division> = createEntityAdapter<Division>();

export const initialDivisionState: DivisionState = adapter.getInitialState({
    allDivisionsLoaded: false
});

export function divisionReducer(state = initialDivisionState, action: DivisionActions): DivisionState {
    switch (action.type) {
        case DivisionActionTypes.AllDivisionsLoaded:
            return adapter.addAll(action.payload.divisions, {...state, allDivisionsLoaded: true});
        default:
            return state;
    }
}

export const {
    selectAll,
    selectIds,
    selectEntities,
    selectTotal
} = adapter.getSelectors();
