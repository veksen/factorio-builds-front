import _ from 'lodash';
import { createSelector } from 'reselect';
import {
  makeSelectFilterOnlyBluePrints,
  makeSelectFilterType,
} from '../Filter/selectors';

/**
 * Direct selector to the buildList state domain
 */
const selectBuildListDomain = () => (state) => state.get('buildList');


/**
 * Other specific selectors
 */
const selectBuildListBuildsDomain = () => (state) => state.get('buildList').get('builds');
const selectBuildListBlueprintsDomain = () => (state) => state.get('buildList').get('blueprints');


/**
 * Default selector used by BuildList
 */

const makeSelectBuildList = () => createSelector(
  selectBuildListDomain(),
  (substate) => substate.toJS()
);

const makeSelectBuildListFiltered = () => createSelector(
  selectBuildListBuildsDomain(),
  selectBuildListBlueprintsDomain(),
  makeSelectFilterOnlyBluePrints(),
  makeSelectFilterType(),
  (substate, blueprints, filteredBlueprints, filteredType) => {
    let filteredSubstate = substate;

    // only filter by type if every type filter is false
    if (!_.every(filteredType.toJS(), (type) => type === false)) {
      filteredSubstate = filteredSubstate.filter((b) => filteredType.get(b.category) === true);
    }

    if (filteredBlueprints) {
      filteredSubstate = filteredSubstate.filter((b) => _.some(blueprints, (bp) => bp.build === b._id)); // eslint-disable-line no-underscore-dangle
    }

    return filteredSubstate;
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
