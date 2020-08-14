import React, { useEffect, useState } from 'react';
import BannerMain from '../../comp/BannerMain';
import Carousel from '../../comp/Carousel';
import Base from '../../comp/Base';
import catRepo from '../../repositories/categorias';

function Sobre() {


  return (
      <Base>
        <article>
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
      </article>
      </Base>
  );
}

export default Sobre;
