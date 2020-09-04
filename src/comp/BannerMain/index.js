import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer } from './styles';

export default function BannerMain({
  ano,
  categorias,
  cidade,
  equipe,
  exibicoes,
  direcao,
  outras,
  producao,
  sinopse,
  titulo,
  urlId,
  urlHost,
}) {

  return (
    <BannerMainContainer>
      <ContentAreaContainer>
        <ContentAreaContainer.Info>
          <ContentAreaContainer.Title to={`/filme/${urlId}`}>
            {titulo}
          </ContentAreaContainer.Title>
          <p>
            {cidade}, {ano}. Direção: {direcao}
          </p>
          <p>
           {sinopse}
          </p>
          {
            producao && <p>
             Empresa produtora: {producao}
           </p>
          }
          {
            equipe && <p>
             Equipe:<br/>{equipe}
           </p>
          }
          {
            exibicoes && <p>
             Outras informações:<br/>{exibicoes}
           </p>
          }
          {
            outras && <p>
             Outras informações:<br/>{outras}
           </p>
          }
          <p>
            {`• ${categorias.join(" • ")} •`}
          </p>
        </ContentAreaContainer.Info>

        <ContentAreaContainer.Video>
          <VideoIframeResponsive
            urlId={ urlId }
            urlHost={ urlHost }
          />
      </ContentAreaContainer.Video>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
