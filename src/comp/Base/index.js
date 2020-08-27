import React from 'react';
import Menu from './comp/Menu';
import Footer from './comp/Footer';
import styled from 'styled-components';

const Main = styled.main`
width: 100%;
 background-color: var(--grayDark);
 color: var(--white);
 flex: 1;
 padding-top: 94px;
 padding-left: 0;
 padding-right: 0;

 @media(max-width:800px) {
   padding-top:60px;
 }

 a {
   transition: opacity .3s;
   &:hover{
     opacity: .7;
   }
 }
`;

function Base({ children }) {
  return (
    /* os componentes exigem uma tag antes de serem usados.
    é possível usar <React.Fragment></React.Fragment> ou as tags <> </>.
    elas funcionam de forma parecida, mas não igual. qual é a diferença? */
    <>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  )
}


export default Base;
