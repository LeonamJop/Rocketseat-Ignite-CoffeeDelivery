import {
  DeliveryDescription,
  DeliveryDetails,
  DescriptionOrderInfo,
  DescriptionPage,
  Icon,
  OrderConfirmationContainer,
  OrderInfo,
  TittleOrderConfirmed,
} from './styles'

import motoboy from '../../assets/ManInBike.svg'
import { Timer, MapPin, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { ChoiceProductContext } from '../../context/ChoiceProductContext'

export function OrderConfimation() {
  const { deliveryAddress, paymentTypeSelected } =
    useContext(ChoiceProductContext)

  return (
    <OrderConfirmationContainer>
      <TittleOrderConfirmed>Uhu! Pedido confirmado</TittleOrderConfirmed>
      <DescriptionPage>
        Agora é só aguardar que logo o café chegará até você
      </DescriptionPage>
      <DeliveryDescription>
        <DeliveryDetails>
          <OrderInfo>
            <Icon color="#8047F8">
              <MapPin weight="fill" size={16} />
            </Icon>
            <DescriptionOrderInfo>
              <span>
                Entrega em{' '}
                <strong>
                  {deliveryAddress.street}, {deliveryAddress.houseNumber}
                </strong>
              </span>
              <span>
                {deliveryAddress.district} - {deliveryAddress.city},{' '}
                {deliveryAddress.federativeUnit}
              </span>
            </DescriptionOrderInfo>
          </OrderInfo>

          <OrderInfo>
            <Icon color="#DBAC2C">
              <Timer weight="fill" size={16} />
            </Icon>
            <DescriptionOrderInfo>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </DescriptionOrderInfo>
          </OrderInfo>

          <OrderInfo>
            <Icon color="#C47F17">
              <CurrencyDollar weight="fill" size={16} />
            </Icon>
            <DescriptionOrderInfo>
              <span>Pagamento na entrega</span>
              <strong>{paymentTypeSelected}</strong>
            </DescriptionOrderInfo>
          </OrderInfo>
        </DeliveryDetails>
        <img src={motoboy} alt="" />
      </DeliveryDescription>
    </OrderConfirmationContainer>
  )
}
