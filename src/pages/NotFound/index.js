
import React from 'react';
import Base from '../../comp/Base';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <Base>
        <h1>Ih... Não achei essa página não!</h1>
        <p>Que tal <Link to="/">voltar ao início</Link>?</p>
      </Base>
    </>
  )
}

export default NotFound;
