import React from 'react';
import { Helmet } from 'react-helmet';
import Base from '../../../comp/Base';
import { GFormWrapper } from './style';

function CadastroGForm() {
  return (
    <>
      <Helmet>
        <title>Paranáflix - Adicione um filme</title>
      </Helmet>
      <Base>
        <GFormWrapper>
          <iframe title="Formulário de cadastro de filme" src="https://docs.google.com/forms/d/e/1FAIpQLSeOw1hmkp7YvAF1JA73HFRmel0YzdjHIQjjwKQpWhFKcjBmCw/viewform?embedded=true" width="3000" height="4000" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </GFormWrapper>
      </Base>
    </>
  );
}

export default CadastroGForm;
