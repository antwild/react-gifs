import React, { Component } from 'react';

class GifList extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="gif-list">
        <img className="gif" src='https://www.kcbi.org/wp-content/uploads/2019/03/homer-simpson.jpg' alt=""/>
      </div>
    );
  };
};

export default GifList;
