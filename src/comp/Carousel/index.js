import React from 'react';
import { VideoCardGroupContainer, Title } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  category,
}) {
  const catId = category.id;
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const filmes = category.filmes;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ borderColor: categoryColor || 'red' }} to={`/categoria/${catId}`}>
            {categoryTitle}
          </Title>
        </>
      )}
      <Slider>
        {filmes.map((filme, index) => {

          return (
            <SliderItem key={filme.titulo}>
              <VideoCard
                titulo={filme.titulo}
                sinopse={filme.sinopse}
                ano={filme.ano}
                id={filme.urlId}
                host={filme.urlHost}
                duracao={filme.duracao}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
