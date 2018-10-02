import React from 'react';
import PropTypes from 'prop-types';
import Repo from './Repo';
import Loader from '../Loader/Loader';
import './SearchResults.css';

const SearchResults = (props) => {

  const loading = props.loading;
  const count = props.totalCount;
  const page = props.pageOfResults;

  return(
    <div className="results-container">
      <hr/>
      <h1 className="results-title">SEARCH results: {count}</h1>
      {loading 
        ? <Loader className="has-text-primary"></Loader>
        : <ul className="results-list">
        {count === 0 
          ? <li className="no-results">{ 'No results found' }</li>
          : page.map((repo, index) => 
            <Repo 
              key={repo.id}
              name={repo.full_name}
              url={repo.html_url}
              description={repo.description}
              stars={repo.stargazers_count}
              license={repo.license}
              forked={repo.fork}
            />
          )
        }
        </ul>
      }
    </div>
  )
}

SearchResults.propTypes = {
  loading: PropTypes.bool,
  SearchResults: PropTypes.array,
  pageOfResults: PropTypes.array,
  pager: PropTypes.object,
  updateLoading: PropTypes.func,
  updateSearchResults: PropTypes.func,
};

export default SearchResults;
