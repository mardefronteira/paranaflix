import React from 'react';
import { Form, Field } from 'formik';
import { FormFieldWrapper, Input, LabelText } from '../../style.js';
import Button from '../../../../comp/Button';
import FormField from '../../FormField';

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
      value={values.titulo}
      error={errors.titulo}
      touched={touched.titulo}
    />
    <FormField
      label="Descrição"
      name="desc"
      as="textarea"
      value={values.desc}
    />
    <FormField
      type="color"
      label="Cor"
      name="cor"
      value={values.cor}
    />
  
  <Button type="submit" disabled={isSubmitting}>Cadastrar</Button>
  </Form>
)

export default CatForm;
