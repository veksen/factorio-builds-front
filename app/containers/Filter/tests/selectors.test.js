import { fromJS } from 'immutable';
import { makeSelectFilterOnlyBluePrints } from '../selectors';

// const selector = makeSelectFilterDomain();

describe('makeSelectFilterDomain', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(false);
  });
});

describe('makeSelectFilterOnlyBluePrints', () => {
  it('should select the blueprint filter', () => {
    const globalState = fromJS(true);
    const mockedState = fromJS({
      onlyWithBlueprints: globalState,
    });
    expect(makeSelectFilterOnlyBluePrints(mockedState)).toEqual(globalState);
  });
});
