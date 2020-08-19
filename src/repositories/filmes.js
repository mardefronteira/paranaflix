import config from '../config';

const FILM_URL = `${config.DB_URL}/filmes`;

function newFilm(objInfo) {

    fetch(`${FILM_URL}?urlId=${objInfo.urlId}`)
    .then(async (respostaDoServidor) => {
        if(respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }
    }).then((resposta) => {
          if (resposta.length === 0) {
            return fetch(`${FILM_URL}`,{
              method: 'POST',
              headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify(objInfo),
            }).then(async (respostaDoServidor) => {
              if(respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json();
                console.log("filme adicionado! >> ",resposta);
              }
            }).catch((err)=>{
              console.log(err)
            });
          } else {
            alert("Este filme já está em nossa database!")
          }
    }).catch((err) => {
      console.log(err);
    })
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

function getHighlight() {
  return fetch(`${FILM_URL}?destaque=true`)
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
  getHighlight
};
