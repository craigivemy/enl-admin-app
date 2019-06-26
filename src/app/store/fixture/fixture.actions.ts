import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Fixture } from '../../shared/models/fixture.model';

export enum FixtureActionTypes {
    AllFixturesBySeasonRequested = '[Fixtures Component] All Fixtures By Season Requested',
    AllFixturesBySeasonLoaded = '[Fixtures API] All Fixtures By Season Loaded',
    AddFixture = '[Fixture] Add Fixture',
    UpsertFixture = '[Fixture] Upsert Fixture',
    AddFixtures = '[Fixture] Add Fixtures',
    UpsertFixtures = '[Fixture] Upsert Fixtures',
    UpdateFixture = '[Fixture] Update Fixture',
    UpdateFixtures = '[Fixture] Update Fixtures',
    DeleteFixture = '[Fixture] Delete Fixture',
    DeleteFixtures = '[Fixture] Delete Fixtures',
    ClearFixtures = '[Fixture] Clear Fixtures'
}

export class AllFixturesBySeasonRequested implements Action {
    readonly type = FixtureActionTypes.AllFixturesBySeasonRequested;
    constructor(public payload: { seasonId: number }) {}
}

export class AllFixturesBySeasonLoaded implements Action {
    readonly type = FixtureActionTypes.AllFixturesBySeasonLoaded;
    constructor(public payload: { fixtures: Fixture[] }) {}
}

export class AddFixture implements Action {
    readonly type = FixtureActionTypes.AddFixture;

    constructor(public payload: { fixture: Fixture }) {}
}

export class UpsertFixture implements Action {
    readonly type = FixtureActionTypes.UpsertFixture;

    constructor(public payload: { fixture: Fixture }) {}
}

export class AddFixtures implements Action {
    readonly type = FixtureActionTypes.AddFixtures;

    constructor(public payload: { fixtures: Fixture[] }) {}
}

export class UpsertFixtures implements Action {
    readonly type = FixtureActionTypes.UpsertFixtures;

    constructor(public payload: { fixtures: Fixture[] }) {}
}

export class UpdateFixture implements Action {
    readonly type = FixtureActionTypes.UpdateFixture;

    constructor(public payload: { fixture: Update<Fixture> }) {}
}

export class UpdateFixtures implements Action {
    readonly type = FixtureActionTypes.UpdateFixtures;

    constructor(public payload: { fixtures: Update<Fixture>[] }) {}
}

export class DeleteFixture implements Action {
    readonly type = FixtureActionTypes.DeleteFixture;

    constructor(public payload: { id: string }) {}
}

export class DeleteFixtures implements Action {
    readonly type = FixtureActionTypes.DeleteFixtures;

    constructor(public payload: { ids: string[] }) {}
}

export class ClearFixtures implements Action {
    readonly type = FixtureActionTypes.ClearFixtures;
}

export type FixtureActions =
    AllFixturesBySeasonRequested
    | AllFixturesBySeasonLoaded
    | AddFixture
    | UpsertFixture
    | AddFixtures
    | UpsertFixtures
    | UpdateFixture
    | UpdateFixtures
    | DeleteFixture
    | DeleteFixtures
    | ClearFixtures;
