import React from 'react';
import { FooterBase } from './styles';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <Link to="/sobre">Sobre</Link>
      <a href="http://www.instagram.com/paranaflix" target="_blank">Instagram</a>
      <Link to="/apoie">Apoie o projeto</Link>
    </FooterBase>
  );
}

export default Footer;
