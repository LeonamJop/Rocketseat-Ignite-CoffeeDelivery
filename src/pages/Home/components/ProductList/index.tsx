import { Card } from '../../../../components/Card'
import { ListContainer, ProductListContainer } from './styled'

import expresso from '../../../../assets/CoffeeList/Expresso.svg'
import americano from '../../../../assets/CoffeeList/Americano.svg'
import expressoCremoso from '../../../../assets/CoffeeList/ExpressoCremoso.svg'
import expressoGelado from '../../../../assets/CoffeeList/CafeGelado.svg'
import cafeComLeite from '../../../../assets/CoffeeList/cafeComLeite.svg'
import latte from '../../../../assets/CoffeeList/Latte.svg'
import capuccino from '../../../../assets/CoffeeList/Capuccino.svg'
import macchiato from '../../../../assets/CoffeeList/Macchiato.svg'
import mocaccino from '../../../../assets/CoffeeList/Mocaccino.svg'
import chocolateQuente from '../../../../assets/CoffeeList/ChocolateQuente.svg'
import cubano from '../../../../assets/CoffeeList/Cubano.svg'
import havaiano from '../../../../assets/CoffeeList/Havaiano.svg'
import arabe from '../../../../assets/CoffeeList/Arabe.svg'
import irlandes from '../../../../assets/CoffeeList/Irlandes.svg'
// import { useContext } from 'react'
// import { ChoiceProductContext } from '../../../../context/ChoiceProductContext'

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
  {
    id: 4,
    image: expressoGelado,
    tags: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: 5,
    image: cafeComLeite,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: 6,
    image: latte,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: 7,
    image: capuccino,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: 8,
    image: macchiato,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 9,
    image: mocaccino,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: 10,
    image: chocolateQuente,
    tags: ['ESPECIAL', 'COM LEITE'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: 11,
    image: cubano,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: 12,
    image: havaiano,
    tags: ['ESPECIAL'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: 13,
    image: arabe,
    tags: ['ESPECIAL'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: 14,
    image: irlandes,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
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
            id={card.id}
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
