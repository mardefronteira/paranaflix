import styled from 'styled-components';
import React from 'react';

export const GFormWrapper = styled.div`

  text-align: justify;
  display:flex;
  align-items: center;
  background-color: var(--grayLight);

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
