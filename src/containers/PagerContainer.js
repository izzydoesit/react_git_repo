import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Pager from '../components/Pager/Pager';

import { setPager, changePage } from '../actions/pager-actions.js';

const mapStateToProps = ({ pager, search }) => {
  return({
    pager,
    results: search.results
  });
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
    setPager, changePage 
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Pager);