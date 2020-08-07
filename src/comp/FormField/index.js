import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, LabelText, Input } from './style.js';


function FormField({ label, name, type, value, onChange, suggestions }){

  const fieldId = `id_${name}`;

  /*
  condicional ternária:
  variável = condicional ? ifTrueThen : ifFalseThen
  nomeVar = seUm === outro ? valeX : valeY
  */
  const tagType = type === 'textarea' ? 'textarea' : 'input';

  const hasValue = typeof value === 'number' ? Boolean(value.toString().length) : Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

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
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
      <LabelText
         htmlFor={ fieldId }>
         {label}
       </LabelText>
       {
          hasSuggestions && (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
              suggestions.map((suggestion) =>
                <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                  {suggestion}
                </option>
              )
            }
            </datalist>
          )
        }
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
