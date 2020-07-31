import React, { useState, useEffect } from 'react';
import Base from '../../../comp/Base';
import { Link } from 'react-router-dom';
import FormField from '../../../comp/FormField';
import { FinalNote } from '../style.js';
import Button from '../../../comp/Button';


function CadastroCategoria() {

  //objeto a ser preenchido pelxs usuárixs
  const objInfoCategoria = {
    nome: '',
    desc: '',
    cor: ''
  }

  //array contendo todas as categorias
  const [categorias, setCategorias] = useState([]);

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

  /* useEffect: primeiro parâmetro é a função a ser executada,
  e o segundo é em que momento chamá-la.
  uma array vazia chama a função no onload*/
  useEffect(() => {

    const dbUrl = 'http://paranaflix.heroku.app/categorias';

    fetch(dbUrl)
    .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();

        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

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
        type="textarea"
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

        {categorias.length === 0 && <div>Carregando...</div>}

        <ul>
          {categorias.map((categoria, indice) => {
            return (
                <li key={`${categoria.nome}${categoria.id}`}>
                  <strong>{categoria.nome}</strong><br />
                  {categoria.desc}
                </li>
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
