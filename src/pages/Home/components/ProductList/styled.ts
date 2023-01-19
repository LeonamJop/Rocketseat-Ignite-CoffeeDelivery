import styled from 'styled-components'

export const ProductListContainer = styled.div`
  width: 100%;
  padding: 1.375rem 10rem 6.75rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ListContainer = styled.div`
  width: 70rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  margin-top: 3.375rem;

  @media (max-width: 70rem) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: 3.375rem;
  }

  @media (min-width: 100rem) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;

    margin-top: 3.375rem;
  }

  @media (min-width: 120rem) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;

    margin-top: 3.375rem;
  }

  @media (min-width: 120rem) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;

    margin-top: 3.375rem;
  }
`
