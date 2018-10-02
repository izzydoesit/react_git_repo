import {
  textChange,
  textBlurred,
  licenseChange,
  sliderChange,
  toggleForked,
} from '../actions/form-actions';

import {
  updateLoading,
  updateSearchResults,
} from '../actions/search-actions';

import {
  setPager,
  changePage,
} from '../actions/pager-actions'

import reducer from '../reducers';
import initialState from '../store/initial-state';

describe('Combined Reducer', () => {
  it('should match the initial state', () => {
    expect(reducer(initialState, {})).toBe(initialState);
  });

  xit('textChange', () => {
    const value = 'new text';
    const action = textChange(value);
    const text = action.text;
    const state = reducer(initialState, action);

    expect(state.items).toContain(item);
  });

  xit('licenseChange', () => {
    const [ item ] = initialState.items;
    const action = licenseChange(item.id);
    const state = reducer(initialState, action);

    expect(state.items).not.toContain(item);
  });

  xit('textBlurred', () => {
    const [ item ] = initialState.items;
    const expectedStatus = !item.packed;
    const action = textBlurred(item.id);
    const state = reducer(initialState, action);
    const [ resultingItem ] = state.items;

    expect(resultingItem.packed).not.toContain(expectedStatus);
  });

  xit('sliderChange', () => {
    const action = sliderChange();
    const state = reducer(initialState, action);

    const areAllUnpacked = state.items.every(item => !item.packed);

    expect(areAllUnpacked).toBe(true);
  });

  describe('updateNewItemValue', () => {
    xit('should update the newItemValue field on the resulting state', () => {
      const value = 'item name';
      const action = updateNewItemValue(value);
      const state = reducer(initialState, action);
      expect(state.newItemValue).toBe(value);
    });
  });

  describe('updatePackedItemsFilter', () => {
    xit('should update the newItemValue field on the resulting state', () => {
      const value = 'item name';
      const action = updatePackedItemsFilter(value);
      const state = reducer(initialState, action);
      expect(state.filter.packedItemsFilter).toBe(value);
    });
  });

  describe('updateUnpackedItemsFilter', () => {
    xit('should update the newItemValue field on the resulting state', () => {
      const value = 'item name';
      const action = updateUnpackedItemsFilter(value);
      const state = reducer(initialState, action);
      expect(state.filter.unpackedItemsFilter).toBe(value);
    });
  });
})
