import styled from 'styled-components';

export const StCard = styled.div`
  color: ${props => props.theme.colors.secundary};
  font-size: 15px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  border-radius: 3px;
  padding: 10px;
  max-height: 150px;
  min-height: 100px;
  justify-content: flex-end;
`
