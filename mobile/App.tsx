import React from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// eslint-disable-next-line camelcase
import { Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';

const App: React.FC = () => {
  const [fontLoaded] = useFonts({ Poppins_700Bold });

  if (!fontLoaded) {
    return <Text>Não carregou!</Text>;
  }
  return (
    <>
      <AppStack />
      <StatusBar />
    </>
  );
};

export default App;
