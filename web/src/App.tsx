import React from 'react';

import GlobalStyled from './assets/styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyled />
      <Routes />
    </>
  );
};

export default App;
