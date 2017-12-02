
import { fromJS } from 'immutable';
import buildPageReducer from '../reducer';

describe('buildPageReducer', () => {
  it('returns the initial state', () => {
    expect(buildPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
