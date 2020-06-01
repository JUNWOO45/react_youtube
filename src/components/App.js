import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {

  getYoutubeVidoes = (value) => {
    console.log(value);
    youtube.get('/search', {
      params: {
        q: value
      }
    })
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.getYoutubeVidoes}></SearchBar>
      </div>
    )
  }
}

export default App;
