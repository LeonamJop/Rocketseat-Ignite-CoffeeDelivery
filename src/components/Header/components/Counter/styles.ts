import styled from 'styled-components'

export const CounterContainer = styled.div`
  width: 1.25rem;
  height: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  border: none;
  border-radius: 50%;

  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['white-base']};

  font-size: 0.75rem;
  font-weight: 700;

  margin-right: -2rem;
  margin-top: -2rem;
`
