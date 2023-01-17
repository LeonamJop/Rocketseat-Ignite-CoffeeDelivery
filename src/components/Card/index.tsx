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
  Tag,
  TagsContainer,
} from './styled'

import { useState } from 'react'

interface CardProps {
  image: string
  tags: string[]
  name: string
  description: string
  price: number
}

export function Card({ image, tags, name, description, price }: CardProps) {
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
    <CardContainer>
      <ImageContainer>
        <img src={image} alt="" />
      </ImageContainer>
      <InfoItem>
        <TagsContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
        <NameContainer>{name}</NameContainer>
        <DescriptionContainer>{description}</DescriptionContainer>
      </InfoItem>
      <BuyContainer>
        <span>
          R$
          <p>{price}</p>
        </span>
        <ActionsContainer>
          <CountContainer>
            <ButtonMinus onClick={handleDecreaseQuantity}>
              <Minus size={16} />
            </ButtonMinus>
            <QuantityContainer>{quantity}</QuantityContainer>
            <ButtonPlus onClick={handleIncreaseAmount}>
              <Plus size={16} />
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
