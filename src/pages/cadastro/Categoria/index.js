import React, { useState, useEffect } from 'react';
import Base from '../../../comp/Base';
import { Link } from 'react-router-dom';
import { FinalNote } from '../style.js';
import CatFormik from './comp/CatFormik';


function CadastroCategoria() {

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

      <CatFormik />

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
