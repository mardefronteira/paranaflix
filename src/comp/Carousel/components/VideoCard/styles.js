import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Desc = styled.div`
text-decoration: none;
overflow: hidden;
cursor: pointer;
color: white;
flex: 0 0 298px;
width: 298px;
background: none;
position: relative;
padding: 0px;
margin: 1em 1em;
opacity:0;

transition: opacity 1s;

@media(max-width: 800px){
  opacity: 1;
  padding-bottom: 5vh;
}
`;

export const VideoCardContainer = styled(Link)`

  border: 1px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
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
  grid-row: 1;s: flex-end;
  padding: 16px;

  transition: opacity 1s;
  &:hover,
  &:focus {
    opacity: .3;
  }

  /* quando o próximo elemento é span, está focado,
  e se a input anterior a ele não é tipo color */
  &:hover + div {
    opacity: 1;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
