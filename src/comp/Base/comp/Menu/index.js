//importar react
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './img/logo00.png';
import { MenuWrapper, MenuAligner, LogoImg, ButtonLink, MenuLink } from './style.js';


//criar função
function Menu() {
  return (
    <MenuWrapper className="Menu">
      <MenuAligner align="left">
        <Link to="/">
          <LogoImg className="Logo" src={Logo} alt="Paraná Flix" />
        </Link>
      </MenuAligner>

      <MenuAligner align="right">
        <MenuLink to="/sobre">Sobre</MenuLink>
        <ButtonLink as={Link} className="ButtonLink" to="/novo_filme">
          Adicione um filme
        </ButtonLink>
      </MenuAligner>

    </MenuWrapper>
  );
}

export default Menu;
