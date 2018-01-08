
import { fromJS } from 'immutable';
import buildPageReducer from '../reducer';

describe('buildPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      build: {},
      blueprints: [],
      error: {},
    });
  });

  it('returns the initial state', () => {
    expect(buildPageReducer(undefined, {})).toEqual(state);
  });
});
