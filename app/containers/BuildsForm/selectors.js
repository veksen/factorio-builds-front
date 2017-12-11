import { createSelector } from 'reselect';

/**
 * Direct selector to the buildsForm state domain
 */
const selectBuildsFormDomain = (state) => state.get('buildsForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BuildsForm
 */

const makeSelectBuildsForm = () => createSelector(
  selectBuildsFormDomain,
  (substate) => substate.toJS()
);

export default makeSelectBuildsForm;
export {
  selectBuildsFormDomain,
};
