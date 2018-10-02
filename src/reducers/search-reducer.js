import initialState from '../store/initialState';
import {
  UPDATE_LOADING,
  UPDATE_TOTAL_COUNT, 
  UPDATE_SEARCH_RESULTS, 
  UPDATE_PAGE_OF_RESULTS, 
  UPDATE_PAGER, 
  REPOS_SUCCESS,
  REPOS_FAILURE,
  CHANGE_PAGE
} from '../constants';

export default function searchReducer(state = initialState.search, action) {
  switch (action.type) {
    case UPDATE_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case UPDATE_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.value,
      }
    case UPDATE_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.results
      }
    case UPDATE_PAGE_OF_RESULTS:
      return {
        ...state,
        pageOfResults: action.page
      }
    case UPDATE_PAGER:
      return {
        ...state,
        pager: action.pager
      }
    case REPOS_SUCCESS:
      return {
        ...state,
        totalCount: action.totalCount,
        results: action.repos,
        loading: action.loading
      }
    case REPOS_FAILURE: 
      return {
        ...state,
        totalCount: 0,
        failure: action.error,
        loading: action.loading
      }
    case CHANGE_PAGE:
      return {
        ...state,
        pageOfResults: action.page
      }
    default:
      return state
  }
}