import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Label = styled(Link)`
  background:none;
  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 10px 18px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  margin: 5px;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export const CatLabelWrapper = styled.div`
  margin-bottom: 100px;
  padding-left: 5vw;
  padding-right: 5vw;
`;
