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
import { Dispatch, SetStateAction, useContext, useState } from 'react'
import { ChoiceProductContext } from '../../context/ChoiceProductContext'

interface CardProps {
  id: number
  image: string
  tags: string[]
  name: string
  description: string
  price: number
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
  const { handleFormatValue } = useContext(ChoiceProductContext)

  const productList = JSON.parse(localStorage.getItem('todoList') || '[{}]')

  function handleAddToBuyList() {
    if (quantity === 0) return

    const updateProduct = productList.find((item: CardProps) => item.id === id)

    if (updateProduct) {
      updateProduct.quantity = quantity
      updateProduct.totalPriceItem = price * quantity
      setProduct(productList)
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
