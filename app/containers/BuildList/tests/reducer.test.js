
import { fromJS } from 'immutable';
import buildListReducer from '../reducer';

describe('buildListReducer', () => {
  it('returns the initial state', () => {
    expect(buildListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
