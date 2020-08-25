import styled from 'styled-components';
import React from 'react';

export const SobreWrapper = styled.div`
  padding: 5vh 15vw;
  width: 80vw;
  text-align: justify;

  p, a {
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
  color: ${props => props.cor};
  font-variant: small-caps;
`;
