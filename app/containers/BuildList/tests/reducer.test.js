
import { fromJS } from 'immutable';
import buildListReducer from '../reducer';

describe('buildListReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      builds: [],
      blueprints: [],
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(buildListReducer(undefined, {})).toEqual(expectedResult);
  });
});
