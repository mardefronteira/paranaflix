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
          return resposta;
        }

        throw new Error('Deu ruim nos dados :(');
      });
}

function addFilmToCat(filmId, catIdArray) {

  // para cada categoria na lista
  catIdArray.map((catId) => {
    console.log("buscando categoria ",catId," na DB")
    // buscar dados da categoria na db
    fetch(`${CAT_URL}/${catId}`)
    .then(async (respostaDoServidor) => {
          if(respostaDoServidor.ok) {
            const resposta = await respostaDoServidor.json();
            return resposta;
          }
          throw new Error('Deu ruim nos dados :(');
    }).then((resposta) => {
      // lista com os filmes já na db
      let catFilmes = resposta.filmes;
      // adicionar novo filme
      catFilmes.push(filmId);

      console.log("lista de filmes na categoria >> ",catFilmes); //ok

      return fetch(`${CAT_URL}/${catId}`,{
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        filmes: catFilmes
      }),
      })
        .then(async (respostaDoServidor) => {
            if(respostaDoServidor.ok) {
              const resposta = await respostaDoServidor.json();
              console.log("categoria atualizada! >> ",resposta);
            }
          });

    }).catch((err) => {console.log(err);})
    return null;
  })
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

function getCatWithFilms(catId) {
  return fetch(`${CAT_URL}?id=${catId}&_embed=filmes`)
    .then(async (respostaDoServidor) => {
        if(respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta[0];
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

function getCat(catId) {
  // buscar dados da categoria na db
  return fetch(`${CAT_URL}/${catId}`)
  .then(async (respostaDoServidor) => {
        if(respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();

          return resposta;
        }
        throw new Error('Deu ruim nos dados :(');
  }).catch((err)=>{console.log(err)});
}

export default {
  getAllWithVideos,
  getAll,
  newCat,
  addFilmToCat,
  getCat,
  getCatWithFilms,
};
