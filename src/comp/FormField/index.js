import React from 'react';
import { Form, Label, Input } from './style.js'

function FormField({ label, name, type, value, onChange }){

  return (
    <Form>
     <Label>
     {label}
     </Label>
      <Input
      type={ type }
      value={ value }
      name={ name }
      onChange={ onChange }
      />
    </Form>
  )
}

export default FormField;
