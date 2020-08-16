import styled from 'styled-components';
import Button from '../../../Button';
import { Link } from 'react-router-dom';

export const MenuLink = styled(Link)`
  color: var(--white);
  font-size:15px;
  margin-right: 15px;
  @media(max-width: 800px){
    display:none;
  }
`;

export const MenuAligner = styled.div`
  color: var(--white);
  font-size:15px;
  align-items:{align};
`;

export const LogoImg = styled.img`
  max-height: 50px;
  @media(max-width: 800px){
    max-height: 40px;
  }
`;

export const MenuWrapper = styled.nav`
  width: 100%; /*pq vh não funciona?*/
  height: 94px;
  z-index:100;

  position: fixed;
  top:0;
  left:0;
  right:0;
  padding-left:5%;
  padding-right:5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--black);
  border-bottom: 2px solid var(--primary);

  @media(max-width: 800px){
    height: 60px;
    /* justify-content: center; */

  }
`;

export const ButtonLink = styled(Button)`
  color: var(--white);

  border: 1px solid var(--white);
  border-radius: 4px;
  padding: 16px 24px;

  font-size: 16px;
  font-weight: bold;
  text-decoration: none;

  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }

  @media(max-width:800px){
    background-color: var(--black);
    color: var(--grayMedium);

    font-size:12px;
    padding: 5px 10px;
  }
`;
