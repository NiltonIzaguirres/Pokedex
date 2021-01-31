import React from 'react';
import styled from 'styled-components';

import LoadingIcon from '../assets/images/loading.gif';

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.8);

  position: fixed;
  top: 0;
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingLogo = styled.img`
  width: 10rem;
  height: 15rem;
`;

const Loading: React.FC = () => (
  <LoadingContainer>
    <LoadingLogo src={LoadingIcon} alt="Ícone de carregamento" />
  </LoadingContainer>
);

export default Loading;
