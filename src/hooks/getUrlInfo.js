function getUrlInfo(filmURL) {

  let filmHost, filmId;

  if ( filmURL.includes('vimeo') ) {

    filmHost = 'vimeo';

    let id = filmURL.split(/(m\/)|(o\/)/);
    filmId=id[id.length-1].replace(/\//g,'');

  } else if ( (filmURL.includes("youtube")) || (filmURL.includes("youtu.be")) ) {

    filmHost = 'youtube';

    //url parse based on YouTubeGetID by @takien (http://takien.com)
    let id = filmURL.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

    if(id[2] !== undefined) {
      //aqui dizia 'no-useless-scape' por escapar o hífen final (/[^0-9a-z_\-]/i)
      filmId = id[2].split(/[^0-9a-z_-]/i);
      filmId = filmId[0];
    } else {
      filmId = id;
    }
  } else {
    filmHost = 'error';
    filmId = 'error';
  }

  const urlInfo = {
    filmHost,
    filmId
  }

  return urlInfo;
}

export default getUrlInfo;
