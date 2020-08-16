import React from 'react';
import Base from '../../../comp/Base';
import { FinalNote, FormWrapper } from '../style.js';
import FilmFormik from './comp/FilmFormik'


function CadastroFilme() {

  return (
    <Base>
      <FormWrapper>
        <h1>Novo filme</h1>

        <FilmFormik />

        <FinalNote/>
      </FormWrapper>
    </Base>
  )
}

export default CadastroFilme;
