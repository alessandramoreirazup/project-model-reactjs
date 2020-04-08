import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components'

import { StContainerHeader } from './styles';

interface IHeader {
  toggleTheme(): void;
}

const Header: React.FC<IHeader> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <StContainerHeader>
      exemplo app itau
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={colors.secundary}
      />
    </StContainerHeader>
  );
}

export default Header;
