import React from 'react';
import { Helmet } from 'react-helmet';
import Base from '../../../comp/Base';
import { FinalNote, FormWrapper } from '../style';
import FilmFormik from './comp/FilmFormik';

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

          <FinalNote />
        </FormWrapper>
      </Base>
    </>
  )
}

export default CadastroFilme;
