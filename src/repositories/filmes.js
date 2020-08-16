import config from '../config';

const FILM_URL = `${config.DB_URL}/filmes`;

function newFilm(objInfo) {
  return fetch(`${FILM_URL}`,{
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(objInfo),
  })
    .then(async (respostaDoServidor) => {
        if(respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          console.log("filme adicionado! >> ",resposta);
        }

        // throw new Error('Deu ruim nos dados :(');
      });
}

function getOne(filmId) {
  return fetch(`${FILM_URL}?urlId=${filmId}`)
    .then(async (respostaDoServidor) => {
        if(respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }

        throw new Error('Deu ruim nos dados :(');
      });
}

function getAll() {
  return fetch(`${FILM_URL}`)
    .then(async (respostaDoServidor) => {
        if(respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }

        throw new Error('Deu ruim nos dados :(');
      });
}


export default {
  newFilm,
  getAll,
  getOne,
};
