import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Fixture } from '../../shared/models/fixture.model';
import { FixtureActions, FixtureActionTypes } from './fixture.actions';

export interface State extends EntityState<Fixture> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Fixture> = createEntityAdapter<Fixture>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: FixtureActions
): State {
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

    case FixtureActionTypes.LoadFixtures: {
      return adapter.addAll(action.payload.fixtures, state);
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
