import initialState from '../store/initialState';
import { SET_PAGER, CHANGE_PAGE } from '../constants';

export default function pagerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAGER:
      return {
        ...state,
        pager: action.pager
      }
    case CHANGE_PAGE:
      return {
        ...state,
        search: {
          ...state.search,
          pageOfResults: action.page
        }
      }
    default:
      return state;
  }
}