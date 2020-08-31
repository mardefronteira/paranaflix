import React from 'react';
import Base from '../../../comp/Base';
import { GFormWrapper, Subtitulo } from './style.js';
import { Helmet } from 'react-helmet';


function CadastroGForm() {


  return (
    <>
      <Helmet>
        <title>Paranáflix - Adicione um filme</title>
      </Helmet>
      <Base>
        <GFormWrapper>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeOw1hmkp7YvAF1JA73HFRmel0YzdjHIQjjwKQpWhFKcjBmCw/viewform?embedded=true" width="3000" height="3800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </GFormWrapper>
      </Base>
      </>
  );
}

export default CadastroGForm;
