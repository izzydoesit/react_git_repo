import axios from 'axios';

import {
  TEXT_CHANGE,
  TEXT_BLURRED,
  LICENSE_CHANGE,
  SLIDER_CHANGE,
  TOGGLE_FORKED,
  GET_REPOS,
  REPOS_SUCCESS,
  REPOS_FAILURE,
  UPDATE_LOADING
} from '../constants';

export const textChange = (text) => ({
  type: TEXT_CHANGE,
  text
});

export const blurChange = (fieldName) => ({
  type: TEXT_BLURRED,
  fieldName
});

export const sliderChange = (range) => ({
  type: SLIDER_CHANGE,
  stars: range
});

export const licenseChange = (value) => ({
  type: LICENSE_CHANGE,
  license: value
});

export const toggleForked = () => ({
  type: TOGGLE_FORKED
});

export const getRepos = (query) => {

  const baseEndpoint = "https://api.github.com/search/repositories"
  const uri = baseEndpoint + query;

  return dispatch => {
    axios.get(uri)
    .then(response => {
      console.log("repos received:", response.data.total_count);
      dispatch({
        type: REPOS_SUCCESS,
        repos: response.data.items,
        totalCount: response.data.total_count,
        loading: false
      })
    })
    .catch(error => {
      console.log('ERROR:', error);
      dispatch({
        type: REPOS_FAILURE,
        loading: false,
        error
      })
    })
  }
}

export const updateLoading = (loading) => ({
  type: UPDATE_LOADING,
  loading
})

