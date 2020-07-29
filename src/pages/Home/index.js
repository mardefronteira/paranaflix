
import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../comp/BannerMain';
import Carousel from '../../comp/Carousel';
import Base from '../../comp/Base';

function Home() {
  return (
    <div>
      <Base>

        <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Direção e roteiro: Nathália Tereza"}/>

        <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
        />

        <Carousel
          category={dadosIniciais.categorias[1]}
        />

        <Carousel
          category={dadosIniciais.categorias[2]}
        />

      </Base>
    </div>
  );
}

export default Home;
