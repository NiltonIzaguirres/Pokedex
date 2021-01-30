import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/pokemon';

interface PokemonsObject {
  count: number;
  next: string;
  previous: string | null;
  results: [];
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
    const imageIndex = url.split('/')[6];
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageIndex}.png`;
    return {
      name,
      url,
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
      `?limit=21&offset=0`,
    );
    const pokemonsWithImage = getImages(pokemons);

    return pokemonsWithImage;
  },
  // getNextPokemons: async (url: string) => {},
  // getPreviousPokemons: async (url: string) => {},
};