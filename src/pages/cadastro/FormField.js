import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, LabelText, Input } from './style.js';
import { Field } from 'formik';


function FormField({ label, name, type, value, as, errors, touched, children }){

  const hasValue = typeof value === 'number' ? Boolean(value.toString().length) : Boolean(value.length);

  return (

    <FormFieldWrapper>
      <label>
        <Input
          hasValue={ hasValue }
          name={ name }
          type={ type }
          as={ Field && as }
        >
        {children}
        </Input>
      <LabelText
         htmlFor={ name }>
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
  suggestions: [],
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
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
