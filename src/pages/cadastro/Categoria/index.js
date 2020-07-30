import React, { useState } from 'react';
import Base from '../../../comp/Base';
import { Link } from 'react-router-dom';
import FormField from '../../../comp/FormField';
import { FinalNote } from '../style.js';
import Button from '../../../comp/Button';


function CadastroCategoria() {

  //array contendo todas as categorias
  const [categorias, setCategorias] = useState([]);

  //objeto a ser preenchido pelxs usuárixs
  const objInfoCategoria = {
    nome: '',
    desc: '',
    cor: ''
  }

  /*state que manuseia o objeto acima*/
  const [infos, setInfos] = useState(objInfoCategoria);

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
      <h1>Nova categoria</h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        /*função para adicionar a nova categoria à array de categorias*/
        setCategorias([
          ...categorias,
          infos
        ]);
      }}>

      <FormField
        label="Nome"
        type="text"
        name="nome"
        value={infos.nome}
        onChange={handleChange}
        required
      />

      <FormField
        label="Descrição"
        type="text"
        name="desc"
        value={infos.desc}
        onChange={handleChange}
      />

      <FormField
        label="Cor"
        type="color"
        name="cor"
        value={infos.cor}
        onChange={handleChange}
      />

          <Button>
            Cadastrar
          </Button>

        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <>
              <li key={`${categoria.nome}${indice}`}>
                <strong>{categoria.nome}</strong><br />{categoria.desc}
              </li>
              <br />
              </>
            )
          })}
        </ul>

        <FinalNote>
          <Link to="/novo_filme">
            Continuar cadastrando filme.
          </Link>
        </FinalNote>

    </Base>
  )
}

export default CadastroCategoria;
