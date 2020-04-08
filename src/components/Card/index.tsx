import React from 'react';

import { StCard } from './styles';

interface ICard {
  text: string
  icon_url: string
  icon_description?: string
}

const Card: React.FC<ICard> = ({ text, icon_url, icon_description }) => {
  return (
      <StCard>
        <img src={icon_url} alt={icon_description}/>
        <br/>
        <strong>{text}</strong>
      </StCard>
  );
}

export default Card;
