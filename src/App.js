import React from 'react';
import dadosIniciais from './data/dados_iniciais.json';
import Menu from './comp/Menu';
import BannerMain from './comp/BannerMain';
import Carousel from './comp/Carousel';
import Footer from './comp/Footer';

function App() {
  return (
    <div>
      <Menu />

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

      <Footer />
    </div>
  );
}

export default App;
