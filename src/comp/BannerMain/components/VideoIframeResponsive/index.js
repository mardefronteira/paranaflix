import React from 'react';
import { VideoContainer, ResponsiveIframe } from './styles';

function VideoIframeResponsive({ urlId, urlHost }) {

  const filmUrl = urlHost === 'youtube' ?
  `https://www.youtube.com/embed/${urlId}?autoplay=0&mute=1`
  : `https://player.vimeo.com/video/${urlId}`;

  return (
    <VideoContainer>
      <ResponsiveIframe
        title="player"
        src = { filmUrl }
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
}

export default VideoIframeResponsive;
