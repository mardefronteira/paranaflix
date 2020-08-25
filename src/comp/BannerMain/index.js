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
  producao,
  equipe,
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
          { producao && <ContentAreaContainer.Description>
             Produção: {producao}
           </ContentAreaContainer.Description>
          }
          { equipe && <ContentAreaContainer.Description>
             Equipe:<br/>{equipe}
           </ContentAreaContainer.Description>
          }
          { outras && <ContentAreaContainer.Description>
             Outras informações:<br/>{outras}
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
