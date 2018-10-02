export default {
  form: {
    text: "",
    stars: [0, 50000],
    license: "",
    forked: false,
    touched: {
      text: false
    },
    formValid: false
  },
  search: {
    loading: false,
    totalCount: "",
    results: [],
    pageOfResults: [],
    failure: ''
  },
  pager: {
    totalResults: 0,
    currentPage: 0,
    pageSize: 10,
    totalPages: 0,
    startPage: 1,
    endPage: 1,
    startIndex: 0,
    endIndex: 0,
    pages: []
  }
}