import React, { useState } from 'react';
import Base from '../../../comp/Base';
import { Link } from 'react-router-dom';
import FormField from '../../../comp/FormField';
import { FinalNote } from '../style.js';
import Button from '../../../comp/Button';


function CadastroVideo() {

  // //array contendo todas as categorias
  const [filmes, setFilmes] = useState([]);

  //objeto a ser preenchido pelxs usuárixs
  const objInfoFilme = {
    titulo: '',
    ano: '',
    cidade: '',
    desc: '',
    categorias: []
  }

  /*state que manuseia o objeto acima*/
  const [infos, setInfos] = useState(objInfoFilme);

  /*função para atribuir o input ao objeto*/
  function setInfo(chave, valor) {
    setInfos({
        ...infos,
        [chave]: valor, //'chave' está atribuída como valor dinâmico. ela nomeia outra variável.
    });
  }

  //função genérica para atribuir o valor do input a cada campo
  function handleChange(e){

    // const { getAttribute, value } = e.target;
    setInfo(
      e.target.getAttribute('name'),
      e.target.value
    );
  }

  return (
    <Base>
      <h1>Novo filme</h1>

        <form onSubmit={(e) => {
          e.preventDefault();

          /*função para adicionar o novo filme à array de filmes*/
          setFilmes([
            ...filmes,
            infos
          ]);
        }}>

        <FormField
          label="Título"
          type="text"
          name="titulo"
          value={infos.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Ano"
          type="number"
          name="ano"
          value={infos.ano}
          onChange={handleChange}
        />

        <FormField
          label="Cidade"
          type="text"
          name="cidade"
          value={infos.cidade}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="desc"
          value={infos.desc}
          onChange={handleChange}
        />

        <FormField
          label="Categorias"
          type="textarea"
          name="categorias"
          value={infos.categorias}
          onChange={handleChange}
        />

      <Button>
        Cadastrar
      </Button>
    </form>

      <FinalNote>
        Faltou algo? &nbsp;
        <Link to="/nova_categoria">
        Crie uma nova categoria.
        </Link>
      </FinalNote>
    </Base>
  )
}

export default CadastroVideo;
