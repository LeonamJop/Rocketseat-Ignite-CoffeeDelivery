import { ShoppingCart } from 'phosphor-react'
import {
  ActionsContainer,
  AddToCard,
  BuyContainer,
  CardContainer,
  DescriptionContainer,
  ImageContainer,
  InfoItem,
  NameContainer,
  Tag,
  TagsContainer,
} from './styled'

import { Count } from '../Count'

interface CardProps {
  image: string
  tags: string[]
  name: string
  description: string
  price: number
}

export function Card({ image, tags, name, description, price }: CardProps) {
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
          <Count />
          <AddToCard>
            <ShoppingCart size={22} />
          </AddToCard>
        </ActionsContainer>
      </BuyContainer>
    </CardContainer>
  )
}
