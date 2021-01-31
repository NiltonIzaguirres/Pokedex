import styled from 'styled-components';

export const LandingPage = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 80%;
  justify-content: center;
  align-content: center;

  padding: 3rem;

  @media (min-width: 500px) {
    grid-template-columns: 40% 40%;
  }

  @media (min-width: 500px) {
    grid-template-columns: 27% 27% 27%;
  }
`;
