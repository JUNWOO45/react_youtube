import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = {
    videos: []
  };

  getYoutubeVidoes =  async value => {
    const response = await youtube.get('/search', {
      params: {
        q: value
      }
    });

    console.log('response : ', response);
    this.setState({ videos: response.data.items})
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.getYoutubeVidoes}></SearchBar>
        <VideoList videos={this.state.videos}></VideoList>
      </div>
    )
  }
}

export default App;
