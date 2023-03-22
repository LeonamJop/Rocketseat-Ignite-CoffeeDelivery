import styled from 'styled-components'
import { isActiveProps } from '.'

export const ComplementOrderContainer = styled.div`
  width: 40rem;

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

export const FormContainer = styled.div`
  height: 23.25rem;

  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 6px;

  background: ${(props) => props.theme['base-card']};
`

export const FormHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  padding: 0;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const Form = styled.form`
  width: 35rem;
  height: 13.5rem;

  padding: 0;
  gap: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const BaseInput = styled.input`
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const CEP = styled(BaseInput)`
  width: 12.5rem;
  height: 2.625rem;
`

export const Street = styled(BaseInput)`
  width: 100%;
  height: 2.625rem;
`

export const InfoHouse = styled.div`
  width: 100%;
  height: 2.625rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`

export const HouseNumber = styled(BaseInput)`
  width: 12.5rem;
`
export const ComplementInfo = styled(BaseInput)`
  width: 21.75rem;
`

export const DistrictInfo = styled.div`
  width: 100%;
  height: 2.625rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`

export const District = styled(BaseInput)`
  width: 12.5rem;
`

export const City = styled(BaseInput)`
  width: 17.25rem;
`

export const FederativeUnit = styled(BaseInput)`
  width: 3.75rem;
  text-transform: uppercase;
`

export const FormPayment = styled.div`
  width: 40rem;
  height: 12.938rem;

  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 6px;

  background: ${(props) => props.theme['base-card']};
`

export const PaymentType = styled.div`
  width: 35rem;
  height: 3.188rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.75rem;
`

export const PaymentTypeButton = styled.button<isActiveProps>`
  width: 11.163rem;
  height: 3.188rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;

  border: ${(props) => props.border};

  border-radius: 6px;

  background: ${(props) => props.backgroundColor};

  svg {
    color: ${(props) => props.theme['purple-base']};
  }

  span {
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme['base-hover']};
  }

  /* &.active {
    background: ${(props) => props.theme['purple-ligth']};
    border: 1px solid ${(props) => props.theme['purple-base']};
  } */
`
