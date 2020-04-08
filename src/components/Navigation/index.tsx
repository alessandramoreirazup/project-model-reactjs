import React from 'react';

import { StNavContainer, StUlNav, StLiNav } from './styles'

const Navigation: React.FC = () => {
  return (
    <StNavContainer>
      <StUlNav>
        <StLiNav>início</StLiNav>
        <StLiNav>compras</StLiNav>
        <StLiNav>ICON</StLiNav>
        <StLiNav>ajuda</StLiNav>
        <StLiNav>perfil</StLiNav>
      </StUlNav>
    </StNavContainer>
  )
}

export default Navigation;