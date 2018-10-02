import React, { Component } from 'react';
import './LicenseSelect.css';

export default class LicenseSelect extends Component {

  handleChange = (event) => {
    const value = event.target.value;
    this.props.licenseChange(value);
  }

  render() {

    return(
      <div className="form-group license">
        <label htmlFor="license">License</label>
        <select
          id="license-select"
          className="license-input form-control"
          name="license"
          value={this.props.license} 
          onChange={this.handleChange}
        >
          <option value=""></option>
          <option value="afl-3.0">afl-3.0</option>
          <option value="apache-2.0">apache-2.0</option>
          <option value="artistic-2.0">artistic-2.0</option>
          <option value="bs1-1.0">bs1-1.0</option>
          <option value="bsd-2-clause">bsd-2-clause</option>
          <option value="bsd-3-clause">bsd-3-clause</option>
          <option value="bsd-3-clause-clear">bsd-3-clause-clear</option>
          <option value="cc">cc</option>
          <option value="cc0-1.0">cc0-1.0</option>
          <option value="cc-by-4.0">cc-by-4.0</option>
          <option value="cc-by-sa-4.0">cc-by-sa-4.0</option>
          <option value="wtfpl">wtfpl</option>
          <option value="ecl-2.0">ecl-2.0</option>
          <option value="epl-1.0">epl-1.0</option>
          <option value="eupl-1.1">eupl-1.1</option>
          <option value="agpl-3.0">agpl-3.0</option>
          <option value="gpl">gpl</option>
          <option value="gpl-2.0">gpl-2.0</option>
          <option value="gpl-3.0">gpl-3.0</option>
          <option value="lgpl">lgpl</option>
          <option value="lgpl-2.1">lgpl-2.1</option>
          <option value="lgpl-3.0">lgpl-3.0</option>
          <option value="isc">isc</option>
          <option value="lppl-1.3c">lppl-1.3c</option>
          <option value="ms-pl">ms-pl</option>
          <option value="mit">mit</option>
          <option value="mpl-2.0">mpl-2.0</option>
          <option value="osl-3.0">osl-3.0</option>
          <option value="postgresql">postgresql</option>
          <option value="ofl-1.1">ofl-1.1</option>
          <option value="ncsa">ncsa</option>
          <option value="unlicense">unlicense</option>
          <option value="zlib">zlib</option>
        </select>
      </div>
    )
  }
}
