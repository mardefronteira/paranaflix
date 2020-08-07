import React from 'react';
import { VideoCardContainer } from './styles';

function VideoCard({ filmTitle, urlId, urlHost, categoryColor }) {

  const image = urlHost === 'youtube' ?
  `https://img.youtube.com/vi/${urlId}/hqdefault.jpg`
  : "https://i.ytimg.com/vi/zJTk-TtPlhY/maxresdefault.jpg";

  const url = urlHost === 'youtube' ?
  `https://youtu.be/${urlId}`
  : `https://vimeo.com/${urlId}`;

    return (
    <VideoCardContainer
      url={image}
      href={url}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={filmTitle}
    />
  );
}

export default VideoCard;
