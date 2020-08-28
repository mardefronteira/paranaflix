import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Desc = styled(Link)`
  text-decoration: none;
  text-align: justify;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 350px;
  background: none;
  position: relative;
  padding: 0;
  margin: 1em 1em;

  p {
    max-width: 298px;
  }

  @media(max-width: 800px){
      padding-bottom: 5vh;
  }
`;

export const VideoCardContainer = styled.div`

  border: 1px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  flex: 0 0 298px;
  width: 298px;
  max-width: 100%;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-item grid-column: 1;
  grid-row: 1;s: flex-start;
  padding: 16px;
`;
