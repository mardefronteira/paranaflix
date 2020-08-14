import React from 'react';
import Base from '../../../comp/Base';
import { Link } from 'react-router-dom';
import { FinalNote } from '../style.js';
import FilmFormik from './comp/FilmFormik'


function CadastroFilme() {

  return (
    <Base>
      <h1>Novo filme</h1>

      <FilmFormik />

      <FinalNote/>

    </Base>
  )
}

export default CadastroFilme;
