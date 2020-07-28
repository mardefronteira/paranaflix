//importar react
import React from 'react';
import Logo from '../../img/logo00.png';
import './Menu.css';
import Button from '../Button';

//criar função
function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Paraná Flix" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Adicione um filme
      </Button>
    </nav>
  );
}

export default Menu;
