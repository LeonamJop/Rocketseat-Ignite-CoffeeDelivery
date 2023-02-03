import {
  Actions,
  DetailsContainer,
  Info,
  ItemContainer,
  Price,
  RemoveButton,
} from './styles'

import { Count } from '../../../../components/Count'
import { Trash } from 'phosphor-react'
import { Divider } from '../ConfirmOrder/styles'

interface CoffeeSelectedProps {
  id: number
  image: string
  name: string
  price: string
  quantity: number
}

export function CoffeeSelected({
  id,
  image,
  name,
  price,
  quantity,
}: CoffeeSelectedProps) {
  const convertPrice = parseFloat(price.replace(',', '.'))
  const totalPriceCoffeeSelected = String(convertPrice * quantity).replace(
    '.',
    ',',
  )
  return (
    <>
      <ItemContainer>
        <Info>
          <img src={image} alt="" />
          <DetailsContainer>
            <span>{name}</span>
            <Actions>
              <Count quantity={quantity} />
              <RemoveButton>
                <Trash size={16} />
                <span>remover</span>
              </RemoveButton>
            </Actions>
          </DetailsContainer>
        </Info>
        <Price>R$ {totalPriceCoffeeSelected}</Price>
      </ItemContainer>
      <Divider />
    </>
  )
}
