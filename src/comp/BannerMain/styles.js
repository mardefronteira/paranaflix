import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContentAreaContainer = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;

  @media (max-width: 800px) {
    padding-top: 5vh;
    flex-direction: column;
  }
`;

ContentAreaContainer.Info = styled.div`
  display: inline-block;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-bottom: 50px;
  text-align: justify;
  text-justify: inter-word;
  width: 40%;

  p {
    color: var(--grayMedium);
  }

  @media (max-width: 800px) {
    font-size: .9em;
    margin-bottom: 0;
    width: 100%;
  }
`;

ContentAreaContainer.Video = styled.div`
  width: 60%;
  display: inline-block;
  margin-left: 3vw;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    width: 90vw;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10vh;
  }
`;

ContentAreaContainer.Title = styled(Link)`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;
  text-decoration: none;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const BannerMainContainer = styled.section`
  min-height: 75vh;
  position: relative;
  color: #fff;
  padding-top: 10vh;


  @media (max-width: 800px) {
    padding-top: 0;
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 40%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: var(--grayBanner);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, var(--grayDark) 0%, transparent 100%);
  }
`;
