
import {
  toggleFilter,
} from '../actions';
import {
  TOGGLE_ONLY_WITH_BLUEPRINTS,
  TOGGLE_GAME_STATE,
  TOGGLE_TYPE,
} from '../constants';

describe('Filter actions', () => {
  describe('toggleFilter Action', () => {
    it('onlyWithBlueprints has a type of TOGGLE_ONLY_WITH_BLUEPRINTS, toggleOnlyWithBlueprints true', () => {
      const input = 'onlyWithBlueprints';
      const expected = {
        type: TOGGLE_ONLY_WITH_BLUEPRINTS,
        toggleOnlyWithBlueprints: true,
      };
      expect(toggleFilter(input)).toEqual(expected);
    });

    it('earlyGame has a type of TOGGLE_GAME_STATE, key early', () => {
      const input = 'earlyGame';
      const expected = {
        type: TOGGLE_GAME_STATE,
        key: 'early',
      };
      expect(toggleFilter(input)).toEqual(expected);
    });

    it('midGame has a type of TOGGLE_GAME_STATE, key mid', () => {
      const input = 'midGame';
      const expected = {
        type: TOGGLE_GAME_STATE,
        key: 'mid',
      };
      expect(toggleFilter(input)).toEqual(expected);
    });

    it('lateGame has a type of TOGGLE_GAME_STATE, key late', () => {
      const input = 'lateGame';
      const expected = {
        type: TOGGLE_GAME_STATE,
        key: 'late',
      };
      expect(toggleFilter(input)).toEqual(expected);
    });

    it('typeBalancers has a type of TOGGLE_TYPE, key balancers', () => {
      const input = 'typeBalancers';
      const expected = {
        type: TOGGLE_TYPE,
        key: 'balancers',
      };
      expect(toggleFilter(input)).toEqual(expected);
    });

    it('typeSmelting has a type of TOGGLE_TYPE, key smelting', () => {
      const input = 'typeSmelting';
      const expected = {
        type: TOGGLE_TYPE,
        key: 'smelting',
      };
      expect(toggleFilter(input)).toEqual(expected);
    });

    it('typeTrains has a type of TOGGLE_TYPE, key trains', () => {
      const input = 'typeTrains';
      const expected = {
        type: TOGGLE_TYPE,
        key: 'trains',
      };
      expect(toggleFilter(input)).toEqual(expected);
    });

    it('typeProduction has a type of TOGGLE_TYPE, key production', () => {
      const input = 'typeProduction';
      const expected = {
        type: TOGGLE_TYPE,
        key: 'production',
      };
      expect(toggleFilter(input)).toEqual(expected);
    });

    it('empty object when passed anything else', () => {
      const expected = {};
      expect(toggleFilter()).toEqual(expected);
      expect(toggleFilter('anything')).toEqual(expected);
    });
  });
});
