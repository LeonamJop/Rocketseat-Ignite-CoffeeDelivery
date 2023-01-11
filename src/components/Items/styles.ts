import styled from 'styled-components'

export const ItemsContainer = styled.div`
  width: 35.438rem;
  height: 5.25rem;

  display: flex;
  align-items: center;
  flex-direction: row;

  margin-top: 4.125rem;

  gap: 2.5rem;
`

export const ListContainer = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  list-style: none;
  gap: 1.25rem;
`

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
`

export const Icon = styled.i`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background: ${(props) => props.color};

  color: ${(props) => props.theme['white-base']};
`
