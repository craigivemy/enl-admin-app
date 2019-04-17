import {teamReducer, initialTeamsState} from './team.reducer';

describe('Teams Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = teamReducer(initialTeamsState, action);

      expect(result).toBe(initialTeamsState);
    });
  });
});
