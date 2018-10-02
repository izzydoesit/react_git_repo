import * as constants from '../constants';

import {
  textChange,
  blurChange,
  sliderChange,
  licenseChange,
  toggleFork,
  formSubmit
} from '../actions/form-actions';

import {
  updateLoading,
  updateTotalCount,
  updateSearchResults,
  updatePageOfResults,
  updatePager
} from '../actions/search-actions';

describe('Form Actions', () => {

  describe('textChange', () => {
    it('should return TEXT_CHANGE as the item type', () => {
      const action = textChange('some text');
      expect(action.type).toBe(constants.TEXT_CHANGE);
    });

    it('should return the provided value on the action', () => {
      const text = 'random string';
      const action = textChange(text);
      expect(action.item.text).toBe(text);
    });

    it('should provide a string id', () => {
      const action = textChange('item name');
      expect(typeof action.text.id).toBe('string');
    });
  });

  describe('blurChange', () => {
    it('should return TEXT_BLURRED as the item type', () => {
      const action = blurChange('thisField');
      expect(action.type).toBe(constants.TEXT_BLURRED);
    });
  });

  describe('sliderChange', () => {
    it('should return SLIDER_CHANGE as the item type', () => {
      const action = sliderChange([1, 100]);
      expect(action.type).toBe(constants.SLIDER_CHANGE);
    });
  });

  describe('licenseChange', () => {
    it('should return LICENSE_CHANGE as the item type', () => {
      const action = licenseChange('super license');
      expect(action.type).toBe(constants.LICENSE_CHANGE);
    });
  });

  describe('toggleFork', () => {
    it('should return TOGGLE_FORK as the item type', () => {
      const action = toggleFork();
      expect(action.type).toBe(constants.TOGGLE_FORK);
    });
  });

  describe('getRepos', () => {
    it('should return GET_REPOS as the item type', () => {
      const action = getRepos('http://www.myspace.com');
      expect(action.type).toBe(constants.GET_REPOS);
    });
  });
});

describe('Search Actions', () => {

  describe('updateLoading', () => {
    it('should return UPDATE_LOADING as the item type', () => {
      const action = updateLoading(true);
      expect(action.type).toBe(constants.UPDATE_LOADING);
    });
  });

  describe('updateTotalCount', () => {
    it('should return UPDATE_TOTAL_COUNT as the item type', () => {
      const action = updateTotalCount(55);
      expect(action.type).toBe(constants.UPDATE_TOTAL_COUNT);
    });
  });

  describe('updateSearchResults', () => {
    it('should return UPDATE_SEARCH_RESULTS as the item type', () => {
      const action = updateSearchResults([{one: 'listing'}]);
      expect(action.type).toBe(constants.UPDATE_SEARCH_RESULTS);
    });
  });

  describe('updatePageOfResults', () => {
    it('should return UPDATE_PAGE_OF_RESULTS as the item type', () => {
      const action = updatePageOfResults([{two: 'listing'}]);
      expect(action.type).toBe(constants.UPDATE_PAGE_OF_RESULTS);
    });
  });

  describe('updatePager', () => {
    it('should return UPDATE_PAGER as the item type', () => {
      const action = updatePager({pages: 6});
      expect(action.type).toBe(constants.UPDATE_PAGER);
    });
  });
});

