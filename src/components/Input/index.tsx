import React from 'react';

import { StInput } from './styles';

interface Iinput {
  placeholder: string
  width: number
}

const Input: React.FC<Iinput> = ({ placeholder, width }) => {
  return (
    <StInput type="text" placeholder={placeholder} width={width}/>
  );
}

export default Input;