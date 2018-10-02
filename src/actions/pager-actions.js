import { SET_PAGER, CHANGE_PAGE } from '../constants';

export const setPager = (pager) => ({
  type: SET_PAGER,
  pager
})

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page
});
