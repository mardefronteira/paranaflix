import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer } from './styles';

export default function BannerMain({
  filmTitle,
  filmDesc,
  urlId,
  urlHost
}) {

  const image = urlHost === 'youtube' ?
  `https://img.youtube.com/vi/${urlId}/hqdefault.jpg`
  : "https://i.ytimg.com/vi/zJTk-TtPlhY/maxresdefault.jpg";

  return (
    <BannerMainContainer backgroundImage={image}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {filmTitle}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {filmDesc}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive
            urlId={ urlId }
            urlHost={ urlHost }
          />
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
