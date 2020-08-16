import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  grid-auto-rows: minmax(100px, auto);
  align-items:center;

  @media(max-width: 800px){
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: auto;
  }
`;

export const GridPosition = styled.div`
  /* grid-column = {column};
  grid-row = {row}; */
`;

export const ContentWrapper = styled.main`
  padding: 5vh 3vw;
`;

export const Title = styled.div`
  margin-bottom: 10vh;
`;
