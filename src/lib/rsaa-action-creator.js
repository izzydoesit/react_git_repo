import { CALL_API } from `redux-api-middleware`;

const REQUEST = '/REQUEST';
const RECEIVE = '/RECEIVE';
const FAILURE = '/FAILURE';

export function fetchRepos(query) {
  return {
    [CALL_API]: {
      endpoint: `https://api.github.com/search/repositories${query}`,
      method: 'GET',
      types: [REQUEST, RECEIVE, FAILURE]
    }
  }
}