import {
  UPDATE_LOADING,
  UPDATE_SEARCH_RESULTS,
} from '../constants';

export const updateLoading = (isLoading = true) => ({
  type: UPDATE_LOADING, 
  isLoading
});

export const updateSearchResults = (results) => ({
  type: UPDATE_SEARCH_RESULTS,
  results
});
