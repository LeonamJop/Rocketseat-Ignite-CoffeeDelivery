import { CompleteOrder } from './components/CompleteOrder'
import { ConfirmOrder } from './components/ConfirmOrder'
import { CartContainer } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <CompleteOrder />
      <ConfirmOrder />
    </CartContainer>
  )
}
