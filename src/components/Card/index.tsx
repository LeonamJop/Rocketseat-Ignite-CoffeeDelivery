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
import { useContext, useState } from 'react'
import { ChoiceProductContext } from '../../context/ChoiceProductContext'

interface CardProps {
  id: number
  image: string
  tags: string[]
  name: string
  description: string
  price: number
}

export function Card({ id, image, tags, name, description, price }: CardProps) {
  const [quantity, setQuantity] = useState(Number)
  const { handleFormatValue, product, setProduct } =
    useContext(ChoiceProductContext)

  function handleAddToBuyList() {
    if (quantity === 0) return

    const updateProduct = product.find((item: CardProps) => item.id === id)

    if (updateProduct) {
      updateProduct.quantity = quantity
      updateProduct.totalPriceItem = price * quantity
      setProduct(product)
      return
    }

    const item = {
      id,
      image,
      name,
      price,
      quantity,
      totalPriceItem: price * quantity,
    }
    setProduct([...product, item])
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
          <p>{handleFormatValue(price)}</p>
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
