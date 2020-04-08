import styled from 'styled-components';

export const StNavContainer = styled.nav`
  width: 100;
  position: sticky;
  bottom: 0;
  background-color: ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.text};
  padding: 14px;
`;

export const StUlNav = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const StLiNav = styled.li `
  list-style-type: none;
`

