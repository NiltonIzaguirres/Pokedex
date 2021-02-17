/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import api from '../../services/api';
import { PokemonContainer, Main, Cards, PokemonImage } from './styles';

interface IUseParams {
  id: string;
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

const PokemonPage: React.FC = () => {
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

  const { id } = useParams<IUseParams>();

  useEffect(() => {
    const loadAll = async () => {
      const pokemonInfo = await api.getPokemonById(id);

      setPokemon(pokemonInfo);
    };

    loadAll();
  }, [id]);

  return (
    <PokemonContainer>
      {pokemon.name !== 'undefined' ? (
        <div>
          <Header pokemonName={pokemon.name} />

          <Main>
            <PokemonImage
              src={pokemon.sprites.front_default}
              alt="Imagem do pokémon"
            />
            <Cards>
              <Card name="Status">
                <p>
                  {pokemon.stats.map((current) => (
                    <div className="attribute">
                      {current.stat.name}: <span>{current.base_stat}</span>
                    </div>
                  ))}
                </p>
              </Card>
              <Card name="Tipos">
                <p>
                  {pokemon.types.map((current) => (
                    <div className="type">
                      {current.slot}: <span>{current.type.name}</span>
                    </div>
                  ))}
                </p>
              </Card>
            </Cards>
          </Main>
        </div>
      ) : (
        <Loading />
      )}
    </PokemonContainer>
  );
};

export default PokemonPage;
