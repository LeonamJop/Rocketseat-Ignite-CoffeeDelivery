import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
  }
`
