import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
 background-color: var(--grayDark);
 color: var(--white);
 flex: 1;
 padding-top: 50px;
 padding-left: 5vw;
 padding-right: 5vw;
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
