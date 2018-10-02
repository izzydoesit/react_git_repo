import initialState from '../store/initialState';
import {
  TEXT_CHANGE,
  TEXT_BLURRED,
  SLIDER_CHANGE,
  LICENSE_CHANGE,
  TOGGLE_FORKED,
} from '../constants';

export default function formReducer(state = initialState.form, action) {
  switch (action.type) {
    case TEXT_CHANGE:
      return {
        ...state,
        text: action.text
      }
    case TEXT_BLURRED:
      return {
        ...state,
        touched: {
          ...state.touched,
          text: true
        }
      }
    case LICENSE_CHANGE:
      return {
        ...state,
        license: action.license
      }
    case SLIDER_CHANGE:
      return {
        ...state,
        stars: action.stars
      }
    case TOGGLE_FORKED:
      return {
        ...state,
        forked: !state.forked
      }
    default:
      return state;
  }
}

