import React from 'react';
import { withFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import FilmForm from './FilmForm';

import getUrlInfo from '../../../../hooks/getUrlInfo';
import filmRepo from '../../../../repositories/filmes';

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
    categorias: Yup.array().of(Yup.string()),
    cidade: Yup.string().required('Este campo é obrigatório.'),
    direcao: Yup.string(),
    duracao: Yup.string(),
    outras: Yup.string(),
    sinopse: Yup.string(),
    titulo: Yup.string().required('Este campo é obrigatório.'),
    url: Yup.string().url('Tem algo errado com esta URL! Este campo aceita somente links do Vimeo ou YouTube.').required('Este campo é obrigatório.'),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {

    const urlInfo = getUrlInfo(values.url);

    if ((urlInfo.filmId === 'error') || (urlInfo.filmHost === 'error')) {
      setErrors({ url: 'Tem algo errado com esta URL! Este campo aceita somente links do Vimeo ou YouTube.'});
    } else if (false /*filme já está na db*/){
      setErrors({ url: 'Este filme já está em nossa base de dados.'})
    } else {
      const thisFilm = {
        ano: values.ano,
        categorias: values.categorias,
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
      filmRepo.newFilm(thisFilm);

      console.log(thisFilm);
      resetForm();
    }
    setSubmitting(false);
  }
})(FilmForm);


export default FilmFormik;
