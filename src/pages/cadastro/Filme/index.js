import React, { useEffect, useState } from 'react';
import Base from '../../../comp/Base';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../comp/FormField';
import { FinalNote } from '../style.js';
import Button from '../../../comp/Button';
import useForm from '../../../hooks/useForm';
import filmRepo from '../../../repositories/filmes';
import catRepo from '../../../repositories/categorias';

function CadastroFilme() {

  const history = useHistory();

  //objeto a ser preenchido pelxs usuárixs
  const filmInfo = {
    titulo: '',
    url: '',
    ano: '',
    cidade: '',
    desc: '',
    categoria: '',
    catId: '',
  }

  const { handleChange, infos } = useForm(filmInfo);

  //array contendo todos os filmes
  const [categorias, setCategorias] = useState([]);

  const catTitulos = categorias.map(({ titulo }) => titulo);

  useEffect(() => {
    catRepo.getAll()
    .then((categoriasDB) => {
      setCategorias(categoriasDB);
    });
  },[]);

  return (
    <Base>
      <h1>Novo filme</h1>

        <form onSubmit={(e) => {
          e.preventDefault();
          alert('Filme cadastrado!');

          const thisCat = categorias.find((categoria) => {
            return categoria.titulo === infos.categoria
          });

          filmRepo.newFilm({
            titulo: infos.titulo,
            url: infos.url,
            ano: infos.ano,
            cidade: infos.cidade,
            desc: infos.desc,
            categoriaId: thisCat.id
          })
          .then(()=> {
          history.push('/');
        });
      }}
      >

        <FormField
          label="Título"
          type="text"
          name="titulo"
          value={infos.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Link"
          type="text"
          name="url"
          value={infos.url}
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
          name="categoria"
          value={infos.categoria}
          onChange={handleChange}
          suggestions={catTitulos}
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

export default CadastroFilme;
