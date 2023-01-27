import {
  Actions,
  DetailsContainer,
  Info,
  ItemContainer,
  Price,
  RemoveButton,
} from './styles'

import irlandes from '../../../../assets/CoffeeList/Irlandes.svg'
import { Count } from '../../../../components/Count'
import { Trash } from 'phosphor-react'

export function CoffeeSelected() {
  return (
    <ItemContainer>
      <Info>
        <img src={irlandes} alt="" />
        <DetailsContainer>
          <span>irlandes</span>
          <Actions>
            <Count />
            <RemoveButton>
              <Trash size={16} />
              <span>remover</span>
            </RemoveButton>
          </Actions>
        </DetailsContainer>
      </Info>
      <Price>R$ 9,90</Price>
    </ItemContainer>
  )
}
