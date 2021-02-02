import styled from 'styled-components';

export const PokemonContainer = styled.div``;

export const Main = styled.main`
  position: fixed;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

export const PokemonImage = styled.img`
  width: 13rem;
  height: 13rem;

  @media (min-width: 500px) {
    width: 18rem;
    height: 18rem;
  }
  @media (min-width: 800px) {
    width: 25rem;
    height: 25rem;
  }
`;

export const Cards = styled.div`
  @media (min-width: 800px) {
    display: flex;
    justify-items: center;
    align-items: center;
  }
`;
