import styled from 'styled-components'

export const ConfirmOrderContainer = styled.div`
  width: 28rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.125rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ConfirmOrderCard = styled.div`
  min-height: 15.125rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.5rem;

  border-radius: 6px 44px;

  background: ${(props) => props.theme['base-card']};
`

export const TotalContainer = styled.div`
  width: 23rem;
  height: 5.75rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const TotalItems = styled.div`
  height: 1.313rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 0.5rem;

  color: ${(props) => props.theme['base-text']};

  span {
    font-size: 0.875rem;
  }

  p {
    font-size: 1rem;
  }
`

export const Total = styled.div`
  height: 1.625rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 0.5rem;

  font-size: 1.25rem;

  span {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ConfirmOrderButton = styled.button`
  width: 23rem;
  height: 2.875rem;

  text-align: center;

  border: none;
  border-radius: 6px;

  font-size: 0.875rem;
  text-transform: uppercase;

  color: ${(props) => props.theme['white-base']};
  background: ${(props) => props.theme['yellow-base']};

  &:hover {
    transition: 0.5s;
    cursor: pointer;
    background: ${(props) => props.theme['yellow-dark']};
  }
`
