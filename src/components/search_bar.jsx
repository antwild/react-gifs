import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
     <input type="text" className="form-search form-control" />
    );
  };
};

export default SearchBar;
