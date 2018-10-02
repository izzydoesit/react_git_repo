import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/jopwell.png';
import './Header.css';

const Header = () => {

  return (
    <header className="App-header">
      <img src={logo} className="jopwell-logo" alt="logo"/>
    </header>
  )
}

export default Header;