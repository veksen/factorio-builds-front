
import { fromJS } from 'immutable';
import filterReducer from '../reducer';

describe('filterReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      onlyWithBlueprints: false,
      gameState: {
        early: false,
        mid: false,
        late: false,
      },
      type: {
        balancers: false,
        smelting: false,
        trains: false,
        production: false,
      },
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(filterReducer(undefined, {})).toEqual(expectedResult);
  });
});
