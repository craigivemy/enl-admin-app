import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Season} from '../../shared/models/season.model';
import {SeasonActions, SeasonActionTypes} from './season.actions';
import {isLowerCase} from 'tslint/lib/utils';

type SelectedSeasonProperty = number | boolean;

export interface SeasonsState extends EntityState<Season> {
  allSeasonsLoaded: boolean;
  currentlySelectedSeason: SelectedSeasonProperty;
}

export const adapter: EntityAdapter<Season> = createEntityAdapter<Season>();

export const initialSeasonsState: SeasonsState = adapter.getInitialState({
  allSeasonsLoaded: false,
  currentlySelectedSeason: false
});

export function seasonReducer(
  state = initialSeasonsState,
  action: SeasonActions
): SeasonsState {
  switch (action.type) {
    // case SeasonActionTypes.AddSeason: {
    //   return adapter.addOne(action.payload.season, state);
    // }
    //
    // case SeasonActionTypes.UpsertSeason: {
    //   return adapter.upsertOne(action.payload.season, state);
    // }
    //
    // case SeasonActionTypes.AddSeasons: {
    //   return adapter.addMany(action.payload.seasons, state);
    // }
    //
    // case SeasonActionTypes.UpsertSeasons: {
    //   return adapter.upsertMany(action.payload.seasons, state);
    // }
    //
    // case SeasonActionTypes.UpdateSeason: {
    //   return adapter.updateOne(action.payload.season, state);
    // }
    //
    // case SeasonActionTypes.UpdateSeasons: {
    //   return adapter.updateMany(action.payload.seasons, state);
    // }
    //
    // case SeasonActionTypes.DeleteSeason: {
    //   return adapter.removeOne(action.payload.id, state);
    // }
    //
    // case SeasonActionTypes.DeleteSeasons: {
    //   return adapter.removeMany(action.payload.ids, state);
    // }
    case SeasonActionTypes.AllSeasonsLoaded: {
      return adapter.addAll(action.payload.seasons, {...state, allSeasonsLoaded: true });
    }
    case SeasonActionTypes.SelectedSeasonUpdated: {
      return {...state, currentlySelectedSeason: action.payload.seasonId};
    }

    // case SeasonActionTypes.ClearSeasons: {
    //   return adapter.removeAll(state);
    // }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
