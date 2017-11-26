import { createSelector } from 'reselect';

/**
 * Direct selector to the buildsCreatePage state domain
 */
const selectBuildsCreatePageDomain = (state) => state.get('buildsCreatePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BuildsCreatePage
 */

const makeSelectBuildsCreatePage = () => createSelector(
  selectBuildsCreatePageDomain,
  (substate) => substate.toJS()
);

export default makeSelectBuildsCreatePage;
export {
  selectBuildsCreatePageDomain,
};
