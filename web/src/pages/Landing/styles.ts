import styled from 'styled-components';

export const LandingPage = styled.div``;

export const Main = styled.main``;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 80%;
  justify-content: center;
  align-content: center;

  padding: 3rem;

  @media (min-width: 500px) {
    grid-template-columns: 40% 40%;
  }

  @media (min-width: 1300px) {
    grid-template-columns: 27% 27% 27%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 10%;

  @media (min-width: 500px) {
  }
`;

export const Button = styled.button`
  background-color: #4062bb;

  border-radius: 2rem;
  border: 0.2rem solid #59c3c3;

  color: #ebebeb;
  font-size: 1.7rem;
  font-weight: normal;
  padding: 1rem 4rem;

  transition: 0.2s all;

  &:hover {
    background-color: #59c3c3;

    border: 0.2rem solid #4062bb;
  }
`;
