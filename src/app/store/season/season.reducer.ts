import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Season} from '../../shared/models/season.model';
import {SeasonActions, SeasonActionTypes} from './season.actions';

export interface SeasonsState extends EntityState<Season> {
  allSeasonsLoaded: boolean;
  currentlySelectedSeasonId: number;
}

export const adapter: EntityAdapter<Season> = createEntityAdapter<Season>();

export const initialSeasonsState: SeasonsState = adapter.getInitialState({
  allSeasonsLoaded: false,
  currentlySelectedSeasonId: 2

});

export function seasonReducer(
  state = initialSeasonsState,
  action: SeasonActions
): SeasonsState {
  switch (action.type) {
    // case SeasonActionTypes.AddSeason: {
    //   return adapter.addOne(action.payload.division-season, state);
    // }
    //
    // case SeasonActionTypes.UpsertSeason: {
    //   return adapter.upsertOne(action.payload.division-season, state);
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
    //   return adapter.updateOne(action.payload.division-season, state);
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
    case SeasonActionTypes.DeleteSeasons: {
      return adapter.removeMany(action.payload.ids, state);
    }
    case SeasonActionTypes.AllSeasonsLoaded: {
      return adapter.addAll(action.payload.seasons, {...state, allSeasonsLoaded: true });
    }
    case SeasonActionTypes.SelectedSeasonUpdated: {
      return {...state, currentlySelectedSeasonId: action.payload.seasonId};
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
