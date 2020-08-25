import React, { useEffect, useState } from 'react';
import BannerMain from '../../comp/BannerMain';
import Carousel from '../../comp/Carousel';
import Base from '../../comp/Base';
import CatMenu from '../../comp/CatMenu';
import catRepo from '../../repositories/categorias';
import filmRepo from '../../repositories/filmes';
import {Helmet} from 'react-helmet';
import { Loading } from './style.js';

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
                producao={filme.producao}
                equipe={filme.equipe}
                outras={filme.outras}
                cidade={filme.cidade}
                categorias={filme.categorias}
              />
            <CatMenu/>
            </>
          );
        })}

        {/*caso db não tenha retornado os dados, aparecer o texto*/}
        {categorias.length === 0 && (<Loading><h1>O acervo está carregando, aguarde um instante...</h1>
        
            <p>O Paranáflix é uma plataforma colaborativa criada para difundir produções cinematográficas produzidas em todo o estado do Paraná.</p>
            <p>Buscamos construir uma forma livre, popular e coletiva para dar visibilidade às produções do estado, e oferecer o acesso gratuito de filmes para quem busca informações culturais.</p>
            <p>Este gesto surge como sintoma da insuficiência de políticas públicas consistentes, ativas, e longevas de distribuição, produção, exibição e preservação do cinema no Paraná, e de modo algum pretende trazer soluções paliativas a estes problemas de imenso interesse público.</p>
            <p>Vamos fortalecer o cinema brasileiro!</p>

          </Loading>)}

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
