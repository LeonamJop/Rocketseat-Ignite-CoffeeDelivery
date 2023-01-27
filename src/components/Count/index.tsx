import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import {
  ButtonMinus,
  ButtonPlus,
  CountContainer,
  QuantityContainer,
} from './styles'

export function Count() {
  const [quantity, setQuantity] = useState(0)

  function handleDecreaseQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    } else {
      setQuantity(0)
    }
  }

  function handleIncreaseAmount() {
    setQuantity(quantity + 1)
  }

  return (
    <CountContainer>
      <ButtonMinus onClick={handleDecreaseQuantity}>
        <Minus size={16} />
      </ButtonMinus>
      <QuantityContainer>{quantity}</QuantityContainer>
      <ButtonPlus onClick={handleIncreaseAmount}>
        <Plus size={16} />
      </ButtonPlus>
    </CountContainer>
  )
}
