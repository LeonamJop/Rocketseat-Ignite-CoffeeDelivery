import { useContext } from 'react'
import { CounterContainer } from './styles'
import { ChoiceProductContext } from '../../../../context/ChoiceProductContext'

export function Counter() {
  const { product } = useContext(ChoiceProductContext)
  return (
    <CounterContainer>
      <span>{product.length}</span>
    </CounterContainer>
  )
}
