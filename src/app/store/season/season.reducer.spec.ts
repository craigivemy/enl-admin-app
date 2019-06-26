import { seasonReducer, initialSeasonsState } from './season.reducer';

describe('Season Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = seasonReducer(initialSeasonsState, action);

      expect(result).toBe(initialSeasonsState);
    });
  });
});
