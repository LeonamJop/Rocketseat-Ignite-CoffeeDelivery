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
`

export const InfoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ImageContainer = styled.div`
  width: 7.5rem;
  height: 7.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: -3.25rem;
`

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  gap: 0.25rem;
`

export const Tag = styled.span`
  padding: 4px 8px;

  margin-top: 0.75rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 10px;

  border-radius: 100px;

  background: ${(props) => props.theme['yellow-ligth']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const NameContainer = styled.div`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;

  margin-top: 1rem;
`

export const DescriptionContainer = styled.div`
  width: 13.5rem;
  height: 2.25rem;

  font-size: 0.875rem;
  text-align: center;

  margin-top: 0.5rem;

  color: ${(props) => props.theme['base-label']};
`

export const BuyContainer = styled.div`
  width: 13rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  margin-top: 2rem;

  gap: 1.813rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    gap: 0.25rem;

    p {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 400;
      font-size: 25px;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const ActionsContainer = styled.div`
  width: 7.375rem;
  height: 2.375rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

export const AddToCard = styled.button`
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  border: none;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme['purple-base']};
    cursor: pointer;
  }

  &:focus {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
  }
`
