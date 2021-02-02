import React, { useEffect, useState } from 'react';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import api from '../../services/api';

import {
  LandingPage,
  Main,
  ButtonsContainer,
  CardsContainer,
  Button,
} from './styles';

interface IListOfPokemons {
  count: number;
  next: string;
  previous: string | null;
  results: {
    name: string;
    id: number;
    image: string;
  }[];
}

const Landing: React.FC = () => {
  const [listOfPokemons, setListOfPokemons] = useState<IListOfPokemons>({
    count: 0,
    next: 'next',
    previous: 'previous',
    results: [
      {
        name: 'name',
        id: 0,
        image: 'image',
      },
    ],
  });

  useEffect(() => {
    const loadAll = async () => {
      const data = await api.getPokemons();
      setListOfPokemons(data);
    };

    loadAll();
  }, []);

  const handleNext = async () => {
    const data = await api.getPokemonsByURL(listOfPokemons.next);
    setListOfPokemons(data);
  };

  const handlePrevious = async () => {
    const url = `${listOfPokemons.previous}`;
    const data = await api.getPokemonsByURL(url);
    setListOfPokemons(data);
  };

  return (
    <LandingPage>
      <Header mainPage />
      {listOfPokemons.results.length === 1 ? (
        <Loading />
      ) : (
        <Main>
          <CardsContainer>
            {listOfPokemons.results.map((current) => (
              <Card
                key={current.name}
                name={current.name}
                url={current.image}
                id={current.id}
              />
            ))}
          </CardsContainer>
          <ButtonsContainer>
            {listOfPokemons.previous !== null && (
              <Button onClick={handlePrevious}>Anterior</Button>
            )}
            <Button onClick={handleNext}>Próximo</Button>
          </ButtonsContainer>
        </Main>
      )}
    </LandingPage>
  );
};

export default Landing;
