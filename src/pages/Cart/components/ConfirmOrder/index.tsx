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
  const { handleFormatValue } = useContext(ChoiceProductContext)
  const [totalPriceItems, setTotalPriceItems] = useState(0)
  const storedArray = localStorage.getItem('todoList')
  const product = JSON.parse(storedArray || '[{}]')

  useEffect(() => {
    let sumTotalPriceItems = 0

    for (let i = 0; i < product.length; i++) {
      sumTotalPriceItems += product[i].totalPriceItem
    }

    setTotalPriceItems(sumTotalPriceItems)
  }, [product])

  return (
    <ConfirmOrderContainer>
      <h1>Cafés selecionados</h1>
      <ConfirmOrderCard>
        {product
          ? product.map((product: any) => (
              <CoffeeSelected
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                totalPriceItem={product.totalPriceItem}
              />
            ))
          : ''}
        <TotalContainer>
          <TotalItems>
            <span>Total de itens</span>
            <p>R$ {handleFormatValue(totalPriceItems) || '0,00'}</p>
          </TotalItems>
          <TotalItems>
            <span>Entrega</span>
            <p>R$ 3,50</p>
          </TotalItems>
          <Total>
            <span>Total</span>
            <span>R$ 33,20</span>
          </Total>
        </TotalContainer>
        <ConfirmOrderButton>confirmar pedido</ConfirmOrderButton>
      </ConfirmOrderCard>
    </ConfirmOrderContainer>
  )
}
