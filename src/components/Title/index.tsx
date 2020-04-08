import React from 'react';

import { StTitleContainer } from './styles';

interface ITitle {
  text: string
}

const Title: React.FC<ITitle> = ({ text }) => {
  return (
    <StTitleContainer>
      { text }
    </StTitleContainer>
  );
}

export default Title;
