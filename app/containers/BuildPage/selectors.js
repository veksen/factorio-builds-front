import { createSelector } from 'reselect';

/**
 * Direct selector to the buildPage state domain
 */
const selectBuildPageDomain = (state) => state.get('buildPage');
const selectBuildDomain = (state) => state.get('buildPage').get('build');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BuildPage
 */

const makeSelectBuild = () => createSelector(
  selectBuildDomain,
  (substate) => substate
);

export default makeSelectBuild;
export {
  selectBuildPageDomain,
};
