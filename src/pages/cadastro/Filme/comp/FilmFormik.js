import { withFormik } from 'formik';
import * as Yup from 'yup';

import FilmForm from './FilmForm';

import getUrlInfo from '../../../../hooks/getUrlInfo';
import filmRepo from '../../../../repositories/filmes';
import catRepo from '../../../../repositories/categorias';


const FilmFormik = withFormik ({
  mapPropsToValues({
    ano,
    categorias,
    cidade,
    direcao,
    duracao,
    outras,
    sinopse,
    titulo,
    url,
  }) {
    return {
      ano: '',
      categorias: [],
      cidade: '',
      direcao: '',
      duracao: '',
      outras: '',
      sinopse: '',
      titulo: '',
      url: '',
    }
  },

  validationSchema: Yup.object().shape({
    ano: Yup.number('Nos últimos séculos, anos são números de 4 dígitos!').moreThan(1900, 'Este campo só aceita anos entre hoje e a invenção do cinema.').lessThan(2021, 'Este campo só aceita anos entre hoje e a invenção do cinema.').required('Este campo é obrigatório.'),
    categorias: Yup.array().of(Yup.string()).required('Escolha ao menos uma categoria.'),
    cidade: Yup.string().required('Este campo é obrigatório.'),
    direcao: Yup.string(),
    duracao: Yup.string().required('Este campo é obrigatório.'),
    outras: Yup.string(),
    sinopse: Yup.string().required('Este campo é obrigatório.'),
    titulo: Yup.string().required('Este campo é obrigatório.'),
    url: Yup.string().url('Tem algo errado com a URL! Este campo aceita somente links do Vimeo ou YouTube.').required('Este campo é obrigatório.'),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log("!");
    const urlInfo = getUrlInfo(values.url);

    //checar se a URL gerou uma id consistente
    if ((urlInfo.filmId === 'error') || (urlInfo.filmHost === 'error')) {
      setErrors({ url: 'Tem algo errado com a URL! Este campo aceita somente links do Vimeo ou YouTube.'});

    } else if (false){
      // checar se filme já está na database

      //este código deve estar fora da condicional, colei aqui só pra organizar, já que não está funcionando.
      // const isFilmInDB = fetch(`${filmRepo.FILM_URL}?urlId=${urlInfo.filmId}`)
      // .then(async (respostaDoServidor) => {
      //     if(respostaDoServidor.ok) {
      //       const resposta = await respostaDoServidor;
      //       console.log(resposta);
      //     //   if (resposta.length != 0) {
      //     //     return false
      //     //   } else {
      //     //     return true
      //     //   }
      //     // }
      //   }}).catch((err) => {console.log(err)})

      setErrors({ url: 'Este filme já está em nossa base de dados.'})

    } else { //se não houver erros

      // consultar os títulos das categorias e retornar a id de cada uma
      let thisCats = [];
      catRepo.getAll().then((categoriasDB) => {
        categoriasDB.map((categoriaDB) => {
          values.categorias.map((catTitulo) => {
            if (catTitulo === categoriaDB.titulo){
              thisCats.push(categoriaDB.id);
            
            }
          })
        })
      })

      // calcular a década e pegar a id de categoria correspondente
      let catId = 0;
      if (values.ano > 1979) {
        for (let i = 0; i < 5; i++) {
          if (values.ano > 1979 + i * 10) {
            catId = i + 2;
          }
        }
      } else {
        catId = 1;
      }

      // criar objeto com todos os dados do novo filme
      const thisFilm = {
        ano: values.ano,
        categoriaId: catId,
        categorias: thisCats,
        cidade: values.cidade,
        direcao: values.direcao,
        duracao: values.duracao,
        outras: values.outras,
        sinopse: values.sinopse,
        titulo: values.titulo,
        urlId: urlInfo.filmId,
        urlHost: urlInfo.filmHost,
        mostrar: true
      }

      // adicionar filme à database
      filmRepo.newFilm(thisFilm);

      console.log(thisFilm);

      // resetar formulário
      resetForm();
    }

    setSubmitting(false);
  }
})(FilmForm);


export default FilmFormik;
