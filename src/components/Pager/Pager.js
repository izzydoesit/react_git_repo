import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pager.css';

class Pagination extends Component {
  
  componentWillMount = () => {
    if (this.props.results && this.props.results.length) {
      this.setPage(this.props.pager.currentPage);
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.results !== prevProps.results) {
      this.setPage(this.props.pager.currentPage);
    }
  }
  // takes current page number
  // updates pager object in state
  // sets pageOfResults in state
  setPage = (page) => {
    const results = this.props.results;
    let pager = this.props.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    pager = this.getPager(results.length, page);
    const pageOfresults = results.slice(pager.startIndex, pager.endIndex + 1);

    this.props.setPager(pager);
    this.props.changePage(pageOfresults);
  }
  // takes in number of results, current page and page size
  // returns pager object
  getPager = (totalResults, currentPage, pageSize) => {
    currentPage = currentPage || 1;
    pageSize = pageSize || 10;

    const totalPages = Math.ceil(totalResults / pageSize);

    let startPage, endPage;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalResults - 1);

    let start = startPage;
    let pages = [];

    while(start <= endPage){
      pages.push(start++);
    }

    return {
      totalResults: totalResults,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  render() {

    const pager = this.props.pager.pager;

    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }

    return(
      <ul className="pagination">
        <li className={pager.currentPage === 1 ? 'disabled' : ''}>
            <a onClick={() => this.setPage(1)}>First</a>
        </li>
        <li className={pager.currentPage === 1 ? 'disabled' : ''}>
            <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
        </li>
        {pager.pages.map((page, index) =>
            <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                <a onClick={() => this.setPage(page)}>{page}</a>
            </li>
        )}
        <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
            <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
        </li>
        <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
            <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
        </li>
      </ul>
    )
  }
}

Pagination.propTypes = {
  results: PropTypes.array.isRequired,
  changePage: PropTypes.func.isRequired,
  currentPage: PropTypes.number
}

export default Pagination