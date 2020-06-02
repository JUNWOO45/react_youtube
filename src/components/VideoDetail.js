import React from 'react';

const VideoDetail = (props) => {
  console.log('VideoDetail ::: ', props.video);
  const videoSrc = `https://www.youtube.com/embed/${props.video.id?.videoId}`;

  if(props.video) {
    return ( 
      <div className="ui segment">
        <h1 className="huge header">{props.video.snippet?.title}</h1>
        <div className="ui embed">
          <iframe src={videoSrc} title={props.video.snippet?.title}></iframe>
        </div>
        <p>{props.video.snippet?.description}</p>
      </div> 
    );
  }

  return null;
}
 
export default VideoDetail;