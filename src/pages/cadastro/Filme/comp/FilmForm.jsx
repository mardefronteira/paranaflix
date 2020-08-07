import React from 'react';
import { Form, Field } from 'formik';
import CatOptions from './CatOptions';

import { FormFieldWrapper, LabelText, Input } from '../../style.js';
import FormField from '../../FormField';
import Button from '../../../../comp/Button';

const FilmForm = ({
  values,
  errors,
  touched,
  isSubmitting,
}) => (
  <Form>
    <FormField
      label="Título"
      name="titulo"
      value={values.titulo}
      error={errors.titulo}
      touched={touched.titulo}
    />
    <FormField
      label="Outras informações"
      name="outras"
      as="textarea"
      value={values.outras}
    />

    <FormField
      label="Sinopse"
      name="sinopse"
      as="textarea"
      value={values.sinopse}
    />
    <FormField
      label="Cidade"
      name="cidade"
      value={values.cidade}
    />
    <FormField
      label="Direção"
      name="direcao"
      value={values.direcao}
    />
    <FormField
      label="Duração"
      name="duracao"
      value={values.duracao}
    />
    <FormField
      label="URL"
      name="url"
      type="url"
      value={values.url}
      error={errors.url}
      touched={touched.url}
    />
    <FormField
      label="Ano"
      name="ano"
      type="number"
      value={values.ano}
      error={errors.ano}
      touched={touched.ano}
    />

    <FormField
      label="Categorias"
      name="categorias"
      as="select"
      value={values.categorias}
      error={errors.categorias}
      touched={touched.categorias}
    >
      <CatOptions />
    </FormField>
  <Button type="submit" disabled={isSubmitting}>Cadastrar</Button>
  </Form>
)

export default FilmForm;
