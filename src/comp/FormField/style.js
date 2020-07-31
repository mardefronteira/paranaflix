import styled, { css } from 'styled-components';


export const FormFieldWrapper = styled.div`
  position: relative;

  textarea {
    min-height: 150px;
  }

  input[type="color"] {
    padding-left: 56px;
  }
`;
//
// export const Label = styled.label``;

export const LabelText=styled.span`
  color: var(--primary);
  height: 57px;
  position: absolute;

  top: 0;
  left: 16px;
  /* z-index:100; */

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`;

export const Input = styled.input`
  background: var(--grayMedium);
  color: var(--primary);

  display: block;
  width: 100%;
  /* max-width: 500px; */
  height: 57px;
  font-size: 18px;

  outline:0;
  border:0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid var(--grayLight);

  padding: 16px 16px;
  margin-bottom: 45px;
  resize: none;
  border-radius: 4px;

  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }

  /* quando o próximo elemento é span, está focado,
  e se a input anterior a ele não é tipo color */
  &:focus:not([type="color"]) + span {
    transform: scale(.6) translateY(-10px);
  }

  ${({ hasValue }) => {
    /* && avalia o primeiro valor: se for falso, retorna falso,
    se verdadeiro, retorna o segundo valor. */
    return hasValue && css`
      &:not([type="color"]) + span {
        transform: scale(.6) translateY(-10px);
      }
  `;
  }}
`;
