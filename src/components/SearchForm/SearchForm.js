import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextBox from './TextBox';
import StarsRangeSlider from './StarsRangeSlider';
import LicenseSelect from './LicenseSelect';
import ForkCheckbox from './ForkCheckbox';
import './SearchForm.css';

class SearchForm extends Component {

  validateForm = () => {
    return this.props.text.length > 0;
  }

  getQuery = () => {
    const text = this.props.text.split(" ").join("+");
    const lowerBound = this.props.stars[0];
    const upperBound = this.props.stars[1];
    const stars =  lowerBound === upperBound ? lowerBound : `${lowerBound}..${upperBound}`;
    const forked = this.props.forked;
    const license = this.props.license;
    const query = `?q=${text}+stars:${stars}+fork:${forked}+license:${license}`;

    return query;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateLoading(true);
    const query = this.getQuery();
    this.props.getRepos(query);
  }

  render() {

    const formValid = this.validateForm();

    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="two-input">
            <TextBox 
              text={this.props.text}
              textTouched={this.props.touched.text}
              blurChange={this.props.blurChange}
              textChange={this.props.textChange}
            />
            <StarsRangeSlider 
              stars={this.props.stars}
              sliderChange={this.props.sliderChange}
            />
          </div>
          <div className="two-input">
            <LicenseSelect
              license={this.props.license}
              licenseChange={this.props.licenseChange}
            />
            <ForkCheckbox 
              forked={this.props.forked}
              toggleForked={this.props.toggleForked}
            />
          </div>
          <button 
            className="submit-btn"
            type="submit"
            disabled={!formValid}

          >
            SEARCH
          </button>
        </form>
      </div>
    )
  }
}

SearchForm.propTypes = {
  text: PropTypes.string,
  range: PropTypes.array,
  license: PropTypes.string,
  forked: PropTypes.bool,
  touched: PropTypes.object.isRequired,
  formValid: PropTypes.bool,
  textChange: PropTypes.func.isRequired,
  blurChange: PropTypes.func.isRequired,
  sliderChange: PropTypes.func.isRequired,
  licenseChange: PropTypes.func.isRequired,
  toggleForked: PropTypes.func.isRequired,
  getRepos: PropTypes.func,
};

export default SearchForm;
