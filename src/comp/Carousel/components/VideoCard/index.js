import React, { useState, useEffect } from 'react';
import { VideoCardContainer, Desc } from './styles';


function VideoCard({ titulo, id, host, sinopse, duracao, ano, categoryColor }) {
  const [imgSrc, setImgSrc] = useState();

  useEffect(() => {
    if(host === 'vimeo') {

      fetch(`https://vimeo.com/api/v2/video/${id}.json`)
      .then(async (response) => {
        const data = await response.text();
        return data;
      }).then((data) => {
        const { thumbnail_large } = JSON.parse(data)[0];
        setImgSrc(thumbnail_large);

      })
      .catch(error => {
        console.log(error);
      });

    } else if (host === 'youtube') {
      setImgSrc(`https://img.youtube.com/vi/${id}/hqdefault.jpg`);

    }
  }, [])


    var sin = sinopse.split(" ").slice(0,20).join(" ");

    if (sinopse.split(" ").length > 20) { sin += "..."; }


    return (

    <>
    <Desc to={`/filme/${id}`}>
      <VideoCardContainer
        url={imgSrc}
        style={{ borderColor: categoryColor || 'red' }}
        title={titulo}
      />
        <p><strong>{titulo}</strong> ({ano}, {duracao})</p>
        <p>{sin}</p>
      </Desc>
    </>
  );
}

export default VideoCard;
