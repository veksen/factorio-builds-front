import { createSelector } from 'reselect';

/**
 * Direct selector to the filter state domain
 */
const selectFilterDomain = () => (state) => state.get('filter');

/**
 * Other specific selectors
 */
const makeSelectFilterOnlyBluePrints = () => createSelector(
  selectFilterDomain(),
  (filterState) => filterState.get('onlyWithBlueprints')
);

const makeSelectFilterGameState = () => createSelector(
  selectFilterDomain(),
  (filterState) => filterState.get('gameState')
);

const makeSelectFilterType = () => createSelector(
  selectFilterDomain(),
  (filterState) => filterState.get('type')
);


/**
 * Default selector used by Filter
 */

const makeSelectFilter = () => createSelector(
  selectFilterDomain(),
  (substate) => substate.toJS()
);

export default makeSelectFilter;
export {
  selectFilterDomain,
  makeSelectFilterOnlyBluePrints,
  makeSelectFilterGameState,
  makeSelectFilterType,
};
