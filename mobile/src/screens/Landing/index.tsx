/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Main from '../../components/Main';
import api from '../../services/api';

import {
  LandingScreen,
  ScrollView,
  ButtonsContainer,
  Button,
  Text,
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
    <LandingScreen>
      <Header title="Pokémons" previous={false} />
      <Main>
        <ScrollView>
          {listOfPokemons.results.map((current) => (
            <Card
              key={current.name}
              name={current.name}
              uri={current.image}
              id={current.id}
            />
          ))}
          <ButtonsContainer>
            {listOfPokemons.previous !== null && (
              <Button onPress={handlePrevious}>
                <Text>Anterior</Text>
              </Button>
            )}
            <Button onPress={handleNext} next>
              <Text>Próximo</Text>
            </Button>
          </ButtonsContainer>
        </ScrollView>
      </Main>
    </LandingScreen>
  );
};

export default Landing;
