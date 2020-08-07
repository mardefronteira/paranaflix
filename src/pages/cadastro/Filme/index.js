import React, { useEffect, useState } from 'react';
import Base from '../../../comp/Base';
import { Link } from 'react-router-dom';
import { FinalNote } from '../style.js';
import FilmFormik from './comp/FilmFormik'


function CadastroFilme() {
  
  return (
    <Base>
      <h1>Novo filme</h1>

      <FilmFormik />

      <FinalNote>
        Faltou algo? &nbsp;
        <Link to="/nova_categoria">
        Crie uma nova categoria.
        </Link>
      </FinalNote>
    </Base>
  )
}

export default CadastroFilme;
