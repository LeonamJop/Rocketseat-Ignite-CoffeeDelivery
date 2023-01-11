import { Card } from '../../../../components/Card'
import { ListContainer, ProductListContainer } from './styled'

export function ProductList() {
  return (
    <ProductListContainer>
      <h1>Nossos cafés</h1>
      <ListContainer>
        <Card />
      </ListContainer>
    </ProductListContainer>
  )
}
