import React, { Component } from 'react';
import FormError from './FormError';
import './TextBox.css';

export default class TextBox extends Component {

  handleChange = (event) => {
    const value = event.target.value;
    this.props.textChange(value);
  }

  handleBlur = (event) => {
    const name = event.target.name;
    this.props.blurChange(name);
  }

  validateTextInput = () => {
    return (this.props.text.length === 0 && this.props.textTouched);
  }

  render() {
    const shouldShowError = this.validateTextInput();
    const errorClass = shouldShowError ? 'has-error' : '';
    const errorMessage = shouldShowError ? 'text is a required field' : '';

    return(
      <div 
      className={`form-group ${errorClass}`}
      > 
        <div className="label-error-wrapper">
          <label htmlFor="text">Text</label>
          <FormError error={errorMessage} />
        </div>
        <input
          id="text-input"
          className="text-input form-control" 
          name="text" 
          value={this.props.text}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          required
        />
      </div>
    )
  }
}
