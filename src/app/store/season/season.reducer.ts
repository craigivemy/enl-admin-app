import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Season } from './season.model';
import { SeasonActions, SeasonActionTypes } from './season.actions';

export interface State extends EntityState<Season> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Season> = createEntityAdapter<Season>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function seasonReducer(
  state = initialState,
  action: SeasonActions
): State {
  switch (action.type) {
    case SeasonActionTypes.AddSeason: {
      return adapter.addOne(action.payload.season, state);
    }

    case SeasonActionTypes.UpsertSeason: {
      return adapter.upsertOne(action.payload.season, state);
    }

    case SeasonActionTypes.AddSeasons: {
      return adapter.addMany(action.payload.seasons, state);
    }

    case SeasonActionTypes.UpsertSeasons: {
      return adapter.upsertMany(action.payload.seasons, state);
    }

    case SeasonActionTypes.UpdateSeason: {
      return adapter.updateOne(action.payload.season, state);
    }

    case SeasonActionTypes.UpdateSeasons: {
      return adapter.updateMany(action.payload.seasons, state);
    }

    case SeasonActionTypes.DeleteSeason: {
      return adapter.removeOne(action.payload.id, state);
    }

    case SeasonActionTypes.DeleteSeasons: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case SeasonActionTypes.LoadSeasons: {
      return adapter.addAll(action.payload.seasons, state);
    }

    case SeasonActionTypes.ClearSeasons: {
      return adapter.removeAll(state);
    }

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
