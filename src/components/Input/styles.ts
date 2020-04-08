import styled from 'styled-components';

interface InputProps {
  width: number
}

export const StInput = styled.input<InputProps>`
  width: ${props => props.width}px;
  padding: 10px;
  display: flex;
  margin: 0 auto;
  border: solid .4px #F4F4F4;
  border-radius: 3px;
`
