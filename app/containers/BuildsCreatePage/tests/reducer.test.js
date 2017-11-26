
import { fromJS } from 'immutable';
import buildsCreatePageReducer from '../reducer';

describe('buildsCreatePageReducer', () => {
  it('returns the initial state', () => {
    expect(buildsCreatePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
