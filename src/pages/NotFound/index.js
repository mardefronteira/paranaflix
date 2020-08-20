import React from 'react';
import Base from '../../comp/Base';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';

const NFWrapper = styled.div`
  padding: 5vh 5vw;
  margin-bottom: 50vh;
`;


function NotFound() {
  return (
    <>
      <Helmet>
        <title>Paranáflix - Cadê?</title>
      </Helmet>
      <Base>
        <NFWrapper>
        <h1>Ih... Não achei essa página não!</h1>
        <p>Que tal <Link to="/">voltar ao início</Link>?</p>
      </NFWrapper>
      </Base>
    </>
  )
}

export default NotFound;
