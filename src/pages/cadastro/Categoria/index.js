import React from 'react';
import Base from '../../../comp/Base';
import { Link } from 'react-router-dom';


function CadastroCategoria() {
  return (
    <Base>
      <h1>Adicione uma categoria</h1>

      <form>
        <label>
          Nome da categoria:
          <input type="text" />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to="/novo_video">
        Cadastre um novo vídeo
      </Link>

    </Base>
  )
}

export default CadastroCategoria;
