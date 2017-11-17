/*
 *
 * Filter actions
 *
 */

import {
  TOGGLE_ONLY_WITH_BLUEPRINTS,
  TOGGLE_GAME_STATE,
  TOGGLE_TYPE,
} from './constants';

export function toggleFilter(type) {
  switch (type) {
    case 'onlyWithBlueprints':
      return {
        type: TOGGLE_ONLY_WITH_BLUEPRINTS,
        toggleOnlyWithBlueprints: true,
      };
    case 'earlyGame':
      return {
        type: TOGGLE_GAME_STATE,
        key: 'early',
      };
    case 'midGame':
      return {
        type: TOGGLE_GAME_STATE,
        key: 'mid',
      };
    case 'lateGame':
      return {
        type: TOGGLE_GAME_STATE,
        key: 'late',
      };
    case 'typeBalancers':
      return {
        type: TOGGLE_TYPE,
        key: 'balancers',
      };
    case 'typeSmelting':
      return {
        type: TOGGLE_TYPE,
        key: 'smelting',
      };
    case 'typeTrains':
      return {
        type: TOGGLE_TYPE,
        key: 'trains',
      };
    case 'typeProduction':
      return {
        type: TOGGLE_TYPE,
        key: 'production',
      };

    default:
      return {};
  }
}
