import config from '../config';

const CAT_URL = `${config.DB_URL}/categorias`;

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
};
