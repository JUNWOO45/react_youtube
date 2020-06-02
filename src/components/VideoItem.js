import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  onClickVideo = () => {
    return this.props.onVideoSelect(this.props.video);
  }

  render() { 
    return (
      <div className="item video-item" onClick={this.onClickVideo}>
        <img src={this.props.video.snippet.thumbnails.medium.url} className="ui image" alt={this.props.video.snippet.description}/>
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
        </div>
      </div>
    )
  }
}
 
export default VideoItem;
