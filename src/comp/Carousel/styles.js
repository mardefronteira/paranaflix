import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  text-decoration:none;
  padding: 10px 15px;
  background: none;
  border: 3px solid;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;

  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  padding-left: 5vw;
  padding-right: 5vw;
  min-height: 197px;
  margin-bottom: 16px;
`;
