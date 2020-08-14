import React from 'react';
import { Form, Field, FieldArray, ErrorMessage } from 'formik';
import CatOptions from './CatOptions';
import { Link } from 'react-router-dom';

import { Input, CatButton, CatButtonX, Select } from '../../style.js';
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
    >
      <Input
        as={Field}
        name="titulo"
        hasValue = {values.titulo !== '' ? true : false}
      />
    </FormField>

    <FormField
      label="Ano"
      name="ano"
      >
      <Input
        type="number"
        as={Field}
        name="ano"
        hasValue = {values.ano !== '' ? true : false}
        />
    </FormField>

    <FormField
      label="Duração"
      name="duracao"
      >
      <Input
        as={Field}
        name="duracao"
        hasValue = {values.duracao !== '' ? true : false}
        />
    </FormField>

    <FormField
      label="Cidade"
      name="cidade"
    >
      <Input
        as={Field}
        name="cidade"
        hasValue = {values.cidade !== '' ? true : false}
      />
    </FormField>

    <FormField
      label="Direção"
      name="direcao"
    >
      <Input
        as={Field}
        name="direcao"
        hasValue = {values.direcao !== '' ? true : false}
      />
    </FormField>

    <FormField
      label="URL"
      name="url"
      >
      <Input
        type="url"
        as={Field}
        name="url"
        hasValue = {values.url !== '' ? true : false}
        />
    </FormField>

    <FormField
      label="Sinopse"
      name="sinopse"
      >
      <Input
        as={Field}
        name="sinopse"
        hasValue = {values.sinopse !== '' ? true : false}
        />
    </FormField>

    <FormField
      label="Outras informações (equipe, prêmios, etc)"
      name="outras"
      >
      <Input
        as={Field}
        name="outras"
        hasValue = {values.outras !== '' ? true : false}
        />
    </FormField>

    <FieldArray name="categorias">{({ push, remove }) => (
          <div>
            <span
              htmlFor="categorias">
              <p id="catLabel">Categorias:</p>
              <p>{values.categorias.map((thisCat) => {
                  return(
                    <CatButton>{thisCat}
                      <CatButtonX value={thisCat} id={thisCat} as="button" type="button" onClick={() => {
                      let index = values.categorias.indexOf(thisCat);
                      remove(index);
                    }}>x</CatButtonX>
                  </CatButton>
                )})}</p>
              <ErrorMessage name="categorias">{(msg) => <div><br/>{msg}</div>}</ErrorMessage>
            </span>
              <Select  id="categoria">
                <CatOptions/>
              </Select>

              <CatButton
                type="button"
                onClick={() => {
                  let thisVal = document.getElementById('categoria').value;
                  let isInList = values.categorias.includes(thisVal);

                  if (!isInList) {
                    push(thisVal);
                  }
                }}
                >
                adicionar
              </CatButton>
              <p>
              Faltou algo? &nbsp;
              <Link to="/nova_categoria">
              Crie uma nova categoria.
              </Link>
            </p>
          </div>
        )}
      </FieldArray>
      <br/><br/>
      <Button type="submit" disabled={isSubmitting}>Cadastrar</Button>
  </Form>
)

// <CatOptions />

export default FilmForm;
