import styled from 'styled-components';

export const GFormWrapper = styled.div`
  align-items: center;
  background-color: var(--grayLight);
  display:flex;
  text-align: justify;

  a, p {
    font-size: 1.2rem;
  }

  div {
    margin-top:2rem;
    margin-bottom: 5rem;
  }

  h2 {
    font-size: 1.5rem;
  }
`;

export const Subtitulo = styled.h2`
  color: ${(props) => props.cor};
  font-variant: small-caps;
`;
