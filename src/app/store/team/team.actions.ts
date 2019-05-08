import { Action } from '@ngrx/store';
import {Team} from '../../shared/models/team.model';

export enum TeamsActionTypes {
  AllTeamsRequested = '[All Teams Page] All Teams Requested',
  AllTeamsLoaded = '[Teams API] All Teams Loaded'
}

export class AllTeamsRequested implements Action {
  readonly type = TeamsActionTypes.AllTeamsRequested;
}
export class AllTeamsLoaded implements Action {
  readonly type = TeamsActionTypes.AllTeamsLoaded;
  constructor(public payload: { teams: Team[] }) {}
}


export type TeamActions = AllTeamsRequested
  | AllTeamsLoaded;
