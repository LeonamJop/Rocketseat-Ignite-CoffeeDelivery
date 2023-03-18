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
  const { handleFormatValue, product, existsEmptyFields, cep } =
    useContext(ChoiceProductContext)
  const [totalPriceItems, setTotalPriceItems] = useState(0)

  const [newPrice, setNewPrice] = useState(product)

  useEffect(() => {
    setNewPrice(product)
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
    !product.length || !cep || existsEmptyFields === true

  return (
    <ConfirmOrderContainer>
      <h1>Cafés selecionados</h1>
      <ConfirmOrderCard>
        {newPrice.length > 0 &&
          newPrice.map((newPrice: any) => {
            return (
              <CoffeeSelected
                key={newPrice.id}
                id={newPrice.id}
                image={newPrice.image}
                name={newPrice.name}
                price={newPrice.price}
                quantity={newPrice.quantity}
                setQuantity={newPrice.setQuantity}
                totalPriceItem={newPrice.totalPriceItem}
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
