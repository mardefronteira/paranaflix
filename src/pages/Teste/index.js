import React, { useEffect, useState } from 'react';
import BannerMain from '../../comp/BannerMain';
import Carousel from '../../comp/Carousel';
import Base from '../../comp/Base';
import CatMenu from '../../comp/CatMenu';
import filmRepo from '../../repositories/filmes';

function Teste() {

  const [filmes, setFilmes] = useState([]);

  /* useEffect: primeiro parâmetro é a função a ser executada,
  e o segundo é em que momento chamá-la.
  uma array vazia chama a função no onload*/
  useEffect(() => {
    filmRepo.getOne("jGWoXPxi3Fs")
    .then((filmes) => {
      setFilmes(filmes)
    })
    .catch((err) => {
      console.log("Não foi possível acessar a database. Será que não sobrou uma vírgula no fim do arquivo da DB?", err);
    })
  }, []);

  return (
      <Base>

        {/*caso db não tenha retornado os dados, aparecer o texto*/}
        {filmes.length === 0 && (<div>Carregando...</div>)}

        {filmes.map((filme, i) => {
          return (
              <>
              <div key={`${filme.titulo}${filme.id}`}>
                <BannerMain
                  titulo={filme.titulo}
                  urlHost={filme.urlHost}
                  urlId={filme.urlId}
                  sinopse={filme.sinopse}
                  ano={filme.ano}
                  direcao={filme.direcao}
                  cidade={filme.cidade}
                />
              </div>
              </>
            );
        })}


      </Base>
  );
}

export default Teste;
