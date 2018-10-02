import React, { Component } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './StarsRangeSlider.css';

export default class StarsRangeSlider extends Component {

  handleChange = (range) => {
    const lowerBound = range[0];
    const upperBound = range[1];
    const stars = [lowerBound, upperBound]
    this.props.sliderChange(stars)
  }

  render() {
    const lowerBound = this.props.stars[0];
    const upperBound = this.props.stars[1];
    const marks = {
      0: <strong>0</strong>,
      100000: <strong>100,000</strong>
    };

    return (
      <div className="form-group range-wrapper">
        <label htmlFor="stars">Stars ({`${lowerBound} - ${upperBound}`})</label>
        <Range
          id={"stars-input"}
          className="stars-input form-control"
          name={"stars"} 
          allowCross={false}
          min={0}
          max={100000}
          marks={marks}
          value={this.props.stars} 
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
