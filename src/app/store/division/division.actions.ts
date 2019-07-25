import {Action} from '@ngrx/store';
import {Division} from '../../shared/models/division.model';

export enum DivisionActionTypes {
    AllDivisionsRequested = '[Various] All Divisions Requested',
    AllDivisionsLoaded = '[Various] All Divisions Loaded'
}

export class AllDivisionsRequested implements Action {
    readonly type = DivisionActionTypes.AllDivisionsRequested;
}

export class AllDivisionsLoaded implements Action {
    readonly type = DivisionActionTypes.AllDivisionsLoaded;
    constructor(public payload: {divisions: Division[]}) {}
}


export type DivisionActions = AllDivisionsRequested
    | AllDivisionsLoaded;
