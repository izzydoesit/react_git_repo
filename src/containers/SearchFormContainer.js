import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm/SearchForm';

import { 
  textChange,
  blurChange,
  sliderChange,
  licenseChange,
  toggleForked,
  getRepos,
  updateLoading
} from '../actions/form-actions.js';

const mapStateToProps = ({ form, search }) => {
  return ({
    text: form.text,
    touched: form.touched,
    license: form.license,
    stars: form.stars,
    forked: form.forked,
    loading: search.loading
  })
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      textChange,
      blurChange,
      sliderChange,
      licenseChange,
      toggleForked,
      getRepos,
      updateLoading
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);