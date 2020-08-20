import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BannerMain from '../../comp/BannerMain';
import CatMenu from '../../comp/CatMenu';
import Base from '../../comp/Base';
import filmRepo from '../../repositories/filmes';
import { FinalNote } from './style.js'
import {Helmet} from 'react-helmet';

function Filme() {

  let { id } = useParams();
  const filmId = id;

  // console.log(id, filmId);

  const [filmes, setFilmes] = useState([]);

  /* useEffect: primeiro parâmetro é a função a ser executada,
  e o segundo é em que momento chamá-la.
  uma array vazia chama a função no onload*/
  useEffect(() => {
    filmRepo.getOne(filmId)
    .then((filmes) => {
      setFilmes(filmes)
    })
    .catch((err) => {
      console.log("Não foi possível acessar a database. Será que não sobrou uma vírgula no fim do arquivo da DB?", err);
    })
  }, []);

  return (
    <>
      <Helmet>
        <title>Paranáflix{filmes.length > 0 ? ` - ${filmes[0].titulo}` : ""}</title>
      </Helmet>
      <Base>
        {/*caso db não tenha retornado os dados, aparecer o texto*/}
        {filmes.length === 0 && (<div>Carregando...</div>)}
        {filmes.map((filme, i) => {
          return (
            <div key={`${filme.titulo}${filme.id}`}>
              <BannerMain
                titulo={filme.titulo}
                urlHost={filme.urlHost}
                urlId={filme.urlId}
                sinopse={filme.sinopse}
                ano={filme.ano}
                direcao={filme.direcao}
                cidade={filme.cidade}
                outras={filme.outras}
                categorias={filme.categorias}
              />
            </div>
          )}
        )}
        <FinalNote>
          Caso queira modificar informações ou retirar este filme da plataforma, contate-nos através do email <a href = "mailto: paranaflix@pm.me">paranaflix@pm.me</a>.
        </FinalNote>

       <CatMenu />
      </Base>
      </>
  );
}

export default Filme;
