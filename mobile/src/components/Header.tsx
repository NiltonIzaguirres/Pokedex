import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import pokeballIcon from '../assets/images/pokeball.png';
import previousIcon from '../assets/images/previousArrow.png';

const HeaderContainer = styled.View`
  width: 100%;
  height: 250px;

  flex: 0.4;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 40px;

  background-color: #ebebeb;
`;

const ImageButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`;

const Image = styled.Image`
  width: 30px;
  height: 30px;
`;

const HeaderTitle = styled.Text`
  font-size: 28px;
  font-family: 'Poppins_700Bold';
`;

interface HeaderProps {
  title: string;
  previous: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, previous }) => {
  const navigation = useNavigation();

  return (
    <HeaderContainer>
      {previous ? (
        <ImageButton onPress={() => navigation.navigate('Landing')}>
          <Image source={previousIcon} />
        </ImageButton>
      ) : (
        <ImageButton>
          <Image source={pokeballIcon} />
        </ImageButton>
      )}
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
