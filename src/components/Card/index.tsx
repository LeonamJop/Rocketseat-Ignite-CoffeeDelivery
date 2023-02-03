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
import { Dispatch, SetStateAction, useState } from 'react'

interface CardProps {
  id: number
  image: string
  tags: string[]
  name: string
  description: string
  price: string
  product: any
  setProduct: Dispatch<SetStateAction<any>>
}

export function Card({
  id,
  image,
  tags,
  name,
  description,
  price,
  product,
  setProduct,
}: CardProps) {
  const [quantity, setQuantity] = useState(Number)

  function handleAddToBuyList() {
    if (quantity === 0) return

    const item = {
      id,
      image,
      name,
      price,
      quantity,
    }
    setProduct([...product, item])
  }

  console.log(product)

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
          <Count quantity={quantity} setQuantity={setQuantity} />
          <AddToCard onClick={handleAddToBuyList}>
            <ShoppingCart size={22} />
          </AddToCard>
        </ActionsContainer>
      </BuyContainer>
    </CardContainer>
  )
}
