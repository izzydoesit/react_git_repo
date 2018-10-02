import { combineReducers } from 'redux';
import search from '../reducers/search-reducer';
import form from '../reducers/form-reducer';
import pager from '../reducers/pager-reducer';

export const rootReducer = combineReducers({
  search,
  form,
  pager
});
