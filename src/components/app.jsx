import React, { Component } from 'react';
import SearchBar from './search_bar';
import GifList from './gif_list'
import SelectedGif from './selected_gif'

const giphyApiKey = 'km9CzdZO058vMcLwir98aMQcgMYXAYtk'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: []
    }
  };

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <SelectedGif />
        </div>
        <div className="right-scene">
          <GifList />
        </div>
      </div>
    );
  };
};

export default App;
