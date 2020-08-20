import React, { useEffect, useState } from 'react';
import BannerMain from '../../comp/BannerMain';
import Carousel from '../../comp/Carousel';
import Base from '../../comp/Base';
import CatMenu from '../../comp/CatMenu';
import catRepo from '../../repositories/categorias';
import filmRepo from '../../repositories/filmes';
import {Helmet} from 'react-helmet';

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

  const [destaque, setDestaque] = useState([])

  useEffect(() => {
    filmRepo.getHighlight()
    .then((filmeDestaque) => {
    setDestaque(filmeDestaque);

    }).catch((err) => {
      console.log("Não foi possível acessar a database. Será que não sobrou uma vírgula no fim do arquivo da DB?", err);
    })
  }, []);

  return (
    <>
      <Helmet>
        <title>Paranáflix</title>
      </Helmet>
      <Base>
        {/*destaque.length === 0 && console.log("chegou esse destaque: ",destaque)*/}

        {destaque.map((filme) => {
          return (
            <>
              <BannerMain key="main_banner_home"
                titulo={filme.titulo}
                urlHost={filme.urlHost}
                urlId={filme.urlId}
                sinopse={filme.sinopse}
                ano={filme.ano}
                direcao={filme.direcao}
                cidade={filme.cidade}
                categorias={filme.categorias}
              />
            <CatMenu/>
            </>
          );
        })}

        {/*caso db não tenha retornado os dados, aparecer o texto*/}
        {categorias.length === 0 && (<div>Carregando...</div>)}

        {categorias.map((categoria, i) => {
          if (i < 6) {
             let index = 5-i;
                return (
                  <Carousel
                    key={`${categorias[index].titulo}${categorias[index].id}`}
                    category={categorias[index]}
                  />
                )

          }
          return null;
        })}


      </Base>
      </>
  );
}

export default Home;
