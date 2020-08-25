import React from 'react';
import { FooterBase } from './styles';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <Link to="/sobre">Sobre</Link>
      <a href="http://www.instagram.com/paranaflix" target="_blank">Instagram</a>
      <a href="https://apoia.se/paranaflix" target="_blank">Contribua com o projeto!</a>
    </FooterBase>
  );
}

export default Footer;
