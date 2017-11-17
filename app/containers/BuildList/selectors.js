import _ from 'lodash';
import { createSelector } from 'reselect';
import { makeSelectFilterType } from '../Filter/selectors';

/**
 * Direct selector to the buildList state domain
 */
const selectBuildListDomain = () => (state) => state.get('buildList');


/**
 * Other specific selectors
 */
const selectBuildListBuildsDomain = () => (state) => state.get('buildList').get('builds');


/**
 * Default selector used by BuildList
 */

const makeSelectBuildList = () => createSelector(
  selectBuildListDomain(),
  (substate) => substate.toJS()
);

const makeSelectBuildListFiltered = () => createSelector(
  selectBuildListBuildsDomain(),
  makeSelectFilterType(),
  (substate, filteredType) => {
    // avoid filtering if every filter is false
    if (_.every(filteredType.toJS(), (type) => type === false)) {
      return substate;
    }

    return substate.filter((b) => filteredType.get(b.category) === true);
  }
);

const makeSelectBuildListCount = () => createSelector(
  selectBuildListBuildsDomain(),
  (substate) => substate.length
);

const makeSelectBuildListFilteredCount = () => createSelector(
  makeSelectBuildListFiltered(),
  (substate) => substate.length
);

export default makeSelectBuildList;
export {
  selectBuildListDomain,
  selectBuildListBuildsDomain,
  makeSelectBuildListFiltered,
  makeSelectBuildListCount,
  makeSelectBuildListFilteredCount,
};
