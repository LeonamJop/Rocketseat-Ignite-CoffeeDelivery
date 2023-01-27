import styled from 'styled-components'

export const ItemContainer = styled.div`
  height: 5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
`

export const Info = styled.div`
  width: 16rem;
  height: 4rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const DetailsContainer = styled.div`
  width: 10.5rem;
  height: 4rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Actions = styled.div`
  width: 4.5rem;
  height: 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  width: 5.688rem;
  height: 2.375rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme['base-hover']};
  }

  svg {
    color: ${(props) => props.theme['purple-base']};
  }

  span {
    font-size: 0.75rem;
    text-transform: uppercase;

    color: ${(props) => props.theme['base-text']};
  }
`

export const Price = styled.p`
  font-size: 1rem;
  font-weight: 700;

  color: ${(props) => props.theme['base-text']};
`
