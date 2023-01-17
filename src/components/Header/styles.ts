import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  a {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0.75rem;
  }
`

export const UserLocation = styled.div`
  width: 8.938rem;
  height: 2.375rem;
  background: ${(props) => props.theme['purple-ligth']};
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 0.375rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  padding: 0.5rem;
  gap: 0.25rem;

  span {
    user-select: none;
  }
`

export const Cart = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border: none;
  border-radius: 0.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['yellow-ligth']};
  color: ${(props) => props.theme['yellow-dark']};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
  }
`
