import React, { useState, useEffect } from 'react';
import { VideoCardContainer, Desc } from './styles';


function VideoCard({ titulo, id, host, sinopse, ano, categoryColor }) {
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

    if (sinopse.split(" ").length > 19) { sin += "..."; }


    return (

    <>
      <VideoCardContainer
        url={imgSrc}
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
