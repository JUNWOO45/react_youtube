import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: '',
    nextPageToken: '',
    currentInputValue: ''
  };

  getYoutubeVidoes =  async value => {
    const response = await youtube.get('/search', {
      params: {
        q: value
      }
    });

    console.log('response : ', response);
    const state = { 
      videos: response.data.items, 
      currentInputValue: value 
    };

    this.updateNextPageToken(state, response);
    this.setState(state);
  };

  seeMore = async () => {
    console.log('currentPageToken : ', this.state.nextPageToken);
    const response = await youtube.get('/search', {
      params: {
        q: this.state.currentInputValue,
        pageToken: this.state.nextPageToken
      }
    })

    const state = { 
      videos: [ ...this.state.videos, ...response.data.items],
    };

    this.updateNextPageToken(state, response);
    this.setState(state);
  }

  updateNextPageToken = (state, response) => {
    if(response && response.data && response.data.nextPageToken) {
      return state.nextPageToken = response.data.nextPageToken;
    }

    return;
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.getYoutubeVidoes}></SearchBar>
        <VideoDetail video={this.state.selectedVideo}></VideoDetail>
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}></VideoList>
        <div onClick={this.seeMore}>더보기</div>
      </div>
    )
  }
}

export default App;
