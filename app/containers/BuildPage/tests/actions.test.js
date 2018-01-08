
import {
  loadBuild,
  buildLoaded,
  buildLoadingError,
  loadBuildBlueprints,
  buildBlueprintsLoaded,
  buildBlueprintsLoadingError,
} from '../actions';
import {
  LOAD_BUILD,
  LOAD_BUILD_SUCCESS,
  LOAD_BUILD_ERROR,
  LOAD_BUILD_BLUEPRINTS,
  LOAD_BUILD_BLUEPRINTS_SUCCESS,
  LOAD_BUILD_BLUEPRINTS_ERROR,
} from '../constants';

describe('BuildPage actions', () => {
  describe('Load Build Actions', () => {
    it('has a type of LOAD_BUILD', () => {
      const id = '2b77cac0966853b020ad7ddb8e0fcf12';
      const expected = {
        type: LOAD_BUILD,
        id,
      };
      expect(loadBuild(id)).toEqual(expected);
    });

    it('has a type of LOAD_BUILD_SUCCESS', () => {
      const expected = {
        type: LOAD_BUILD_SUCCESS,
        build: {},
      };
      expect(buildLoaded({})).toEqual(expected);
    });

    it('has a type of LOAD_BUILD_ERROR', () => {
      const expected = {
        type: LOAD_BUILD_ERROR,
        error: {},
      };
      expect(buildLoadingError({})).toEqual(expected);
    });
  });

  describe('Load Build Blueprints Actions', () => {
    it('has a type of LOAD_BUILD_BLUEPRINTS', () => {
      const id = '58b7e06ae248c1febe41a15c';
      const expected = {
        type: LOAD_BUILD_BLUEPRINTS,
        buildId: id,
      };
      expect(loadBuildBlueprints(id)).toEqual(expected);
    });

    it('has a type of LOAD_BUILD_BLUEPRINTS_SUCCESS', () => {
      const expected = {
        type: LOAD_BUILD_BLUEPRINTS_SUCCESS,
        blueprints: {},
      };
      expect(buildBlueprintsLoaded({})).toEqual(expected);
    });

    it('has a type of LOAD_BUILD_BLUEPRINTS_ERROR', () => {
      const expected = {
        type: LOAD_BUILD_BLUEPRINTS_ERROR,
        error: {},
      };
      expect(buildBlueprintsLoadingError({})).toEqual(expected);
    });
  });
});
