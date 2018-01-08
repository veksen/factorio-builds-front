
import {
  loadBuilds,
  buildsLoaded,
  buildLoadingError,
  loadBlueprints,
  blueprintsLoaded,
  blueprintLoadingError,
  saveBuild,
  buildSaved,
  buildSavingError,
} from '../actions';
import {
  LOAD_BUILDS,
  LOAD_BUILDS_SUCCESS,
  LOAD_BUILDS_ERROR,
  LOAD_BLUEPRINTS,
  LOAD_BLUEPRINTS_SUCCESS,
  LOAD_BLUEPRINTS_ERROR,
  SAVE_BUILD,
  SAVE_BUILD_SUCCESS,
  SAVE_BUILD_ERROR,
} from '../constants';

describe('BuildList actions', () => {
  describe('Load Build Actions', () => {
    it('has a type of LOAD_BUILDS', () => {
      const expected = {
        type: LOAD_BUILDS,
      };
      expect(loadBuilds()).toEqual(expected);
    });

    it('has a type of LOAD_BUILDS_SUCCESS', () => {
      const expected = {
        type: LOAD_BUILDS_SUCCESS,
        builds: [],
      };
      expect(buildsLoaded([])).toEqual(expected);
    });

    it('has a type of LOAD_BUILDS_ERROR', () => {
      const expected = {
        type: LOAD_BUILDS_ERROR,
        error: {},
      };
      expect(buildLoadingError({})).toEqual(expected);
    });
  });

  describe('Load Blueprint Actions', () => {
    it('has a type of LOAD_BLUEPRINTS', () => {
      const expected = {
        type: LOAD_BLUEPRINTS,
      };
      expect(loadBlueprints()).toEqual(expected);
    });

    it('has a type of LOAD_BLUEPRINTS_SUCCESS', () => {
      const expected = {
        type: LOAD_BLUEPRINTS_SUCCESS,
        blueprints: [],
      };
      expect(blueprintsLoaded([])).toEqual(expected);
    });

    it('has a type of LOAD_BLUEPRINTS_ERROR', () => {
      const expected = {
        type: LOAD_BLUEPRINTS_ERROR,
        error: {},
      };
      expect(blueprintLoadingError({})).toEqual(expected);
    });
  });

  describe('Save Build Actions', () => {
    it('has a type of SAVE_BUILD', () => {
      const expected = {
        type: SAVE_BUILD,
      };
      expect(saveBuild()).toEqual(expected);
    });

    it('has a type of SAVE_BUILD_SUCCESS', () => {
      const expected = {
        type: SAVE_BUILD_SUCCESS,
        build: {},
      };
      expect(buildSaved({})).toEqual(expected);
    });

    it('has a type of SAVE_BUILD_ERROR', () => {
      const expected = {
        type: SAVE_BUILD_ERROR,
        error: {},
      };
      expect(buildSavingError({})).toEqual(expected);
    });
  });
});
