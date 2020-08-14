import React, { useEffect, useState } from 'react';
import BannerMain from '../../comp/BannerMain';
import Carousel from '../../comp/Carousel';
import Base from '../../comp/Base';
import catRepo from '../../repositories/categorias';

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  /* useEffect: primeiro parâmetro é a função a ser executada,
  e o segundo é em que momento chamá-la.
  uma array vazia chama a função no onload*/
  useEffect(() => {
    catRepo.getAllWithVideos()
    .then((categoriasComVideos) => {
      setDadosIniciais(categoriasComVideos)
    })
    .catch((err) => {
      console.log("Não foi possível acessar a database. Será que não sobrou uma vírgula no fim do arquivo da DB?", err);
    })
  }, []);

  return (
      <Base>

        {/*caso db não tenha retornado os dados, aparecer o texto*/}
        {dadosIniciais.length === 0 && (<div>Carregando...</div>)}

        {dadosIniciais.map((categoria, i) => {
          if (i === 0) {
            return (
              <div key={`${categoria.titulo}${categoria.id}`}>
                <BannerMain
                  filmTitle={dadosIniciais[0].filmes[0].titulo}
                  urlHost={dadosIniciais[0].filmes[0].urlHost}
                  urlId={dadosIniciais[0].filmes[0].urlId}
                  filmDesc={dadosIniciais[0].filmes[0].desc}
                />
                <Carousel
                  //ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            );
          }
          return (
            <Carousel
              key={`${categoria.titulo}${categoria.id}`}
              category={categoria}
            />
          );
        })}


      </Base>
  );
}

export default Home;
