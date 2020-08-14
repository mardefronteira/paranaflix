import React from 'react';
import { Form, Field } from 'formik';

import Button from '../../../../comp/Button';
import FormField from '../../FormField';

import { Input } from '../../style.js';


const CatForm = ({
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
      label="Descrição"
      name="desc"
    >
      <Input
        as={Field}
        name="desc"
        hasValue = {values.desc !== '' ? true : false}
      />
    </FormField>

    <FormField
      label="Cor"
      name="cor"
    >
      <Input
        as={Field}
        type="color"
        name="cor"
      />
    </FormField>

  <Button type="submit" disabled={isSubmitting}>Cadastrar</Button>
  </Form>
)

export default CatForm;
