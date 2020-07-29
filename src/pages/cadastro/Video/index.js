import React from 'react';
import Base from '../../../comp/Base';
import { Link } from 'react-router-dom';


function CadastroVideo() {
  return (
    <Base>
      <h1>Adicione um vídeo</h1>

      <Link to="/nova_categoria">
        Cadastre uma nova categoria
      </Link>

    </Base>
  )
}

export default CadastroVideo;
