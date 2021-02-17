import styled from 'styled-components/native';

interface ButtonProps {
  next?: boolean;
}

export const LandingScreen = styled.SafeAreaView`
  flex: 1;
`;

export const ScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
}))``;

export const ButtonsContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${(props: ButtonProps) =>
    props.next ? '#ebebeb' : '#59c3c3'};

  margin-top: 20px;
  height: 50px;
`;

export const Text = styled.Text`
  color: black;
  font-family: 'Poppins_700Bold';
  font-size: 18px;
`;
