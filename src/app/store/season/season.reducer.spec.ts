import { seasonReducer, initialState } from './season.reducer';

describe('Season Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = seasonReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
