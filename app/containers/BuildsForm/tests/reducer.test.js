
import { fromJS } from 'immutable';
import buildsFormReducer from '../reducer';

describe('buildsFormReducer', () => {
  it('returns the initial state', () => {
    expect(buildsFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
