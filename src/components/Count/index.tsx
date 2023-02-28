import { Minus, Plus } from 'phosphor-react'
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { ChoiceProductContext } from '../../context/ChoiceProductContext'
import {
  ButtonMinus,
  ButtonPlus,
  CountContainer,
  QuantityContainer,
} from './styles'

interface CountProps {
  id?: number
  price?: number
  quantity: number
  setQuantity: Dispatch<SetStateAction<number>>
}

export function Count({ id, price, quantity, setQuantity }: CountProps) {
  const { product, setProduct } = useContext(ChoiceProductContext)
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

  const [state, handlerCount] = useReducer(count, quantity || 0)

  useEffect(() => {
    if (quantity) {
      console.log(quantity)
      if (state < 1) return setQuantity?.(1)

      const updateProduct = product.find((item: CountProps) => item.id === id)

      if (updateProduct) {
        updateProduct.quantity = state
        updateProduct.totalPriceItem = price! * state
        console.log('product: ', product)

        setProduct(product)
        return
      }
    }
    setQuantity?.(state)
  }, [setQuantity, state, id, price, product, setProduct, quantity])

  return (
    <CountContainer>
      <ButtonMinus onClick={(e) => handlerCount('decrease')}>
        <Minus size={16} />
      </ButtonMinus>
      <QuantityContainer>{state}</QuantityContainer>
      <ButtonPlus onClick={(e) => handlerCount('increase')}>
        <Plus size={16} />
      </ButtonPlus>
    </CountContainer>
  )
}
