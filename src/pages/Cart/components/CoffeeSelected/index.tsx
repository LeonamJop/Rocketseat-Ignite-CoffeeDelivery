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
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ChoiceProductContext } from '../../../../context/ChoiceProductContext'

interface CoffeeSelectedProps {
  id: number
  image: string
  name: string
  price: number
  quantity: number
  setQuantity: Dispatch<SetStateAction<number>>
  totalPriceItem: number
}

export function CoffeeSelected({
  id,
  image,
  name,
  price,
  quantity,
  setQuantity,
  totalPriceItem,
}: CoffeeSelectedProps) {
  const { handleFormatValue, setProduct, product } =
    useContext(ChoiceProductContext)

  // const [newPrice, setNewPrice] = useState(totalPriceItem)

  // useEffect(() => {
  //   setNewPrice(product[0])
  //   console.log(product)
  // }, [product])

  function handleDeleteProduct() {
    const deleteItem = product.filter(
      (item: CoffeeSelectedProps) => item.id !== id,
    )
    if (deleteItem) {
      setProduct(deleteItem)
    }
  }

  return (
    <>
      <ItemContainer>
        <Info>
          <img src={image} alt="" />
          <DetailsContainer>
            <span>{name}</span>
            <Actions>
              <Count
                id={id}
                price={price}
                quantity={quantity}
                setQuantity={setQuantity}
              />
              <RemoveButton onClick={handleDeleteProduct}>
                <Trash size={16} />
                <span>remover</span>
              </RemoveButton>
            </Actions>
          </DetailsContainer>
        </Info>
        <Price>R$ {totalPriceItem}</Price>
      </ItemContainer>
      <Divider />
    </>
  )
}
