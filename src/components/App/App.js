import React from 'react';
import { Route, Link } from 'react-router-dom'
import Header from '../Header/Header';
import SearchFormContainer from '../../containers/SearchFormContainer';
import SearchResultsContainer from '../../containers/SearchResultsContainer';
import PagerContainer from '../../containers/PagerContainer';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Header />
      <SearchFormContainer />
      <SearchResultsContainer />
      <PagerContainer />
    </div>
  );
}

export default App;
