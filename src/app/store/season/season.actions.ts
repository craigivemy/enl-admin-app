import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Season } from './season.model';

export enum SeasonActionTypes {
  LoadSeasons = '[Season] Load Seasons',
  AddSeason = '[Season] Add Season',
  UpsertSeason = '[Season] Upsert Season',
  AddSeasons = '[Season] Add Seasons',
  UpsertSeasons = '[Season] Upsert Seasons',
  UpdateSeason = '[Season] Update Season',
  UpdateSeasons = '[Season] Update Seasons',
  DeleteSeason = '[Season] Delete Season',
  DeleteSeasons = '[Season] Delete Seasons',
  ClearSeasons = '[Season] Clear Seasons'
}

export class LoadSeasons implements Action {
  readonly type = SeasonActionTypes.LoadSeasons;

  constructor(public payload: { seasons: Season[] }) {}
}

export class AddSeason implements Action {
  readonly type = SeasonActionTypes.AddSeason;

  constructor(public payload: { season: Season }) {}
}

export class UpsertSeason implements Action {
  readonly type = SeasonActionTypes.UpsertSeason;

  constructor(public payload: { season: Season }) {}
}

export class AddSeasons implements Action {
  readonly type = SeasonActionTypes.AddSeasons;

  constructor(public payload: { seasons: Season[] }) {}
}

export class UpsertSeasons implements Action {
  readonly type = SeasonActionTypes.UpsertSeasons;

  constructor(public payload: { seasons: Season[] }) {}
}

export class UpdateSeason implements Action {
  readonly type = SeasonActionTypes.UpdateSeason;

  constructor(public payload: { season: Update<Season> }) {}
}

export class UpdateSeasons implements Action {
  readonly type = SeasonActionTypes.UpdateSeasons;

  constructor(public payload: { seasons: Update<Season>[] }) {}
}

export class DeleteSeason implements Action {
  readonly type = SeasonActionTypes.DeleteSeason;

  constructor(public payload: { id: string }) {}
}

export class DeleteSeasons implements Action {
  readonly type = SeasonActionTypes.DeleteSeasons;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearSeasons implements Action {
  readonly type = SeasonActionTypes.ClearSeasons;
}

export type SeasonActions =
 LoadSeasons
 | AddSeason
 | UpsertSeason
 | AddSeasons
 | UpsertSeasons
 | UpdateSeason
 | UpdateSeasons
 | DeleteSeason
 | DeleteSeasons
 | ClearSeasons;
