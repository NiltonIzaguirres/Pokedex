import React from 'react';
import { useParams } from 'react-router-dom';

interface IUseParams {
  id: string;
}

const PokemonPage: React.FC = () => {
  const { id } = useParams<IUseParams>();
  return <h1>Id: {id}</h1>;
};

export default PokemonPage;
