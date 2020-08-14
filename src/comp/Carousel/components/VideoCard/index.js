import React from 'react';
import { VideoCardContainer, Desc } from './styles';

function VideoCard({ titulo, id, host, sinopse, ano, categoryColor }) {

  const image = host === 'youtube' ?
  `https://img.youtube.com/vi/${id}/hqdefault.jpg`
  : "https://i.ytimg.com/vi/zJTk-TtPlhY/maxresdefault.jpg";

  const sin = sinopse.split(" ").slice(0,30).join(" ")+"...";

    return (
    <>
      <VideoCardContainer
        url={image}
        to={`/filme/${id}`}
        style={{ borderColor: categoryColor || 'red' }}
        title={titulo}
      />
      <Desc>
        <p><strong>{titulo}</strong> ({ano})</p>
        <p>{sin}</p>
      </Desc>
    </>
  );
}

export default VideoCard;
