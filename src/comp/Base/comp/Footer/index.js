import React from 'react';
import { FooterBase } from './styles';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <Link to="/sobre">Sobre</Link>
      <a href="http://www.instagram.com/paranaflix" target="_blank">Instagram</a>
      <a href="http://www.apoia.se" target="_blank">Apoia.se</a>
    </FooterBase>
  );
}

export default Footer;
