import React from 'react';
import Base from '../../../comp/Base';
import { SobreWrapper, Subtitulo } from './style.js';
import { Helmet } from 'react-helmet';


function CadastroGForm() {


  return (
    <>
      <Helmet>
        <title>Paranáflix - Adicione um filme</title>
      </Helmet>
      <Base>
        <SobreWrapper>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeOw1hmkp7YvAF1JA73HFRmel0YzdjHIQjjwKQpWhFKcjBmCw/viewform?embedded=true" width="1000" height="4000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </SobreWrapper>
      </Base>
      </>
  );
}

export default CadastroGForm;
