import styled from 'styled-components';


export const FooterBase = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--black);
  border-top: 2px solid var(--primary);
  color: var(--grayMedium);
  padding: 3vh 25vw;
  text-align: center;
  font-size: 1rem;

  @media (max-width: 800px) {
    padding: 5vh 5vw;
  }
`;
