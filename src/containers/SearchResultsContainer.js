import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults/SearchResults';

import {
  updateLoading,
  updateSearchResults,
} from '../actions/search-actions.js';

const mapStateToProps = (state) => {
  return state.search;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateLoading,
    updateSearchResults,
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
