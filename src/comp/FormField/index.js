import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, LabelText, Input } from './style.js';

function FormField({ label, name, type, value, onChange }){

  const fieldId = `id_${name}`;

  /*
  condicional ternária:
  variável = condicional ? ifTrueThen : ifFalseThen
  nomeVar = seUm === outro ? valeX : valeY
  */
  const tagType = type === 'textarea' ? 'textarea' : 'input';

  const hasValue = typeof value === 'number' ? Boolean(value.toString().length) : Boolean(value.length);

  return (
    <FormFieldWrapper>
      <label>
        <Input
          as={ tagType }
          id={ fieldId }
          hasValue= { hasValue }
          name={ name }
          onChange={ onChange }
          type={ type }
          value={ value }
        />
      <LabelText
         htmlFor={ fieldId }>
         {label}
       </LabelText>
    </label>
  </FormFieldWrapper>
  )
}

FormField.defaultProps = {
  as: 'input',
  onChange: () => {},
  type: 'text',
  value: '',
};

FormField.propTypes = {
  as: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default FormField;
