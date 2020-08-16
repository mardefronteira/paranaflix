import styled, { css } from 'styled-components';

export const FormWrapper = styled.div`
  padding: 5vh 5vw;
`;

export const CatButton = styled.span`
  background:none;
  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 3px 6px;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  opacity: 1;
`;

export const CatButtonX = styled.span`
  background:none;
  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  margin-left: 5px;
  padding: 1px 4px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  opacity: .7;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export const FinalNote = styled.p`
  padding-top: 2em;
  padding-bottom: 2em;
  color:var(--grayMedium);
  text-align:center;
`;

export const FormFieldWrapper = styled.div`
  position: relative;

  textarea {
    min-height: 150px;
  }

  input[type="color"] {
    padding-left: 56px;
  }
`;

export const LabelText=styled.span`
  color: var(--primary);
  height: 50px;
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
  width: 70%;
  max-width: 500px;
  height: 50px;
  font-size: 18px;

  outline:0;
  border:0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid var(--grayLight);

  padding: 16px 16px;
  margin-bottom: 25px;
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

  ${({ hasvalue }) => {
    /* && avalia o primeiro valor: se for falso, retorna falso,
    se verdadeiro, retorna o segundo valor. */

    return hasvalue && css`
      &:not([type="color"]) + span {
        transform: scale(.6) translateY(-10px);
      }
  `;
  }}
`;

export const Select = styled.select`
  background: var(--grayMedium);
  color: var(--primary);

  display: inline-block;
  width: 30%;
  max-width: 500px;
  height: 40px;
  font-size: 15px;

  outline:0;
  border:0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid var(--grayLight);

  padding: 5px 5px;
  margin-bottom: 25px;
  margin-right: 10px;
  resize: none;
  border-radius: 4px;

`;
