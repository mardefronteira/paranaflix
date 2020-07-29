import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <footer>
        Projeto desenvolvido na
        {' '}
          <a href="https://www.alura.com.br/" target="_blank" rel="external noopener noreferrer">
            Imersão React da Alura
          </a>
        {' '}
        por
        {' '}
        <a href="http://marcela.xyz/" target="_blank" rel="author noopener noreferrer">
          Marcela Mancino
        </a>.
      </footer>
    </FooterBase>
  );
}

export default Footer;
