import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import {
  ActionsContainer,
  AddToCard,
  ButtonMinus,
  ButtonPlus,
  BuyContainer,
  CardContainer,
  CountContainer,
  DescriptionContainer,
  ImageContainer,
  InfoItem,
  NameContainer,
  QuantityContainer,
  TagsContainer,
} from './styled'

import CoffeeImage from '../../assets/ExpressoTradicional.svg'

export function Card() {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={CoffeeImage} alt="" />
      </ImageContainer>
      <InfoItem>
        <TagsContainer>TRADICIONAL</TagsContainer>
        <NameContainer>Expresso Tradicional</NameContainer>
        <DescriptionContainer>
          O tradicional café feito com água quente e grãos moídos
        </DescriptionContainer>
      </InfoItem>
      <BuyContainer>
        <span>
          R$
          <p>9,90</p>
        </span>
        <ActionsContainer>
          <CountContainer>
            <ButtonMinus>
              <Minus size={14} />
            </ButtonMinus>
            <QuantityContainer>1</QuantityContainer>
            <ButtonPlus>
              <Plus size={14} />
            </ButtonPlus>
          </CountContainer>
          <AddToCard>
            <ShoppingCart size={22} />
          </AddToCard>
        </ActionsContainer>
      </BuyContainer>
    </CardContainer>
  )
}
