import {
  DeliveryDescription,
  DeliveryDetails,
  DescriptionPage,
  Icon,
  OrderConfirmationContainer,
  OrderInfo,
  TittleOrderConfirmed,
} from './styles'

import motoboy from '../../assets/ManInBike.svg'

export function OrderConfimation() {
  return (
    <OrderConfirmationContainer>
      <TittleOrderConfirmed>Uhu! Pedido confirmado</TittleOrderConfirmed>
      <DescriptionPage>
        Agora é só aguardar que logo o café chegará até você
      </DescriptionPage>
      <DeliveryDescription>
        <DeliveryDetails>
          <OrderInfo>
            <Icon color=""></Icon>
          </OrderInfo>
        </DeliveryDetails>
        <img src={motoboy} alt="" />
      </DeliveryDescription>
    </OrderConfirmationContainer>
  )
}
