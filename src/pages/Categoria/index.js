import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BannerMain from '../../comp/BannerMain';
import Base from '../../comp/Base';
import filmRepo from '../../repositories/filmes';

function Filme() {

  let { id } = useParams();
  const filmId = id;

  console.log(id, filmId);

  const [filmInfo, setFilmInfo] = useState({});

  /* useEffect: primeiro parâmetro é a função a ser executada,
  e o segundo é em que momento chamá-la.
  uma array vazia chama a função no onload*/
  // useEffect(() => {
  //   filmRepo.getFilm(filmId)
  //   .then((thisFilmInfo) => {
  //     setFilmInfo(filmId)
  //   })
  //   .catch((err) => {
  //     console.log("Não foi possível acessar a database. Será que não sobrou uma vírgula no fim do arquivo da DB?", err);
  //   })
  // }, []);

  return (
      <Base>
        {/*caso db não tenha retornado os dados, aparecer o texto*/}
        {filmInfo.length === 0 && (<div>Carregando...</div>)}

        <div key={`${filmInfo.titulo}${filmInfo.id}`}>
            <BannerMain
              filmTitle="{filmInfo.titulo}"
              urlHost="youtube"
              urlId={filmId}
              filmDesc="{filmInfo.desc}"
            />
        </div>
      </Base>
  );
}

export default Filme;
