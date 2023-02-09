import { Minus, Plus } from 'phosphor-react'
import { Dispatch, SetStateAction, useEffect, useReducer } from 'react'
import {
  ButtonMinus,
  ButtonPlus,
  CountContainer,
  QuantityContainer,
} from './styles'

interface CountProps {
  quantity: number
  setQuantity?: Dispatch<SetStateAction<number>>
}

export function Count({ quantity, setQuantity }: CountProps) {
  function count(state: number, action: string) {
    switch (action) {
      case 'decrease':
        return state > 0 ? (state -= 1) : (state = 0)
      case 'increase':
        return (state += 1)
      default:
        return state
    }
  }

  const [state, handlerCount] = useReducer(count, 0)

  useEffect(() => {
    setQuantity?.(state)
  }, [setQuantity, state])

  return (
    <CountContainer>
      <ButtonMinus onClick={(e) => handlerCount('decrease')}>
        <Minus size={16} />
      </ButtonMinus>
      <QuantityContainer>{quantity || state}</QuantityContainer>
      <ButtonPlus onClick={(e) => handlerCount('increase')}>
        <Plus size={16} />
      </ButtonPlus>
    </CountContainer>
  )
}
