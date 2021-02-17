import React from 'react';
import styled from 'styled-components/native';

const MainContainer = styled.View`
  flex: 1;

  margin-top: -50px;
  border-top-left-radius: 60px;
  background-color: #4062bb;
`;

interface MainProps {
  children: JSX.Element[] | JSX.Element;
}

const Main: React.FC<MainProps> = ({ children }) => (
  <MainContainer>{children}</MainContainer>
);

export default Main;
