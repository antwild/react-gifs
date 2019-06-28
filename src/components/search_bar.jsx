import React, { Component } from 'react';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  // };

  typed = (event) => {
    console.log(this.value)
  };

  render() {
    return (
     <input type="text" className="form-search form-control" onChange={this.typed} />
    );
  };
};

export default SearchBar;
