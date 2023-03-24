import { useContext, useEffect, useState } from 'react'
import { ChoiceProductContext } from '../../../../context/ChoiceProductContext'
import { CoffeeSelected } from '../CoffeeSelected'
import {
  ConfirmOrderButton,
  ConfirmOrderCard,
  ConfirmOrderContainer,
  Total,
  TotalContainer,
  TotalItems,
} from './styles'

export function ConfirmOrder() {
  const {
    handleFormatValue,
    product,
    existsEmptyFields,
    cep,
    paymentTypeSelected,
  } = useContext(ChoiceProductContext)
  const [totalPriceItems, setTotalPriceItems] = useState(0)

  const [updateCartProductPrice, setUpdateCartProductPrice] = useState(product)

  useEffect(() => {
    setUpdateCartProductPrice(product)
  }, [product])

  const freight = 3.5

  useEffect(() => {
    let sumTotalPriceItems = 0

    for (let i = 0; i < product.length; i++) {
      sumTotalPriceItems += product[i].totalPriceItem
    }

    setTotalPriceItems(sumTotalPriceItems)
  }, [product])

  const isConfirmedDisabled =
    !product.length ||
    !cep ||
    existsEmptyFields === true ||
    !paymentTypeSelected

  return (
    <ConfirmOrderContainer>
      <h1>Cafés selecionados</h1>
      <ConfirmOrderCard>
        {updateCartProductPrice.length > 0 &&
          updateCartProductPrice.map((updateCartProductPrice: any) => {
            return (
              <CoffeeSelected
                key={updateCartProductPrice.id}
                id={updateCartProductPrice.id}
                image={updateCartProductPrice.image}
                name={updateCartProductPrice.name}
                price={updateCartProductPrice.price}
                quantity={updateCartProductPrice.quantity}
                setQuantity={updateCartProductPrice.setQuantity}
                totalPriceItem={updateCartProductPrice.totalPriceItem}
              />
            )
          })}
        <TotalContainer>
          <TotalItems>
            <span>Total de itens</span>
            <p>R$ {handleFormatValue(totalPriceItems) || '0,00'}</p>
          </TotalItems>
          <TotalItems>
            <span>Entrega</span>
            <p>R$ {totalPriceItems ? handleFormatValue(freight) : '0,00'}</p>
          </TotalItems>
          <Total>
            <span>Total</span>
            <span>
              R${' '}
              {totalPriceItems
                ? handleFormatValue(totalPriceItems + freight)
                : '0,00'}
            </span>
          </Total>
        </TotalContainer>
        <ConfirmOrderButton disabled={isConfirmedDisabled}>
          confirmar pedido
        </ConfirmOrderButton>
      </ConfirmOrderCard>
    </ConfirmOrderContainer>
  )
}
