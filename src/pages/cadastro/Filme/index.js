import React from 'react';
import Base from '../../../comp/Base';
import { FinalNote, FormWrapper } from '../style.js';
import FilmFormik from './comp/FilmFormik';
import {Helmet} from 'react-helmet';



function CadastroFilme() {

  return (
    <>
      <Helmet>
        <title>Paranáflix - Novo filme</title>
      </Helmet>
    <Base>
      <FormWrapper>
        <h1>Informações sobre o filme:</h1>

        <FilmFormik />

        <FinalNote/>
      </FormWrapper>
    </Base>
    </>
  )
}

export default CadastroFilme;
