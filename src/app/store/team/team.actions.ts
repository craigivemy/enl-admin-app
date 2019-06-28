import { Action } from '@ngrx/store';
import {Team} from '../../shared/models/team.model';

export enum TeamsActionTypes {
  AllTeamsRequested = '[All Teams Page] All Teams Requested',
  AllTeamsLoaded = '[Teams API] All Teams Loaded',
  AllTeamsBySeasonRequested = '[Teams Component] All Teams By Season Requested',
  AllTeamsBySeasonLoaded = '[Teams API] All Teams By Season Loaded'
}

export class AllTeamsRequested implements Action {
  readonly type = TeamsActionTypes.AllTeamsRequested;
}
export class AllTeamsLoaded implements Action {
  readonly type = TeamsActionTypes.AllTeamsLoaded;
  constructor(public payload: { teams: Team[] }) {}
}

export class AllTeamsBySeasonRequested implements Action {
  readonly type = TeamsActionTypes.AllTeamsBySeasonRequested;
  constructor(public payload: {seasonId: number}) {}
}
export class AllTeamsBySeasonLoaded implements Action {
  readonly type = TeamsActionTypes.AllTeamsBySeasonLoaded;
  constructor(public payload: { teams: Team[] }) {}
}

export type TeamActions = AllTeamsRequested
  | AllTeamsLoaded
  | AllTeamsBySeasonRequested
  | AllTeamsBySeasonLoaded;
