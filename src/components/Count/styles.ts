import styled from 'styled-components'

export const CountContainer = styled.div`
  width: 4.5rem;
  height: 2.375rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  gap: 0.25rem;

  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};
`

export const ButtonPlus = styled.button`
  width: 0.875rem;
  height: 0.875rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;

  background: transparent;
  color: ${(props) => props.theme['purple-base']};

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
    cursor: pointer;
  }

  &:focus {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
  }
`

export const ButtonMinus = styled.button`
  width: 0.875rem;
  height: 0.875rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;

  background: transparent;
  color: ${(props) => props.theme['purple-base']};

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
    cursor: pointer;
  }

  &:focus {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
  }
`

export const QuantityContainer = styled.p`
  width: 1.25rem;
  height: 1.313rem;

  font-size: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme['base-title']};
`
