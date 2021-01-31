import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import PokemonPage from './pages/PokemonPage';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={Landing} />
    <Route path="/pokemon/:id" component={PokemonPage} />
  </BrowserRouter>
);

export default Routes;
