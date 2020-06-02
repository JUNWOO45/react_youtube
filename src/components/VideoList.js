import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  const result = props.videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelect={props.onVideoSelect}></VideoItem>
  });

  return <div className="ui relaxed divided list">{result}</div>
}
 
export default VideoList;