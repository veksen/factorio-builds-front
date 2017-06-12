import { createSelector } from 'reselect';

/**
 * Direct selector to the buildList state domain
 */
const selectBuildListDomain = () => (state) => state.get('buildList');


/**
 * Other specific selectors
 */


/**
 * Default selector used by BuildList
 */

const makeSelectBuildList = () => createSelector(
  selectBuildListDomain(),
  (substate) => substate.toJS()
);

export default makeSelectBuildList;
export {
  selectBuildListDomain,
};
