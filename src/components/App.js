import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: ''
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

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.getYoutubeVidoes}></SearchBar>
        <VideoDetail video={this.state.selectedVideo}></VideoDetail>
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}></VideoList>
      </div>
    )
  }
}

export default App;
