import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  background-color: #4062bb;

  color: #ebebeb;
  transition: 0.2s background;
`;

const CardMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: #ebebeb;

  padding: 1rem;
  font-size: 1.7rem;

  span {
    color: #4062bb;
  }
`;

const CardPokemon = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardButton = styled(Link)`
  text-decoration: none;
  color: #ebebeb;
  padding: 1rem;

  background-color: #4062bb;
  border-radius: 2rem;

  transition: 0.3s background;

  &:hover {
    background-color: #59c3c3;
  }
`;

const CardFooter = styled.div`
  height: 0.8rem;
  background-color: #4062bb;
  transition: 0.2s background;
`;

const CardContainer = styled.div`
  max-width: 500px;
  margin: 2rem 0 0 2rem;
  border-radius: 0.8rem;
  overflow: hidden;

  &:hover {
    ${CardHeader} {
      background-color: #59c3c3;
    }
    ${CardFooter} {
      background-color: #59c3c3;
    }
  }
`;

interface CardProps {
  name: string;
  url?: string;
  id?: number;
  children?: JSX.Element;
}

const Card: React.FC<CardProps> = ({ name, url, id, children }) => (
  <CardContainer>
    <CardHeader>
      <h1>{name}</h1>
    </CardHeader>
    <CardMain>
      {children || (
        <CardPokemon>
          <img src={url} alt={name} />
          <CardButton to={`/pokemon/${id}`}>Sobre</CardButton>
        </CardPokemon>
      )}
    </CardMain>
    <CardFooter />
  </CardContainer>
);

export default Card;
