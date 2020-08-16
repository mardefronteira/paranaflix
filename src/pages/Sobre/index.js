import React from 'react';
import Base from '../../comp/Base';
import { SobreWrapper } from './style.js'

function Sobre() {


  return (
      <Base>
        <SobreWrapper>
          <div>
            <h3>SOBRE</h3>
            <p>Textinho bem lindo sobre o projeto.</p>
          </div>
          <div>
            <h3>NÓIS</h3>
            <p>Outro sobre nóis</p>
          </div>
          <div>
            <h3>$$$</h3>
            <p>PAGA NÓIS PFVR</p>
          </div>
          <div>
            <h3>LIGANÓIS</h3>
            <p>Contatinho no esquema</p>
          </div>
          <div>
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
        </div>
      </SobreWrapper>
      </Base>
  );
}

export default Sobre;
