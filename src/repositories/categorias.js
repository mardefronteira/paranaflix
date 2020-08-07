import config from '../config';

const CAT_URL = `${config.DB_URL}/categorias`;

function newCat(objInfo) {
  return fetch(`${CAT_URL}`,{
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(objInfo),
  })
    .then(async (respostaDoServidor) => {
        if(respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          console.log('[newCat] ',resposta);
          return resposta;
        }

        throw new Error('Deu ruim nos dados :(');
      });
}

function getAllWithVideos() {
  return fetch(`${CAT_URL}?_embed=filmes`)
    .then(async (respostaDoServidor) => {
        if(respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }

        throw new Error('Deu ruim nos dados :(');
      });
}

function getAll() {
  return fetch(`${CAT_URL}`)
    .then(async (respostaDoServidor) => {
        if(respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }

        throw new Error('Deu ruim nos dados :(');
      });
}

export default {
  getAllWithVideos,
  getAll,
  newCat
};
