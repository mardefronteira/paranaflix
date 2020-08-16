import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer } from './styles';

export default function BannerMain({
  titulo,
  sinopse,
  urlId,
  urlHost,
  direcao,
  cidade,
  ano,
  outras,
  categorias
}) {

  return (
    <BannerMainContainer>
      <ContentAreaContainer>
        <ContentAreaContainer.Info>
          <ContentAreaContainer.Title to={`/filme/${urlId}`}>
            {titulo}
          </ContentAreaContainer.Title>
          <ContentAreaContainer.Description>
            {cidade}, {ano}. Direção: {direcao}
          </ContentAreaContainer.Description>
          <ContentAreaContainer.Description>
           {sinopse}
          </ContentAreaContainer.Description>
          { outras && <ContentAreaContainer.Description>
             {outras}
           </ContentAreaContainer.Description>
          }
          <ContentAreaContainer.Description>
          {`• ${categorias.join(" • ")} •`}
        </ContentAreaContainer.Description>
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
