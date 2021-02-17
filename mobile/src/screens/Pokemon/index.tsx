/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { Text } from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Main from '../../components/Main';

import { PokemonScreen, ScrollView } from './styles';
import api from '../../services/api';

interface IRouteParams {
  id?: string;
}

interface IPokemonInfo {
  name: string;
  sprites: {
    front_default: string;
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
}

const Pokemon: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as IRouteParams;
  const [pokemon, setPokemon] = useState<IPokemonInfo>({
    name: 'undefined',
    sprites: {
      front_default: 'image_default',
    },
    stats: [
      {
        base_stat: 0,
        stat: {
          name: 'undefined',
        },
      },
    ],
    types: [
      {
        slot: 0,
        type: {
          name: 'undefined',
        },
      },
    ],
  });

  useEffect(() => {
    const loadAll = async () => {
      const pokemonInfo = await api.getPokemonById(`${routeParams.id}`);

      setPokemon(pokemonInfo);
    };

    loadAll();
  }, [routeParams.id]);

  return (
    <PokemonScreen>
      <Header title={pokemon.name} previous />
      <Main>
        <ScrollView>
          <Card name="Status">
            {pokemon.stats.map((current, key) => (
              <Text key={key}>
                {current.stat.name}: {current.base_stat}
              </Text>
            ))}
          </Card>
          <Card name="Tipos">
            {pokemon.types.map((current, key) => (
              <Text key={key}>
                {current.slot}: {current.type.name}
              </Text>
            ))}
          </Card>
        </ScrollView>
      </Main>
    </PokemonScreen>
  );
};

export default Pokemon;
