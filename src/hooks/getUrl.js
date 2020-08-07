import React from 'react';

function getUrl(urlId, urlHost) {

  if (urlHost === 'youtube') {
    return `https://www.youtube.com/embed/${urlId}?autoplay=0&mute=1`;
  } else if (urlHost === 'vimeo') {
    return `https://player.vimeo.com/video/${urlId}`;
  } else {
    return "tá loco bicho"
  }
}

export default getUrl;
