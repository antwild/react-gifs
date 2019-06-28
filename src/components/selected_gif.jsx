import React, { Component } from 'react';

class SelectedGif extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="selected-gif">
        <img src='https://www.kcbi.org/wp-content/uploads/2019/03/homer-simpson.jpg' alt="" className="gif"/>
      </div>
    );
  };
};

export default SelectedGif;
