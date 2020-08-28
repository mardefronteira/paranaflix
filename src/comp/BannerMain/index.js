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
          <p>
            {cidade}, {ano}. Direção: {direcao}
          </p>
          <p>
           {sinopse}
          </p>
          { producao && <p>
             Empresa produtora: {producao}
           </p>
          }
          { equipe && <p>
             Equipe:<br/>{equipe}
           </p>
          }
          { outras && <p>
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
