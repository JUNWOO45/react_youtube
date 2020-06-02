import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  const result = props.videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video}></VideoItem>
  });

  return <div>{result}</div>
}
 
export default VideoList;