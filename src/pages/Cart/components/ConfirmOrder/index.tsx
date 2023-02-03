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
  const storedArray = localStorage.getItem('todoList')
  const product = JSON.parse(storedArray || '[{}]')

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
              />
            ))
          : ''}
        <TotalContainer>
          <TotalItems>
            <span>Total de itens</span>
            <p>R$ 29,70</p>
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
