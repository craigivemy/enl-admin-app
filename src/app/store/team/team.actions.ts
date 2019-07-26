import {Action} from '@ngrx/store';
import {Team} from '../../shared/models/team.model';
import {Update} from '@ngrx/entity';

export enum TeamActionTypes {
    AllTeamsRequested = '[All Teams Page] All Teams Requested',
    AllTeamsLoaded = '[Teams API] All Teams Loaded',
    AllTeamsBySeasonRequested = '[Teams Component] All Teams By Season Requested',
    AllTeamsBySeasonLoaded = '[Teams API] All Teams By Season Loaded',
    TeamUpdated = '[Update Team Dialog] Team Updated',
    TeamAdded = '[Add Team Dialog] Team Added'
}

export class AllTeamsRequested implements Action {
    readonly type = TeamActionTypes.AllTeamsRequested;
}

export class AllTeamsLoaded implements Action {
    readonly type = TeamActionTypes.AllTeamsLoaded;

    constructor(public payload: { teams: Team[] }) {
    }
}

export class AllTeamsBySeasonRequested implements Action {
    readonly type = TeamActionTypes.AllTeamsBySeasonRequested;

    constructor(public payload: { seasonId: number }) {
    }
}

export class AllTeamsBySeasonLoaded implements Action {
    readonly type = TeamActionTypes.AllTeamsBySeasonLoaded;

    constructor(public payload: { teams: Team[] }) {
    }
}

export class TeamUpdated implements Action {
    readonly type = TeamActionTypes.TeamUpdated;

    constructor(public payload: { team: Update<Team> }) {
    }
}

export class TeamAdded implements Action {
    readonly type = TeamActionTypes.TeamAdded;

    constructor(public payload: { team: Team }) {
    }
}

export type TeamActions = AllTeamsRequested
    | AllTeamsLoaded
    | AllTeamsBySeasonRequested
    | AllTeamsBySeasonLoaded
    | TeamUpdated
    | TeamAdded;
