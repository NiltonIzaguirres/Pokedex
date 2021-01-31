import React, { useEffect, useState } from 'react';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import api from '../../services/api';

import { LandingPage, Main } from './styles';

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
  return (
    <LandingPage>
      <Header mainPage />
      {listOfPokemons.results.length === 1 ? (
        <Loading />
      ) : (
        <Main>
          {listOfPokemons.results.map((current) => (
            <Card
              key={current.name}
              name={current.name}
              url={current.image}
              id={current.id}
            />
          ))}
        </Main>
      )}
    </LandingPage>
  );
};

export default Landing;
