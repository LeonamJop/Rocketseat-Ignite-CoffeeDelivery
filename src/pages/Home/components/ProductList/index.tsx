import { Card } from '../../../../components/Card'
import { ListContainer, ProductListContainer } from './styled'

import expresso from '../../../../assets/CoffeeList/Expresso.svg'
import americano from '../../../../assets/CoffeeList/Americano.svg'
import expressoCremoso from '../../../../assets/CoffeeList/ExpressoCremoso.svg'

const cards = [
  {
    id: 1,
    image: expresso,
    tags: ['TRADICIONAL'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 2,
    image: americano,
    tags: ['TRADICIONAL'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 3,
    image: expressoCremoso,
    tags: ['TRADICIONAL'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
]

export function ProductList() {
  return (
    <ProductListContainer>
      <h1>Nossos cafés</h1>
      <ListContainer>
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            tags={card.tags}
            name={card.name}
            description={card.description}
            price={card.price}
          />
        ))}
      </ListContainer>
    </ProductListContainer>
  )
}
