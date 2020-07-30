import styled from 'styled-components';


export const Form = styled.div`
  position:relative;

`;

export const Label = styled.label`
 color:var(--primary);

 position: absolute;
 top: 5px;
 left: 10px;

 z-index:100;


 transition: transform .1s ease-in-out;

 &:hover,
 &:focus{
  transform: translateX(-30%) translateY(-50%) scale(0.7);
  top:5px;
  left:10px;
 }
`;

export const Input = styled.input`
  position:relative;

  &:hover,
  &:focus,
  &:valid{

  }
`;
