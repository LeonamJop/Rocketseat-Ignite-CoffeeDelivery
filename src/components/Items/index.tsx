import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { Icon, Item, ItemsContainer, ListContainer } from './styles'

export function Items() {
  return (
    <ItemsContainer>
      <ListContainer>
        <Item>
          <Icon color="#C47F17">
            <ShoppingCart weight="fill" size={16} />
          </Icon>
          <span>Compra simples e segura</span>
        </Item>
        <Item>
          <Icon color="#DBAC2C">
            <Timer weight="fill" size={16} />
          </Icon>
          <span>Entrega rápida e rastreada</span>
        </Item>
      </ListContainer>
      <ListContainer>
        <Item>
          <Icon color="#574F4D">
            <Package weight="fill" size={16} />
          </Icon>
          <span>Embalagem mantém o café intacto</span>
        </Item>
        <Item>
          <Icon color="#8047F8">
            <Coffee weight="fill" size={16} />
          </Icon>
          <span>O café chega fresquinho até você</span>
        </Item>
      </ListContainer>
    </ItemsContainer>
  )
}
