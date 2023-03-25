import styled from 'styled-components'

export const OrderConfirmationContainer = styled.div`
  width: 100%;
  height: 23.875rem;
  padding: 5rem 10rem;
`

export const TittleOrderConfirmed = styled.h1`
  width: 353px;
  height: 42px;

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;

  color: ${(props) => props.theme['yellow-dark']};
`

export const DescriptionPage = styled.h2`
  width: 34.5rem;
  height: 1.625rem;
  margin-top: 4px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
`

export const DeliveryDescription = styled.div`
  width: 100%;
  height: 18rem;

  margin-top: 2.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 6.375rem;

  img {
    width: 30.75rem;
    height: 18.313rem;
  }
`

export const DeliveryDetails = styled.div`
  width: 32.875rem;
  height: 16.875rem;

  background: linear-gradient(
        ${(props) => props.theme['background-base']},
        ${(props) => props.theme['background-base']}
      )
      padding-box,
    linear-gradient(to left, #8047f8, #dbac2c) border-box;
  border: 1px solid transparent;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
`

export const OrderInfo = styled.div`
  height: 2.625rem;
  display: flex;
  flex-direction: row;
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
export const DescriptionOrderInfo = styled.div``
