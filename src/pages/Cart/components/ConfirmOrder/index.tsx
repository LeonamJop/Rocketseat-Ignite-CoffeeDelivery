import {
  ConfirmOrderButton,
  ConfirmOrderCard,
  ConfirmOrderContainer,
  Total,
  TotalContainer,
  TotalItems,
} from './styles'

export function ConfirmOrder() {
  return (
    <ConfirmOrderContainer>
      <h1>Cafés selecionados</h1>
      <ConfirmOrderCard>
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
