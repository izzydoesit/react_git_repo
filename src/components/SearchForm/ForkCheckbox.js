import React, { Component } from 'react';
import './ForkCheckbox.css';

export default class ForkCheckbox extends Component {

  handleChange = (event) => {
    this.props.toggleForked();
  }

  render() {

    return(
      <div className="form-group forked">
      <label htmlFor="forked" className="forked-label">
        <input 
          id="forked"
          className="forked-input toggle" 
          type="checkbox" 
          name="forked" 
          value={this.props.forked}
          onChange={this.handleChange}
        />
        <span>Include Forked</span></label>
      </div>
    )
  }
}