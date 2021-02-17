import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const CardContainer = styled.TouchableOpacity`
  width: 75%;
  min-height: 200px;

  margin-top: 50px;
  border-radius: 20px;
  border: 6px solid #59c3c3;

  background-color: #ebebeb;
`;

const CardHeader = styled.Text`
  text-align: center;

  padding: 10px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  color: #ebebeb;
  font-family: 'Poppins_700Bold';

  background-color: #59c3c3;
`;

const InfoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CardImage = styled.Image`
  width: 70%;
  height: 70%;
`;

interface CardProps {
  name: string;
  id?: number;
  uri?: string;
  children?: JSX.Element[] | JSX.Element;
}

const Card: React.FC<CardProps> = ({ name, id, uri, children }) => {
  const navigation = useNavigation();

  return (
    <CardContainer
      onPress={
        () => (children ? '' : navigation.navigate('Pokemon', { id }))
        // eslint-disable-next-line react/jsx-curly-newline
      }
    >
      <CardHeader>{name}</CardHeader>
      {children ? (
        <InfoContainer>{children}</InfoContainer>
      ) : (
        <ImageContainer>
          <CardImage
            source={{
              uri,
            }}
          />
        </ImageContainer>
      )}
    </CardContainer>
  );
};

export default Card;
