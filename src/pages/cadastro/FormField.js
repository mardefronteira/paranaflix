import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, LabelText, Warning } from './style.js';
import { ErrorMessage } from 'formik';


function FormField({ label, name, children }){

  return (
    <FormFieldWrapper>
      <label>
          {children}

        <LabelText
          htmlFor={ name }>
          {label}
          <ErrorMessage name={ name }>{(msg) => <Warning>
            {msg}</Warning>}</ErrorMessage>
        </LabelText>
     </label>
  </FormFieldWrapper>
  )
}

FormField.defaultProps = {

};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormField;
