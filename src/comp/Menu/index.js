//importar react
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo00.png';
import {MenuWrapper, LogoImg, ButtonLink} from './style.js';


//criar função
function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImg className="Logo" src={Logo} alt="Paraná Flix" />
      </Link>

      <ButtonLink as={Link} className="ButtonLink" to="/novo_filme">
        Adicione um filme
      </ButtonLink>
    </MenuWrapper>
  );
}

export default Menu;
