import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import pokeballIcon from '../assets/images/pokeball.png';
import previousArrowIcon from '../assets/images/previousArrow.svg';

const HeaderContainer = styled.header`
  background-color: #4062bb;

  width: 100%;
  height: 6rem;

  padding: 0 6rem;
`;

const HeaderContent = styled.div`
  width: 100;
  height: 100%;

  display: flex;

  justify-content: space-between;
  align-items: center;

  color: white;
`;

interface HeaderProps {
  mainPage?: boolean;
  pokemonName?: string;
}

const Header: React.FC<HeaderProps> = ({ mainPage, pokemonName }) => (
  <HeaderContainer>
    <HeaderContent>
      <div className="image">
        {mainPage ? (
          <img src={pokeballIcon} alt="Ícone da pokébola" />
        ) : (
          <Link to="/">
            <img
              width="30px"
              height="30px"
              src={previousArrowIcon}
              alt="Ícone de volta"
            />
          </Link>
        )}
      </div>
      <div className="name">
        {mainPage ? <h1>Pokémons</h1> : <h1>{pokemonName}</h1>}
      </div>
    </HeaderContent>
  </HeaderContainer>
);

export default Header;
