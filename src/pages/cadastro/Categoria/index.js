import React, { useState, useEffect } from 'react';
import Base from '../../../comp/Base';
import { Link } from 'react-router-dom';
import FormField from '../../../comp/FormField';
import { FinalNote } from '../style.js';
import Button from '../../../comp/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  //objeto a ser preenchido pelxs usuárixs
  const objInfoCategoria = {
    titulo: '',
    desc: '',
    cor: ''
  }

  const { handleChange, infos, clearForm } = useForm(objInfoCategoria);

  //array contendo todas as categorias
  const [categorias, setCategorias] = useState([]);

  /* useEffect: primeiro parâmetro é a função a ser executada,
  e o segundo é em que momento chamá-la.
  uma array vazia chama a função no onload*/
  useEffect(() => {

    const dbUrl = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://paranaflix.herokuapp.com/categorias';

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

        clearForm();
      }}
      >

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
                <li key={`${categoria.titulo}${categoria.id}`}>
                  <strong>{categoria.titulo}</strong><br />
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
