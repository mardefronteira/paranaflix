import React, { useEffect, useState } from 'react';
import BannerMain from '../../comp/BannerMain';
import Carousel from '../../comp/Carousel';
import Base from '../../comp/Base';
import CatMenu from '../../comp/CatMenu';
import catRepo from '../../repositories/categorias';

function Home() {

  const [categorias, setCategorias] = useState([]);

  /* useEffect: primeiro parâmetro é a função a ser executada,
  e o segundo é em que momento chamá-la.
  uma array vazia chama a função no onload*/
  useEffect(() => {
    catRepo.getAllWithVideos()
    .then((categoriasComVideos) => {
      setCategorias(categoriasComVideos)
    })
    .catch((err) => {
      console.log("Não foi possível acessar a database. Será que não sobrou uma vírgula no fim do arquivo da DB?", err);
    })
  }, []);

  return (
      <Base>

        {/*caso db não tenha retornado os dados, aparecer o texto*/}
        {categorias.length === 0 && (<div>Carregando...</div>)}

        {categorias.map((categoria, i) => {
          if (i === 0) {
            return (
              <>
              <div key={`${categoria.titulo}${categoria.id}`}>
                <BannerMain
                  titulo={categorias[0].filmes[0].titulo}
                  urlHost={categorias[0].filmes[0].urlHost}
                  urlId={categorias[0].filmes[0].urlId}
                  sinopse={categorias[0].filmes[0].sinopse}
                  ano={categorias[0].filmes[0].ano}
                  direcao={categorias[0].filmes[0].direcao}
                  cidade={categorias[0].filmes[0].cidade}
                />
              </div>
              <CatMenu/>
              </>
            );
          }
          if (i < 7) {
             let index = 6-i;
             if(categorias[index].filmes.length > 0){
                return (
                  <Carousel
                    key={`${categorias[index].titulo}${categorias[index].id}`}
                    category={categorias[index]}
                  />
                )
              }
          }
        })}


      </Base>
  );
}

export default Home;
