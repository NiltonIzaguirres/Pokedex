/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable camelcase */
import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/pokemon';

interface PokemonsObject {
  count: number;
  next: string;
  previous: string | null;
  results: [];
}

interface PokemonInfo {
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

async function baseRequest(url: string, endPoint?: string) {
  const data = await axios
    .get(`${url}${endPoint}`)
    .then((response) => response.data);
  return data;
}

async function getImages(pokemons: PokemonsObject) {
  interface Pokemon {
    name: string;
    url: string;
  }

  const pokemonsWithImage = pokemons.results.map((current: Pokemon) => {
    const { name, url } = current;
    const index = url.split('/')[6];
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
    const id = parseInt(index, 10);

    return {
      name,
      id,
      image,
    };
  });

  return {
    count: pokemons.count,
    next: pokemons.next,
    previous: pokemons.previous,
    results: pokemonsWithImage,
  };
}

export default {
  getPokemons: async () => {
    const pokemons: PokemonsObject = await baseRequest(
      baseURL,
      `?limit=10&offset=0`
    );
    const pokemonsWithImage = getImages(pokemons);

    return pokemonsWithImage;
  },
  getPokemonsByURL: async (url: string) => {
    const pokemons: PokemonsObject = await baseRequest(url);

    const pokemonsWithImage = getImages(pokemons);

    return pokemonsWithImage;
  },

  getPokemonById: async (id: number | string) => {
    const pokemonInfo: PokemonInfo = await baseRequest(baseURL, `/${id}`);

    return pokemonInfo;
  },
};
