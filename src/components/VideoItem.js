import React from 'react';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  render() { 
    return (
      <div>
        <img src={this.props.video.snippet.thumbnails.medium.url}/>
        <div>{this.props.video.snippet.title}</div>
      </div>
    )
  }
}
 
export default VideoItem;
