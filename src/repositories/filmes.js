import config from '../config';

const CAT_URL = `${config.DB_URL}/filmes`;

function newFilm(objInfo) {
  return fetch(`${CAT_URL}?_embed=filmes`,{
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(objInfo),
  })
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
};
