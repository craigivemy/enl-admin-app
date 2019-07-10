import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Fixture} from '../../shared/models/fixture.model';
import {FixtureActions, FixtureActionTypes} from './fixture.actions';

export interface FixturesState extends EntityState<Fixture> {
  allFixturesFromSeasonLoaded: boolean;
}

export const adapter: EntityAdapter<Fixture> = createEntityAdapter<Fixture>();

export const initialFixturesState: FixturesState = adapter.getInitialState({
  allFixturesFromSeasonLoaded: false,
});

export function fixtureReducer(
  state = initialFixturesState,
  action: FixtureActions
): FixturesState {
  switch (action.type) {
    case FixtureActionTypes.AddFixture: {
      return adapter.addOne(action.payload.fixture, state);
    }

    case FixtureActionTypes.UpsertFixture: {
      return adapter.upsertOne(action.payload.fixture, state);
    }

    case FixtureActionTypes.AddFixtures: {
      return adapter.addMany(action.payload.fixtures, state);
    }

    case FixtureActionTypes.UpsertFixtures: {
      return adapter.upsertMany(action.payload.fixtures, state);
    }

    case FixtureActionTypes.UpdateFixture: {
      return adapter.updateOne(action.payload.fixture, state);
    }

    case FixtureActionTypes.UpdateFixtures: {
      return adapter.updateMany(action.payload.fixtures, state);
    }

    case FixtureActionTypes.DeleteFixture: {
      return adapter.removeOne(action.payload.id, state);
    }

    case FixtureActionTypes.DeleteFixtures: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case FixtureActionTypes.AllFixturesBySeasonLoaded: {
      return adapter.addMany(action.payload.fixtures, {
        ...state,
        allFixturesFromSeasonLoaded: true
      });
    }

    case FixtureActionTypes.ClearFixtures: {
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
